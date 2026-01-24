//Convert to normalized shape of data

import type { CincinnatiZipCode } from "../data/ZipCodes.data";
import { LocationState } from "../state/Location.types";

export type NormalizedLocation = {
  zipCode?: CincinnatiZipCode;
  lat: number | null;
  lng: number | null;
  hasProofOfResidency: boolean | null;
  source: "zip" | "address" | "browser";
};

export function normalizeLocation(state: LocationState): NormalizedLocation {
  // placeholder for proof of residency (to be added)
  const hasProofOfResidency: boolean | null = null;

  if (state.mode === "zip") {
    return {
      source: "zip",
      zipCode: state.zipCode,
      lat: null,
      lng: null,
      hasProofOfResidency,
    };
  }

  if (state.mode === "browser") {
    return {
      source: "browser",
      zipCode: undefined,
      lat: null,
      lng: null,
      hasProofOfResidency,
    };
  }

  return {
    source: "address",
    zipCode: undefined,
    lat: null,
    lng: null,
    hasProofOfResidency,
  };
}
