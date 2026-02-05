import React from "react";
import type { TimeRange } from "../types";

export function TimesEditor(props: {
  times: TimeRange[];
  onChange: (times: TimeRange[]) => void;
}) {
  const { times, onChange } = props;

  function updateTime(i: number, patch: Partial<TimeRange>) {
    onChange(times.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  }

  return (
    <div className="space-y-2">
      <div className="text-xs font-medium text-slate-700">Times</div>

      {times.map((t, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            className="w-28 rounded-md border p-2 text-sm"
            value={t.start}
            onChange={(e) => updateTime(i, { start: e.target.value })}
            placeholder="09:30"
          />
          <span className="text-sm text-slate-500">to</span>
          <input
            className="w-28 rounded-md border p-2 text-sm"
            value={t.end}
            onChange={(e) => updateTime(i, { end: e.target.value })}
            placeholder="12:00"
          />

          <button
            type="button"
            className="rounded-md border px-2 py-1 text-xs"
            onClick={() => onChange(times.filter((_, idx) => idx !== i))}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="rounded-md border px-2 py-1 text-xs"
        onClick={() => onChange([...times, { start: "09:00", end: "12:00" }])}
      >
        + Add time block
      </button>
    </div>
  );
}
