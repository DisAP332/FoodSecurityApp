import type { Pantry, ServiceSchedule } from "./types";

export function uid(prefix = "p"): string {
  return `${prefix}_${crypto.randomUUID()}`;
}

export function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function emptyService(): ServiceSchedule {
  return {
    label: "Pantry",
    rule: { kind: "unknown" },
    scheduleText: "",
    notes: "",
  };
}

export function emptyPantry(): Pantry {
  return {
    id: uid("pantry"),
    name: "",
    addressLine: "",
    city: "Cincinnati",
    state: "OH",
    zip: "",
    neighborhood: "",
    phone: "",
    eligibility: "",
    additionalServices: "",
    website: "",
    services: [emptyService()],
    lgbtVetted: false,
    lat: undefined,
    lng: undefined,
  };
}
