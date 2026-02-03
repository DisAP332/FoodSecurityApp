import type {
  Pantry,
  ServiceSchedule,
  Weekday,
  NthInMonth,
} from "../pantries/types/pantry.types";

/** Utilities */
const pad = (n: number) => String(n).padStart(2, "0");

/** ICS "floating" time: YYYYMMDDTHHMMSS (no Z, no TZID) */
function toIcsLocal(dt: Date) {
  return (
    dt.getFullYear() +
    pad(dt.getMonth() + 1) +
    pad(dt.getDate()) +
    "T" +
    pad(dt.getHours()) +
    pad(dt.getMinutes()) +
    "00"
  );
}

function dtStampUtc() {
  const d = new Date();
  // DTSTAMP is recommended in UTC. We'll emit as UTC Z.
  const pad2 = (x: number) => String(x).padStart(2, "0");
  return (
    d.getUTCFullYear() +
    pad2(d.getUTCMonth() + 1) +
    pad2(d.getUTCDate()) +
    "T" +
    pad2(d.getUTCHours()) +
    pad2(d.getUTCMinutes()) +
    "00Z"
  );
}

function uid() {
  return `${crypto.randomUUID()}@foodsecurityapp`;
}

function escText(s: string) {
  // ICS escaping: backslash, comma, semicolon, newline
  return s
    .replaceAll("\\", "\\\\")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;")
    .replaceAll("\n", "\\n");
}

const WEEKDAY_TO_JS: Record<Weekday, number> = {
  SU: 0,
  MO: 1,
  TU: 2,
  WE: 3,
  TH: 4,
  FR: 5,
  SA: 6,
};

function parseHHMM(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return { h, m };
}

function setTime(base: Date, hhmm: string) {
  const { h, m } = parseHHMM(hhmm);
  const d = new Date(base);
  d.setHours(h, m, 0, 0);
  return d;
}

function addDays(d: Date, days: number) {
  const out = new Date(d);
  out.setDate(out.getDate() + days);
  return out;
}

function startOfDay(d: Date) {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  return out;
}

/** Find next date >= from that matches weekday */
function nextWeekday(from: Date, weekday: Weekday) {
  const fromDay = from.getDay();
  const target = WEEKDAY_TO_JS[weekday];
  const delta = (target - fromDay + 7) % 7;
  return addDays(from, delta);
}

/** nth weekday in a given month. nth: 1-4 or -1 for last */
function nthWeekdayOfMonth(
  year: number,
  monthIndex: number,
  weekday: Weekday,
  nth: NthInMonth,
) {
  const target = WEEKDAY_TO_JS[weekday];

  if (nth === -1) {
    // last weekday of month
    const last = new Date(year, monthIndex + 1, 0); // last day of month
    const delta = (last.getDay() - target + 7) % 7;
    return addDays(last, -delta);
  }

  // first day of month
  const first = new Date(year, monthIndex, 1);
  const firstDelta = (target - first.getDay() + 7) % 7;
  const firstTarget = addDays(first, firstDelta);
  return addDays(firstTarget, (nth - 1) * 7);
}

function isWithinWindow(d: Date, start: Date, end: Date) {
  return d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
}

function buildDescription(p: Pantry, s: ServiceSchedule) {
  const parts: string[] = [];
  if (p.eligibility) parts.push(`Eligibility: ${p.eligibility}`);
  if (s.notes) parts.push(`Notes: ${s.notes}`);
  parts.push(`Schedule: ${s.scheduleText}`);
  if (p.additionalServices)
    parts.push(`Additional services: ${p.additionalServices}`);
  return parts.join("\n");
}

function fullLocation(p: Pantry) {
  return `${p.addressLine}, ${p.city}, ${p.state} ${p.zip}`;
}

