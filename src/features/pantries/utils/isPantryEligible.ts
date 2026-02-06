import type { Pantry } from "../types/pantry.types";

export function isPantryEligible(
  pantry: Pantry,
  user: {
    zipCode: string;
    hasProofOfResidency: boolean;
  },
): boolean {
  const e = pantry.eligibility;

  // No eligibility defined = treat as not eligible (safer default)
  if (!e) return false;

  if (e.kind === "open_to_all") {
    return true;
  }

  if (e.kind === "zip_restricted") {
    const zipMatch = e.zipCodes.includes(user.zipCode);

    if (!zipMatch) return false;

    if (e.needProofOfResidency && !user.hasProofOfResidency) {
      return false;
    }

    return true;
  }

  return false;
}
