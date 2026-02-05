import type { Pantry, ScheduleRule } from "./types";

function isTimeHHMM(s: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(s);
}

function isDateISO(s: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(s);
}

export function validatePantries(pantries: Pantry[]): string[] {
  const errs: string[] = [];

  for (const p of pantries) {
    if (!p.id.trim()) errs.push(`Missing id on one entry.`);
    if (!p.name.trim()) errs.push(`"${p.id}": Missing name.`);
    if (!p.addressLine.trim())
      errs.push(`"${p.name || p.id}": Missing addressLine.`);
    if (!p.city.trim()) errs.push(`"${p.name || p.id}": Missing city.`);
    if (!p.state.trim()) errs.push(`"${p.name || p.id}": Missing state.`);
    if (!p.zip.trim()) errs.push(`"${p.name || p.id}": Missing zip.`);

    if (p.website && !/^https?:\/\//i.test(p.website.trim())) {
      errs.push(`"${p.name || p.id}": website should start with http(s)://`);
    }

    if (typeof p.lat === "number" && typeof p.lng === "number") {
      if (p.lat < -90 || p.lat > 90)
        errs.push(`"${p.name || p.id}": lat out of range.`);
      if (p.lng < -180 || p.lng > 180)
        errs.push(`"${p.name || p.id}": lng out of range.`);
    }

    if (!p.services?.length) {
      errs.push(
        `"${p.name || p.id}": Must have at least one service schedule.`,
      );
      continue;
    }

    p.services.forEach((s, si) => {
      if (!s.scheduleText.trim()) {
        errs.push(
          `"${p.name || p.id}" service #${si + 1}: Missing scheduleText.`,
        );
      }

      const r: ScheduleRule = s.rule;

      if (r.kind === "weekly") {
        if (!r.byDay.length)
          errs.push(
            `"${p.name || p.id}" service #${si + 1}: weekly needs byDay.`,
          );
        r.times.forEach((t, ti) => {
          if (!isTimeHHMM(t.start) || !isTimeHHMM(t.end)) {
            errs.push(
              `"${p.name || p.id}" service #${si + 1}: weekly time #${ti + 1} must be HH:MM.`,
            );
          }
        });
      }

      if (r.kind === "monthly") {
        r.times.forEach((t, ti) => {
          if (!isTimeHHMM(t.start) || !isTimeHHMM(t.end)) {
            errs.push(
              `"${p.name || p.id}" service #${si + 1}: monthly time #${ti + 1} must be HH:MM.`,
            );
          }
        });
      }

      if (r.kind === "one_off") {
        if (!isDateISO(r.dateISO)) {
          errs.push(
            `"${p.name || p.id}" service #${si + 1}: one_off dateISO must be YYYY-MM-DD.`,
          );
        }
        r.times.forEach((t, ti) => {
          if (!isTimeHHMM(t.start) || !isTimeHHMM(t.end)) {
            errs.push(
              `"${p.name || p.id}" service #${si + 1}: one_off time #${ti + 1} must be HH:MM.`,
            );
          }
        });
      }
    });
  }

  return errs;
}
