//Convert to normalized shape of data

import type { CincinnatiZipCode } from "../data/ZipCodes.data";
import type { LocationState } from "../state/Location.types";

export type NormalizedLocation = {
  zipCode: CincinnatiZipCode | null;
  lat: number | null;
  lng: number | null;
  hasProofOfResidency: boolean | null;
  source: "zip" | "address" | "browser";
};

export function normalizeLocation(state: LocationState): NormalizedLocation {
  // placeholder for proof of residency (to be added)
  const hasProofOfResidency: boolean | null = state.hasProofOfResidency;

  if (state.mode === "zip") {
    return {
      source: "zip",
      zipCode: state.zip.zipCode ?? null,
      lat: state.zip.lat,
      lng: state.zip.lng,
      hasProofOfResidency,
    };
  }

  if (state.mode === "browser") {
    return {
      source: "browser",
      zipCode: state.browser.zipCode,
      lat: state.browser.lat,
      lng: state.browser.lng,
      hasProofOfResidency,
    };
  }

  return {
    source: "address",
    zipCode: state.address.zipCode as CincinnatiZipCode | null,
    lat: state.address.lat,
    lng: state.address.lng,
    hasProofOfResidency,
  };
}
