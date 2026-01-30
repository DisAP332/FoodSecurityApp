import { useEffect, useMemo, useState } from "react";
import type { CincinnatiZipCode } from "../data/ZipCodes.data";
import { toCincinnatiZipCode } from "../data/toCincinnatiZipCode";
import {
  newSessionToken,
  retrieveFeature,
  reverseZip,
  suggestAddress,
} from "../services/mapboxClient";
import { CINCINNATI_ZIP_CENTROIDS } from "../data/Location.zipCentroids";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;

  onSelected: (payload: {
    label: string;
    lat: number;
    lng: number;
    zipCode: CincinnatiZipCode | null;
  }) => void;
};

// Build a bbox from your Cincinnati zip centroid map so Mapbox only suggests inside that area
function buildCincinnatiBbox(padding = 0.02): string {
  const points = Object.values(CINCINNATI_ZIP_CENTROIDS);
  let minLat = Infinity,
    minLng = Infinity,
    maxLat = -Infinity,
    maxLng = -Infinity;

  for (const p of points) {
    minLat = Math.min(minLat, p.lat);
    maxLat = Math.max(maxLat, p.lat);
    minLng = Math.min(minLng, p.lng);
    maxLng = Math.max(maxLng, p.lng);
  }

  // bbox is minLon,minLat,maxLon,maxLat :contentReference[oaicite:10]{index=10}
  return `${minLng - padding},${minLat - padding},${maxLng + padding},${maxLat + padding}`;
}

export function AddressAutocomplete({
  query,
  onQueryChange,
  onSelected,
}: Props) {
  const [sessionToken, setSessionToken] = useState(() => newSessionToken());
  const [suggestions, setSuggestions] = useState<
    { mapbox_id: string; label: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bbox = useMemo(() => buildCincinnatiBbox(), []);

  // Debounced suggest
  useEffect(() => {
    const q = query.trim();
    setError(null);

    if (q.length < 4) {
      setSuggestions([]);
      return;
    }

    const t = window.setTimeout(async () => {
      try {
        setLoading(true);
        const raw = await suggestAddress({
          query: q,
          sessionToken,
          bbox,
          limit: 6,
        });

        setSuggestions(
          raw.map((s) => ({
            mapbox_id: s.mapbox_id,
            label: s.full_address ?? `${s.name}, ${s.place_formatted}`,
          })),
        );
      } catch (e) {
        setError(e instanceof Error ? e.message : "Suggest failed");
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => window.clearTimeout(t);
  }, [query, sessionToken, bbox]);

  async function handlePick(mapboxId: string, label: string) {
    try {
      setError(null);
      setLoading(true);

      // 1) retrieve coords (Search Box retrieve) :contentReference[oaicite:11]{index=11}
      const {
        lat,
        lng,
        label: retrievedLabel,
      } = await retrieveFeature({
        mapboxId,
        sessionToken,
      });

      // 2) reverse geocode zip from coords (Geocoding v6 reverse) :contentReference[oaicite:12]{index=12}
      const zipStr = await reverseZip({ lat, lng });
      const zipCode = zipStr ? toCincinnatiZipCode(zipStr) : null;

      onSelected({
        label: retrievedLabel ?? label,
        lat,
        lng,
        zipCode,
      });

      // 3) New session token after a “completed selection”
      // (keeps billing sessions tidy and avoids mixing separate user searches) :contentReference[oaicite:13]{index=13}
      setSessionToken(newSessionToken());
      setSuggestions([]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Selection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <input
        type="text"
        className="w-full rounded-md border p-2"
        placeholder="Street, City, State"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-autocomplete="list"
        aria-expanded={suggestions.length > 0}
      />

      {loading && <p className="text-xs text-slate-600">Searching…</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}

      {suggestions.length > 0 && (
        <ul className="max-h-56 overflow-auto rounded-md border bg-white">
          {suggestions.map((s) => (
            <li key={s.mapbox_id}>
              <button
                type="button"
                className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                onClick={() => handlePick(s.mapbox_id, s.label)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
