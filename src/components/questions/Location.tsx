import { QuestionCard } from "../questionFormat/QuestionCard";

import {
  CINCINNATI_ZIP_CODES,
  type CincinnatiZipCode,
} from "../../data/cincinnatiZipCodes";

export type LocationMode = "zip" | "browser" | "address";

type LocationProps = {
  mode?: LocationMode;
  zipCode?: CincinnatiZipCode;
  address?: string;

  onModeChange?: (mode: LocationMode) => void;
  onZipChange?: (zip: CincinnatiZipCode) => void;
  onAddressChange?: (address: string) => void;
};

export function Location({
  mode,
  zipCode,
  address,
  onModeChange,
  onZipChange,
  onAddressChange,
}: LocationProps) {
  return (
    <QuestionCard
      title="How would you like to share your location?"
      description="We do NOT save your data! We only use this information to find nearby food resources and determine eligibility."
    >
      <fieldset className="space-y-3">
        <legend className="sr-only">Location input method</legend>

        {/* MODE SELECTION */}
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "zip"}
            onChange={() => onModeChange?.("zip")}
          />
          <span>Use ZIP code</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "browser"}
            onChange={() => onModeChange?.("browser")}
          />
          <span>Use my location</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "address"}
            onChange={() => onModeChange?.("address")}
          />
          <span>Enter address</span>
        </label>
      </fieldset>

      {/* CONDITIONAL INPUTS */}
      <div className="mt-4">
        {mode === "zip" && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Select your ZIP code
            </label>
            <select
              className="w-full rounded-md border p-2"
              value={zipCode ?? ""}
              onChange={(e) =>
                onZipChange?.(e.target.value as CincinnatiZipCode)
              }
            >
              <option value="" disabled>
                Choose a ZIP code
              </option>
              {CINCINNATI_ZIP_CODES.map((zip) => (
                <option key={zip} value={zip}>
                  {zip}
                </option>
              ))}
            </select>
          </div>
        )}

        {mode === "browser" && (
          <div className="rounded-md border p-3 text-sm text-slate-600">
            We will ask for permission to use your device’s location in a later
            step.
          </div>
        )}

        {mode === "address" && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Enter your address
            </label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Street, City, State"
              value={address ?? ""}
              onChange={(e) => onAddressChange?.(e.target.value)}
            />
          </div>
        )}
      </div>
    </QuestionCard>
  );
}
