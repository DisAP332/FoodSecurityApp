import type { Pantry } from "../features/pantries/pantry.types";
import type { NormalizedLocation } from "../features/location/pipeline/Location.normalize";
import { findClosestPantries } from "../features/pantries/findClosestPantries";
import { buildKml } from "./buildKml";
import { buildIcs } from "./buildIcs";
import { buildGuideMd } from "./buildGuideMd";

function downloadText(filename: string, text: string, mime = "text/plain") {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}

type Props = {
  location: NormalizedLocation; // must have lat/lng+zip when we call this
  pantries: Pantry[];
};

export function ExportsPanel({ location, pantries }: Props) {
  if (location.lat === null || location.lng === null || !location.zipCode) {
    return null; // only show when location is complete
  }

  const closest = findClosestPantries(
    { lat: location.lat, lng: location.lng },
    pantries,
    15,
  ).map((x) => x.pantry);

  return (
    <div className="space-y-3 rounded-md border p-4">
      <h2 className="text-lg font-semibold">Your files</h2>
      <p className="text-sm text-slate-700">
        Download your map + calendar + guide.
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-map.kml",
              buildKml(closest),
              "application/vnd.google-earth.kml+xml",
            )
          }
        >
          Download KML (Google My Maps)
        </button>

        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-hours.ics",
              buildIcs(closest),
              "text/calendar",
            )
          }
        >
          Download ICS (Google Calendar)
        </button>

        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-guide.md",
              buildGuideMd(closest, location.zipCode),
              "text/markdown",
            )
          }
        >
          Download Guide (Markdown)
        </button>
      </div>
    </div>
  );
}
