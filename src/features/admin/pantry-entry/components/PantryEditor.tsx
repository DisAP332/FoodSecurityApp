import React from "react";
import type {
  Pantry,
  PantryEligibility,
  ScheduleRule,
} from "../../../pantries/types/pantry.types";
import { Field } from "./Field";
import { RuleEditor } from "./RuleEditor";
import { emptyService } from "../utils";
import { ZipCodeChipsEditor } from "./ZipCodeChipsEditor";

export function PantryEditor(props: {
  pantry: Pantry;
  onChange: (patch: Partial<Pantry>) => void;
}) {
  const { pantry, onChange } = props;

  const eligibility = pantry.eligibility;
  const zipEligibility =
    eligibility.kind === "zip_restricted" ? eligibility : null;

  function updateService(idx: number, patch: any) {
    const nextServices = pantry.services.map((s, i) =>
      i === idx ? { ...s, ...patch } : s,
    );
    onChange({ services: nextServices });
  }

  function addService() {
    onChange({ services: [...pantry.services, emptyService()] });
  }

  function deleteService(idx: number) {
    const next = pantry.services.filter((_, i) => i !== idx);
    onChange({ services: next.length ? next : [emptyService()] });
  }

  return (
    <section className="rounded-lg border p-4">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Edit pantry</h2>
          <p className="text-xs text-slate-500">
            id is used as a stable key. Keep it unique.
          </p>
        </div>

        {/* Basic info */}
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="ID">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.id}
              onChange={(e) => onChange({ id: e.target.value })}
            />
          </Field>

          <Field label="Name">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.name}
              onChange={(e) => onChange({ name: e.target.value })}
            />
          </Field>

          <Field label="Address line">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.addressLine}
              onChange={(e) => onChange({ addressLine: e.target.value })}
              placeholder="123 Main St"
            />
          </Field>

          <Field label="Neighborhood (optional)">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.neighborhood ?? ""}
              onChange={(e) => onChange({ neighborhood: e.target.value })}
              placeholder="Over-the-Rhine"
            />
          </Field>

          <Field label="City">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.city}
              onChange={(e) => onChange({ city: e.target.value })}
            />
          </Field>

          <Field label="State">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.state}
              onChange={(e) => onChange({ state: e.target.value })}
            />
          </Field>

          <Field label="ZIP">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.zip}
              onChange={(e) => onChange({ zip: e.target.value })}
              placeholder="45206"
            />
          </Field>

          <Field label="Phone (optional)">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.phone ?? ""}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="513-555-1234"
            />
          </Field>

          <Field label="Website (optional)">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.website ?? ""}
              onChange={(e) => onChange({ website: e.target.value })}
              placeholder="https://example.org"
            />
          </Field>

          <Field label="Lat (optional)">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.lat ?? ""}
              onChange={(e) =>
                onChange({
                  lat:
                    e.target.value.trim() === ""
                      ? undefined
                      : Number(e.target.value),
                })
              }
              inputMode="decimal"
              placeholder="39.12345"
            />
          </Field>

          <Field label="Lng (optional)">
            <input
              className="w-full rounded-md border p-2"
              value={pantry.lng ?? ""}
              onChange={(e) =>
                onChange({
                  lng:
                    e.target.value.trim() === ""
                      ? undefined
                      : Number(e.target.value),
                })
              }
              inputMode="decimal"
              placeholder="-84.51234"
            />
          </Field>
        </div>

        <Field label="Eligibility">
          <select
            className="w-full rounded-md border p-2"
            value={pantry.eligibility.kind}
            onChange={(e) => {
              const kind = e.target.value as PantryEligibility["kind"];
              onChange({
                eligibility:
                  kind === "open_to_all"
                    ? { kind: "open_to_all" }
                    : {
                        kind: "zip_restricted",
                        zipCodes: [],
                        needProofOfResidency: false,
                      },
              });
            }}
          >
            <option value="open_to_all">Open to all</option>
            <option value="zip_restricted">ZIP code restricted</option>
          </select>
        </Field>

        {zipEligibility && (
          <div className="space-y-2 rounded-md border p-3">
            <div className="text-xs font-medium text-slate-700">
              Allowed ZIP codes
            </div>

            <ZipCodeChipsEditor
              zipCodes={zipEligibility.zipCodes}
              onChange={(zipCodes) =>
                onChange({
                  eligibility: {
                    ...zipEligibility,
                    zipCodes,
                  },
                })
              }
            />

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={zipEligibility.needProofOfResidency}
                onChange={(e) =>
                  onChange({
                    eligibility: {
                      ...zipEligibility,
                      needProofOfResidency: e.target.checked,
                    },
                  })
                }
              />
              Need proof of residency
            </label>
          </div>
        )}

        <div>
          <Field label="Additional services (optional)">
            <textarea
              className="min-h-[70px] w-full rounded-md border p-2"
              value={pantry.additionalServices ?? ""}
              onChange={(e) => onChange({ additionalServices: e.target.value })}
            />
          </Field>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={pantry.lgbtVetted}
            onChange={(e) => onChange({ lgbtVetted: e.target.checked })}
          />
          LGBT vetted
        </label>

        {/* Services */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Services & Schedules</h3>
            <button
              type="button"
              className="rounded-md border px-2 py-1 text-xs"
              onClick={addService}
            >
              + Add service
            </button>
          </div>

          {pantry.services.map((s, idx) => (
            <div key={idx} className="rounded-lg border p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="grid w-full gap-3 md:grid-cols-2">
                  <Field label="Label (optional)">
                    <input
                      className="w-full rounded-md border p-2"
                      value={s.label ?? ""}
                      onChange={(e) =>
                        updateService(idx, { label: e.target.value })
                      }
                      placeholder="Pantry / Meals / Clothing"
                    />
                  </Field>

                  <Field label="Rule kind">
                    <select
                      className="w-full rounded-md border p-2"
                      value={s.rule.kind}
                      onChange={(e) => {
                        const kind = e.target.value as ScheduleRule["kind"];
                        const nextRule: ScheduleRule =
                          kind === "weekly"
                            ? {
                                kind: "weekly",
                                byDay: [],
                                times: [{ start: "09:00", end: "12:00" }],
                              }
                            : kind === "monthly"
                              ? {
                                  kind: "monthly",
                                  byDay: "FR",
                                  nth: 1,
                                  times: [{ start: "09:00", end: "12:00" }],
                                }
                              : kind === "one_off"
                                ? {
                                    kind: "one_off",
                                    dateISO: "2026-01-01",
                                    times: [{ start: "09:00", end: "12:00" }],
                                  }
                                : { kind: "unknown" };

                        updateService(idx, { rule: nextRule });
                      }}
                    >
                      <option value="weekly">weekly</option>
                      <option value="monthly">monthly</option>
                      <option value="one_off">one_off</option>
                      <option value="unknown">unknown</option>
                    </select>
                  </Field>
                </div>

                <button
                  type="button"
                  className="rounded-md border px-2 py-1 text-xs"
                  onClick={() => deleteService(idx)}
                >
                  Delete
                </button>
              </div>

              <div className="mt-3 space-y-3">
                <RuleEditor
                  rule={s.rule}
                  onChange={(rule) => updateService(idx, { rule })}
                />

                <Field label="Schedule text (human-readable)">
                  <input
                    className="w-full rounded-md border p-2"
                    value={s.scheduleText}
                    onChange={(e) =>
                      updateService(idx, { scheduleText: e.target.value })
                    }
                    placeholder="e.g., Tuesdays & Thursdays 12:00–1:30 PM"
                  />
                </Field>

                <Field label="Notes (optional)">
                  <textarea
                    className="min-h-[60px] w-full rounded-md border p-2"
                    value={s.notes ?? ""}
                    onChange={(e) =>
                      updateService(idx, { notes: e.target.value })
                    }
                    placeholder="Line closes at 1:30. Bring ID."
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
