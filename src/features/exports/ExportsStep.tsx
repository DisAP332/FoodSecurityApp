import type { Pantry } from "../pantries/types/pantry.types";
import { PANTRIES } from "../pantries/data/pantries.data";
import { findClosestPantries } from "../pantries/distance/findClosestPantries";
import { buildKml } from "./buildKml";
import { buildIcs } from "./buildIcs";
import { buildGuideMd } from "./buildGuideMd";
import { isPantryEligible } from "../pantries/utils/isPantryEligible";
import { MasterLocation } from "../questionnaire/questionnaire.types";

type Props = {
  masterLocation: MasterLocation;
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
  const eligiblePantries = PANTRIES.filter((p) =>
    isPantryEligible(p, {
      zipCode: masterLocation.zipCode,
      hasProofOfResidency: masterLocation.hasProofOfResidency ?? false,
    }),
  );

  const closest = findClosestPantries(
    { lat: masterLocation.lat, lng: masterLocation.lng },
    eligiblePantries,
    15,
  );

  const closestPantries = closest.map((x) => x.pantry);

  return (
    <div className="space-y-4">
      {/* Overview / purpose */}
      <div className="rounded-md border bg-white p-4">
        <h2 className="text-lg font-semibold">
          Your 15 closest eligible pantries are ready!
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          This page creates files you can import into Google Maps and Google
          Calendar so you can easily find nearby food resources you’re eligible
          for.
        </p>

        <div className="mt-3 grid gap-2 text-sm text-slate-600">
          <div>
            <span className="font-medium text-slate-700">Your ZIP:</span>{" "}
            {masterLocation.zipCode}
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Note: We don’t store your personal data. Files are generated in your
          browser.
        </p>
      </div>

      {/* Download buttons */}
      <div className="rounded-md border bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-800">
          Step 1: Download your files
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="rounded-md border bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
            onClick={() =>
              downloadText(
                "food-security-map.kml",
                buildKml(closestPantries, "Food Security Pantries"),
                "application/vnd.google-earth.kml+xml",
              )
            }
          >
            Download Map (KML)
          </button>

          <button
            className="rounded-md border bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
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
            Download Calendar (ICS)
          </button>

          <button
            className="rounded-md border px-3 py-2 text-sm hover:bg-slate-50"
            onClick={() =>
              downloadText(
                "food-security-guide.md",
                buildGuideMd(closestPantries, masterLocation.zipCode),
                "text/markdown",
              )
            }
          >
            Download Guide (MD)
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Tip: If your on mobile these files may automatically open in the
          correct apps. If not, you can follow steps 2 and 3 below to import
          them manually. The files should be in your Downloads folder.
        </p>
      </div>

      {/* Import instructions */}
      <div className="rounded-md border bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-800">
          Step 2: Import into Google Maps (KML)
        </h3>

        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Open <span className="font-medium">Google My Maps</span> (not
            regular Google Maps).
          </li>
          <li>
            Create a new map, then click{" "}
            <span className="font-medium">Import</span>.
          </li>
          <li>
            Choose <span className="font-medium">food-security-map.kml</span>.
          </li>
          <li>Your pantries will appear as markers on your custom map.</li>
        </ol>

        <p className="mt-3 text-xs text-slate-500">
          If you don’t see an “Import” option, make sure you’re using{" "}
          <span className="font-medium">Google My Maps</span>, not the standard
          Google Maps app.
        </p>
      </div>

      <div className="rounded-md border bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-800">
          Step 3: Import into Google Calendar (ICS)
        </h3>

        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          <li>
            Open <span className="font-medium">Google Calendar</span> in a
            browser (desktop is easiest).
          </li>
          <li>
            On the left, find{" "}
            <span className="font-medium">Other calendars</span> → click{" "}
            <span className="font-medium">+</span> →{" "}
            <span className="font-medium">Import</span>.
          </li>
          <li>
            Select <span className="font-medium">food-security-hours.ics</span>{" "}
            and choose which calendar to import into.
          </li>
          <li>You’ll now see pantry hours/events on your calendar.</li>
        </ol>

        <p className="mt-3 text-xs text-slate-500">
          Calendar hours can change. If something looks off, call the pantry
          first.
        </p>
      </div>

      {/* Back */}
      <div className="flex items-center justify-between">
        <button
          className="rounded-md border px-3 py-2 text-sm hover:bg-slate-50"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
