import React, { useEffect, useMemo, useState } from "react";
import type { Pantry } from "../../pantries/types/pantry.types";
import { emptyPantry, uid, downloadJson } from "./utils";
import { loadDraft, saveDraft, clearDraft } from "./draftStorage";
import { validatePantries } from "./validators";
import { PantryList } from "./components/PantryList";
import { PantryEditor } from "./components/PantryEditor";

export function PantryEntryPage() {
  const [pantries, setPantries] = useState<Pantry[]>(() => {
    const restored = loadDraft();
    return restored && restored.length ? restored : [emptyPantry()];
  });

  const [activeId, setActiveId] = useState<string>(() => {
    const restored = loadDraft();
    return restored && restored.length ? restored[0].id : "";
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    saveDraft(pantries);
  }, [pantries]);

  useEffect(() => {
    if (!pantries.length) return;
    if (!activeId || !pantries.some((p) => p.id === activeId)) {
      setActiveId(pantries[0].id);
    }
  }, [pantries, activeId]);

  const active = useMemo(
    () => pantries.find((p) => p.id === activeId) ?? null,
    [pantries, activeId],
  );

  function updateActive(patch: Partial<Pantry>) {
    setPantries((prev) =>
      prev.map((p) => (p.id === activeId ? { ...p, ...patch } : p)),
    );
  }

  function addPantry() {
    const p = emptyPantry();
    setPantries((prev) => [...prev, p]);
    setActiveId(p.id);
    setFormErrors([]);
  }

  function deletePantry(id: string) {
    setPantries((prev) => {
      const next = prev.filter((p) => p.id !== id);
      return next.length ? next : [emptyPantry()];
    });
    setFormErrors([]);
  }

  function duplicatePantry(id: string) {
    const p = pantries.find((x) => x.id === id);
    if (!p) return;

    const copy: Pantry = {
      ...p,
      id: uid("pantry"),
      name: p.name ? `${p.name} (copy)` : "",
    };
    setPantries((prev) => [...prev, copy]);
    setActiveId(copy.id);
    setFormErrors([]);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-4 p-4">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">Pantry Data Entry</h1>
        <p className="text-sm text-slate-600">
          This section is for adding new cities or updating pantry information!
          If you want to add your own city, please fill this out and email us
          the .JSON file to review and publish!
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-[280px_1fr]">
        <PantryList
          pantries={pantries}
          activeId={activeId}
          onSelect={setActiveId}
          onAdd={addPantry}
          onDelete={deletePantry}
          onDuplicate={duplicatePantry}
        />

        {active ? (
          <PantryEditor pantry={active} onChange={updateActive} />
        ) : null}
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() => setFormErrors(validatePantries(pantries))}
        >
          Validate
        </button>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-md border px-3 py-2 text-sm"
            onClick={() => {
              const errs = validatePantries(pantries);
              if (errs.length) {
                setFormErrors(errs);
                return;
              }
              setFormErrors([]);
              downloadJson("pantries.json", pantries);
            }}
          >
            Download JSON
          </button>

          <button
            type="button"
            className="rounded-md border px-3 py-2 text-sm"
            onClick={() => {
              clearDraft();
              setFormErrors([]);
              const fresh = [emptyPantry()];
              setPantries(fresh);
              setActiveId(fresh[0].id);
            }}
          >
            Clear draft
          </button>
        </div>
      </div>

      {formErrors.length > 0 && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <div className="font-medium">Fix these issues:</div>
          <ul className="list-disc pl-5">
            {formErrors.slice(0, 30).map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          {formErrors.length > 30 && (
            <div className="mt-1 text-xs text-red-700">
              (Showing first 30 of {formErrors.length})
            </div>
          )}
        </div>
      )}
    </div>
  );
}
