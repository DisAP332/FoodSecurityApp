import type {
  Pantry,
  PantryEligibility,
  ServiceSchedule,
} from "../../pantries/types/pantry.types";

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

export function formatEligibility(e: any): string {
  if (!e) return "Eligibility: (missing)";
  if (typeof e === "string") return e; // legacy

  if (e.kind === "open_to_all") return "Open to all";
  if (e.kind === "zip_restricted") {
    const zipCodes = Array.isArray(e.zipCodes) ? e.zipCodes : [];
    const zips = zipCodes.length ? zipCodes.join(", ") : "(none listed)";
    return `ZIP restricted: ${zips}${e.needProofOfResidency ? " (proof required)" : ""}`;
  }

  return "Eligibility: (unknown)";
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
    eligibility: { kind: "open_to_all" },
    additionalServices: "",
    website: "",
    services: [emptyService()],
    lgbtVetted: false,
    lat: undefined,
    lng: undefined,
  };
}