/** Expand schedules into concrete (start,end) datetimes */
function expandServiceToOccurrences(
  service: ServiceSchedule,
  windowStart: Date,
  windowEnd: Date,
) {
  const occ: { start: Date; end: Date }[] = [];
  const rule = service.rule;

  if (rule.kind === "unknown") return occ;

  if (rule.kind === "one_off") {
    const base = startOfDay(new Date(rule.dateISO));
    for (const t of rule.times) {
      const start = setTime(base, t.start);
      const end = setTime(base, t.end);
      if (isWithinWindow(start, windowStart, windowEnd))
        occ.push({ start, end });
    }
    return occ;
  }

  if (rule.kind === "weekly") {
    // For each weekday, walk forward week by week
    for (const wd of rule.byDay) {
      let d = startOfDay(nextWeekday(windowStart, wd));
      while (d.getTime() <= windowEnd.getTime()) {
        for (const t of rule.times) {
          const start = setTime(d, t.start);
          const end = setTime(d, t.end);
          if (isWithinWindow(start, windowStart, windowEnd))
            occ.push({ start, end });
        }
        d = addDays(d, 7);
      }
    }
    // Sort by time
    occ.sort((a, b) => a.start.getTime() - b.start.getTime());
    return occ;
  }

  // monthly
  if (rule.kind === "monthly") {
    const startY = windowStart.getFullYear();
    const startM = windowStart.getMonth();
    const endY = windowEnd.getFullYear();
    const endM = windowEnd.getMonth();

    // iterate month by month
    let y = startY;
    let m = startM;
    while (y < endY || (y === endY && m <= endM)) {
      const day = nthWeekdayOfMonth(y, m, rule.byDay, rule.nth);
      const base = startOfDay(day);

      for (const t of rule.times) {
        const start = setTime(base, t.start);
        const end = setTime(base, t.end);
        if (isWithinWindow(start, windowStart, windowEnd))
          occ.push({ start, end });
      }

      // advance month
      m++;
      if (m > 11) {
        m = 0;
        y++;
      }
    }

    occ.sort((a, b) => a.start.getTime() - b.start.getTime());
    return occ;
  }

  return occ;
}

/**
 * Builds a real ICS file:
 * - Generates dated events for the next N weeks from now
 * - Skips services with rule.kind === "unknown"
 */
export function buildIcs(
  pantries: Pantry[],
  opts?: {
    weeksAhead?: number; // default 8
    maxEvents?: number; // default 2000 safety cap
    calendarName?: string;
  },
) {
  const weeksAhead = opts?.weeksAhead ?? 8;
  const maxEvents = opts?.maxEvents ?? 2000;
  const calendarName = opts?.calendarName ?? "Food Security Resources";

  const now = new Date();
  const windowStart = startOfDay(now);
  const windowEnd = addDays(windowStart, weeksAhead * 7);

  const stamp = dtStampUtc();
  const events: string[] = [];

  for (const p of pantries) {
    for (const s of p.services) {
      const occ = expandServiceToOccurrences(s, windowStart, windowEnd);

      // If unknown or empty, skip for now (we can add an “info-only” event later if you want)
      if (occ.length === 0) continue;

      for (const o of occ) {
        if (events.length >= maxEvents) break;

        const summary = `${p.name}${s.label ? ` — ${s.label}` : ""}`;
        const description = buildDescription(p, s);
        const location = fullLocation(p);

        events.push(
          [
            "BEGIN:VEVENT",
            `UID:${uid()}`,
            `DTSTAMP:${stamp}`,
            `SUMMARY:${escText(summary)}`,
            `LOCATION:${escText(location)}`,
            `DESCRIPTION:${escText(description)}`,
            `DTSTART:${toIcsLocal(o.start)}`,
            `DTEND:${toIcsLocal(o.end)}`,
            "END:VEVENT",
          ].join("\r\n"),
        );
      }
    }
  }

  // Add a calendar NAME (non-standard but widely supported: X-WR-CALNAME)
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FoodSecurityApp//EN",
    "CALSCALE:GREGORIAN",
    `X-WR-CALNAME:${escText(calendarName)}`,
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");
}
