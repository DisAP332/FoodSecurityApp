import { useMemo, useState } from "react";
import { PANTRIES } from "./pantries.data";
import { geocodePantries, downloadJson } from "./geocodePantries";

export function PantryGeocodeTool() {
  const token = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;

  const [busy, setBusy] = useState(false);
  const [doneCount, setDoneCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const remaining = useMemo(() => {
    return PANTRIES.filter(
      (p) => !(typeof p.lat === "number" && typeof p.lng === "number"),
    ).length;
  }, []);

  async function run() {
    setError(null);
    setBusy(true);
    setDoneCount(null);

    try {
      if (!token) throw new Error("Missing VITE_MAPBOX_TOKEN in .env");

      const updated = await geocodePantries(PANTRIES, {
        accessToken: token,
        permanent: true, // set false if you are NOT allowed to store results
      });

      const withCoords = updated.filter(
        (p) => typeof p.lat === "number" && typeof p.lng === "number",
      ).length;

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
          VITE_MAPBOX_TOKEN not found. Add it to your .env.local.
        </p>
      )}

      {error && <p className="text-sm text-red-700">{error}</p>}

      {doneCount !== null && (
        <p className="text-sm text-green-700">
          Done. Pantries with coordinates: <b>{doneCount}</b>. Download started.
        </p>
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
