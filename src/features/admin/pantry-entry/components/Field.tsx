import React from "react";

export function Field(props: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-xs font-medium text-slate-700">{props.label}</span>
      {props.children}
    </label>
  );
}
