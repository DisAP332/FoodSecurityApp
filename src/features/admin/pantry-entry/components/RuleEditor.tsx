import React from "react";
import type {
  NthInMonth,
  ScheduleRule,
  Weekday,
} from "../../../pantries/types/pantry.types";
import { Field } from "./Field";
import { TimesEditor } from "./TimesEditor";

const WEEKDAYS: { key: Weekday; label: string }[] = [
  { key: "MO", label: "Mon" },
  { key: "TU", label: "Tue" },
  { key: "WE", label: "Wed" },
  { key: "TH", label: "Thu" },
  { key: "FR", label: "Fri" },
  { key: "SA", label: "Sat" },
  { key: "SU", label: "Sun" },
];

const NTH_LABEL: Record<NthInMonth, string> = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  [-1]: "Last",
};

export function RuleEditor(props: {
  rule: ScheduleRule;
  onChange: (rule: ScheduleRule) => void;
}) {
  const { rule, onChange } = props;

  if (rule.kind === "unknown") {
    return (
      <div className="rounded-md border p-2 text-sm text-slate-600">
        Unknown schedule. Keep <span className="font-mono">scheduleText</span>{" "}
        accurate.
      </div>
    );
  }

  if (rule.kind === "one_off") {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Date (YYYY-MM-DD)">
          <input
            className="w-full rounded-md border p-2"
            value={rule.dateISO}
            onChange={(e) => onChange({ ...rule, dateISO: e.target.value })}
            placeholder="2026-02-10"
          />
        </Field>
        <TimesEditor
          times={rule.times}
          onChange={(times) => onChange({ ...rule, times })}
        />
      </div>
    );
  }

  if (rule.kind === "monthly") {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Nth in month">
          <select
            className="w-full rounded-md border p-2"
            value={String(rule.nth)}
            onChange={(e) =>
              onChange({ ...rule, nth: Number(e.target.value) as NthInMonth })
            }
          >
            {[1, 2, 3, 4, -1].map((n) => (
              <option key={n} value={String(n)}>
                {NTH_LABEL[n as NthInMonth]}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Weekday">
          <select
            className="w-full rounded-md border p-2"
            value={rule.byDay}
            onChange={(e) =>
              onChange({ ...rule, byDay: e.target.value as Weekday })
            }
          >
            {WEEKDAYS.map((d) => (
              <option key={d.key} value={d.key}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <TimesEditor
            times={rule.times}
            onChange={(times) => onChange({ ...rule, times })}
          />
        </div>
      </div>
    );
  }

  // weekly
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Field label="Days">
        <div className="flex flex-wrap gap-2 rounded-md border p-2">
          {WEEKDAYS.map((d) => {
            const checked = rule.byDay.includes(d.key);
            return (
              <label key={d.key} className="flex items-center gap-1 text-xs">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    const byDay = e.target.checked
                      ? [...rule.byDay, d.key]
                      : rule.byDay.filter((x) => x !== d.key);
                    onChange({ ...rule, byDay });
                  }}
                />
                {d.label}
              </label>
            );
          })}
        </div>
      </Field>

      <TimesEditor
        times={rule.times}
        onChange={(times) => onChange({ ...rule, times })}
      />
    </div>
  );
}
