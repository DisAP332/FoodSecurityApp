import React from "react";
import type { Pantry } from "../../../pantries/types/pantry.types";

export function PantryList(props: {
  pantries: Pantry[];
  activeId: string;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}) {
  const { pantries, activeId, onSelect, onAdd, onDelete, onDuplicate } = props;

  return (
    <aside className="rounded-lg border p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Entries</h2>
        <button
          type="button"
          className="rounded-md border px-2 py-1 text-xs"
          onClick={onAdd}
        >
          + Add
        </button>
      </div>

      <div className="mt-3 space-y-2">
        {pantries.map((p) => {
          const selected = p.id === activeId;
          return (
            <div
              key={p.id}
              className={`rounded-md border p-2 ${
                selected ? "bg-slate-50" : "bg-white"
              }`}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => onSelect(p.id)}
              >
                <div className="text-sm font-medium">
                  {p.name?.trim() ? p.name : "(unnamed)"}
                </div>
                <div className="text-xs text-slate-600">
                  {p.zip || "—"} • {p.id.slice(0, 8)}…
                </div>
              </button>

              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  className="rounded-md border px-2 py-1 text-xs"
                  onClick={() => onDuplicate(p.id)}
                >
                  Duplicate
                </button>
                <button
                  type="button"
                  className="rounded-md border px-2 py-1 text-xs"
                  onClick={() => onDelete(p.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
