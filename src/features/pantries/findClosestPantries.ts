import type { Pantry } from "./pantry.types";
import { haversineMiles } from "./geo";

export function findClosestPantries(
  user: { lat: number; lng: number },
  pantries: Pantry[],
  count = 15,
) {
  return pantries
    .map((p) => ({
      pantry: p,
      distanceMiles: haversineMiles(user, { lat: p.lat, lng: p.lng }),
    }))
    .sort((a, b) => a.distanceMiles - b.distanceMiles)
    .slice(0, count);
}
