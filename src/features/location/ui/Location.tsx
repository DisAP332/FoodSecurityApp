import { QuestionCard } from "../../../components/questionFormat/QuestionCard";
import {
  CINCINNATI_ZIP_CODES,
  type CincinnatiZipCode,
} from "../data/ZipCodes.data";
import { useLocation } from "../state/useLocation";

export function Location() {
  const { state, setMode, setZipCode, setAddressQuery, setProofOfResidency } =
    useLocation();

  const mode = state.mode;
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
            onChange={() => setMode("zip")}
          />
          <span>Use ZIP code</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "browser"}
            onChange={() => setMode("browser")}
          />
          <span>Use my location</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "address"}
            onChange={() => setMode("address")}
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
              value={state.zip.zipCode ?? ""}
              onChange={(e) => setZipCode(e.target.value as CincinnatiZipCode)}
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
            {/* Debug readout */}
            {state.zip.lat !== null && state.zip.lng !== null && (
              <p className="text-xs text-slate-600">
                Using ZIP centroid: {state.zip.lat.toFixed(4)},{" "}
                {state.zip.lng.toFixed(4)}
              </p>
            )}
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
              value={state.address.query}
              onChange={(e) => setAddressQuery(e.target.value)}
            />

            {/* Later: show suggestion dropdown + selection */}
            {state.address.selectedLabel && (
              <p className="text-xs text-slate-600">
                Selected: {state.address.selectedLabel}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Proof of residency (since you said it's needed) */}
      <div className="mt-6">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={state.hasProofOfResidency ?? false}
            onChange={(e) => setProofOfResidency(e.target.checked)}
          />
          <span>I have proof of Cincinnati residency</span>
        </label>

        {state.hasProofOfResidency === null && (
          <p className="mt-1 text-xs text-slate-600">
            Required for eligibility checks.
          </p>
        )}
      </div>
    </QuestionCard>
  );
}
