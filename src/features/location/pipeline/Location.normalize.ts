import type { CincinnatiZipCode } from "../data/ZipCodes.data";
import type { LocationState } from "../state/Location.types";

export type NormalizedLocation = {
  source: "zip" | "address" | "browser";
  zipCode: CincinnatiZipCode | null; // null means “not Cincinnati / not available yet”
  lat: number | null;
  lng: number | null;
  hasProofOfResidency: boolean | null;
};

export function normalizeLocation(state: LocationState): NormalizedLocation {
  const hasProofOfResidency = state.hasProofOfResidency ?? null;

  if (state.mode === "zip") {
    return {
      source: "zip",
      zipCode: state.zip.zipCode ?? null,
      lat: state.zip.lat,
      lng: state.zip.lng,
      hasProofOfResidency,
    };
  }

  if (state.mode === "address") {
    return {
      source: "address",
      zipCode: (state.address.zipCode as CincinnatiZipCode | null) ?? null,
      lat: state.address.lat,
      lng: state.address.lng,
      hasProofOfResidency,
    };
  }

  if (state.mode === "browser") {
    return {
      source: "browser",
      zipCode: (state.browser.zipCode as CincinnatiZipCode | null) ?? null,
      lat: state.browser.lat,
      lng: state.browser.lng,
      hasProofOfResidency,
    };
  }

  return {
    source: "zip",
    zipCode: null,
    lat: null,
    lng: null,
    hasProofOfResidency,
  };
}
