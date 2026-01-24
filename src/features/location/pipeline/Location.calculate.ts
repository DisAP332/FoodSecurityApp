import type { NormalizedLocation } from "./Location.normalize";

export type LocationCalc = {
  locationComplete: boolean;
};

export function calculateLocation(
  normalized: NormalizedLocation,
): LocationCalc {
  // For now: ZIP is enough to be considered "complete"
  // Later: require lat/lng for address/browser paths
  const locationComplete =
    normalized.source === "zip"
      ? Boolean(normalized.zipCode)
      : normalized.lat !== null && normalized.lng !== null;

  return { locationComplete };
}
