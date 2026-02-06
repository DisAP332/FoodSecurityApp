import type { Pantry } from "../types/pantry.types";
import { forwardGeocodeAddress } from "./mapboxForwardGeocode";

const CINCINNATI_BBOX = "-84.692637,39.039554,-84.260417,39.310213";

export async function geocodePantries(
  pantries: Pantry[],
  opts: {
    accessToken: string;
    permanent?: boolean;
    bbox?: string;
    delayMs?: number;
  },
) {
  const out: Pantry[] = [];
  const delayMs = opts.delayMs ?? 120;

  for (const p of pantries) {
    // Skip already-geocoded entries
    if (typeof p.lat === "number" && typeof p.lng === "number") {
      out.push(p);
      continue;
    }

    const query = `${p.addressLine}, ${p.city}, ${p.state} ${p.zip}`.trim();

    try {
      const point = await forwardGeocodeAddress(query, {
        accessToken: opts.accessToken,
        bbox: opts.bbox ?? CINCINNATI_BBOX,
        permanent: opts.permanent ?? true,
      });

      if (!point) {
        out.push(p);
      } else {
        out.push({ ...p, lat: point.lat, lng: point.lng });
      }

      // avoid rate limits
      await new Promise((r) => setTimeout(r, delayMs));
    } catch (e) {
      console.error("Failed geocoding:", p.id, p.name, query, e);
      out.push(p);

      // slightly longer delay after errors
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  return out;
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
