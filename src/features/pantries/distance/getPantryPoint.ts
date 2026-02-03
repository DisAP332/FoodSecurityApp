import type { Pantry } from "../types/pantry.types";
import { CINCINNATI_ZIP_CENTROIDS } from "../../location/data/Location.zipCentroids";

// Returns the best available point for distance calcs:
// 1) exact pantry coords if present
// 2) fallback to Cincinnati ZIP centroid if possible
// 3) null if neither available
export function getPantryPoint(p: Pantry): { lat: number; lng: number } | null {
  if (typeof p.lat === "number" && typeof p.lng === "number") {
    return { lat: p.lat, lng: p.lng };
  }

  const z = p.zip;
  const centroid = (
    CINCINNATI_ZIP_CENTROIDS as Record<
      string,
      { lat: number; lng: number } | undefined
    >
  )[z];
  if (centroid) return centroid;

  return null;
}
