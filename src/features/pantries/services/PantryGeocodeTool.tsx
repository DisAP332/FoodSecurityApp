import { useMemo, useState } from "react";
import { PANTRIES } from "../data/pantries.data";
import { geocodePantries, downloadJson } from "./geocodePantries";

export function PantryGeocodeTool() {
  const token = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;
  console.log(token);

  const [busy, setBusy] = useState(false);
  const [doneCount, setDoneCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [failed, setFailed] = useState<string[]>([]);

  const remaining = useMemo(() => {
    return PANTRIES.filter(
      (p) => !(typeof p.lat === "number" && typeof p.lng === "number"),
    ).length;
  }, []);

  async function run() {
    setError(null);
    setBusy(true);
    setDoneCount(null);
    setFailed([]);

    try {
      if (!token) throw new Error("Missing VITE_MAPBOX_TOKEN in .env.local");

      const updated = await geocodePantries(PANTRIES, {
        accessToken: token,
        permanent: true, // check with mapbox terms and services before full deploy
      });

      const withCoords = updated.filter(
        (p) => typeof p.lat === "number" && typeof p.lng === "number",
      ).length;

      const failedList = updated
        .filter(
          (p) => !(typeof p.lat === "number" && typeof p.lng === "number"),
        )
        .map((p) => `${p.name} (${p.addressLine}, ${p.zip})`);

      setFailed(failedList);
      setDoneCount(withCoords);

      downloadJson("pantries.geocoded.json", updated);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3 rounded-md border bg-white p-4">
      <h2 className="text-lg font-semibold">Pantry Geocode Tool (dev)</h2>

      <p className="text-sm text-slate-600">
        Missing coordinates: <b>{remaining}</b>
      </p>

      {!token && (
        <p className="text-sm text-red-700">
          VITE_MAPBOX_TOKEN not found. Add it to your .env.local and restart
          Vite.
        </p>
      )}

      {error && <p className="text-sm text-red-700">{error}</p>}

      {doneCount !== null && (
        <p className="text-sm text-green-700">
          Done. Pantries with coordinates: <b>{doneCount}</b>. Download started.
        </p>
      )}

      {failed.length > 0 && (
        <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          <div className="font-medium">Couldn’t geocode ({failed.length}):</div>
          <ul className="mt-2 list-disc pl-5">
            {failed.slice(0, 25).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {failed.length > 25 && (
            <div className="mt-2 text-xs text-amber-800">
              Showing first 25. (They’re still included in the downloaded JSON,
              just missing lat/lng.)
            </div>
          )}
        </div>
      )}

      <button
        className="rounded-md border px-3 py-2 text-sm disabled:opacity-50"
        onClick={run}
        disabled={busy || !token}
      >
        {busy ? "Geocoding..." : "Geocode pantries & download JSON"}
      </button>
    </div>
  );
}
