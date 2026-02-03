import type { Pantry } from "../types/pantry.types";
import { haversineMiles } from "../geo/geo";
import { getPantryPoint } from "./getPantryPoint";

export function findClosestPantries(
  user: { lat: number; lng: number },
  pantries: Pantry[],
  count = 15,
) {
  return pantries
    .map((p) => {
      const point = getPantryPoint(p);
      if (!point) return null;

      return {
        pantry: p,
        distanceMiles: haversineMiles(user, point),
        usedFallbackCentroid: !(
          typeof p.lat === "number" && typeof p.lng === "number"
        ),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => a.distanceMiles - b.distanceMiles)
    .slice(0, count);
}
