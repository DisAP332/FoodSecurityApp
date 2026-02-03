import type { Pantry } from "../pantries/types/pantry.types";
import { PANTRIES } from "../pantries/data/pantries.data";
import { findClosestPantries } from "../pantries/distance/findClosestPantries";
import { buildKml } from "./buildKml";
import { buildIcs } from "./buildIcs";
import { buildGuideMd } from "./buildGuideMd";

type Props = {
  masterLocation: {
    zipCode: string;
    lat: number;
    lng: number;
  };
  onBack: () => void;
};

function downloadText(filename: string, text: string, mime: string) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function ExportsStep({ masterLocation, onBack }: Props) {
  const closest = findClosestPantries(
    { lat: masterLocation.lat, lng: masterLocation.lng },
    PANTRIES,
    15,
  );

  const closestPantries = closest.map((x) => x.pantry);

  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4">
        <h2 className="text-lg font-semibold">Your results</h2>
        <p className="text-sm text-slate-600">
          Closest pantries: {closestPantries.length}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-map.kml",
              buildKml(closestPantries, "Food Security Pantries"),
              "application/vnd.google-earth.kml+xml",
            )
          }
        >
          Download KML
        </button>

        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-hours.ics",
              buildIcs(closestPantries, {
                weeksAhead: 8,
                calendarName: "Food Resources",
              }),
              "text/calendar",
            )
          }
        >
          Download ICS
        </button>

        <button
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() =>
            downloadText(
              "food-security-guide.md",
              buildGuideMd(closestPantries, masterLocation.zipCode),
              "text/markdown",
            )
          }
        >
          Download Guide
        </button>
      </div>

      <button className="rounded-md border px-3 py-2 text-sm" onClick={onBack}>
        Back
      </button>
    </div>
  );
}
