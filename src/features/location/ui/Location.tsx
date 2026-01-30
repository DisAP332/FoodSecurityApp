import { QuestionCard } from "../../../components/questionFormat/QuestionCard";
import {
  CINCINNATI_ZIP_CODES,
  type CincinnatiZipCode,
} from "../data/ZipCodes.data";
import { useLocation } from "../state/useLocation";
import { AddressAutocomplete } from "./AddressAutocomplete";

export function Location() {
  const {
    state,
    setMode,
    setZipCode,
    setAddressQuery,
    setAddressSelected,
    setBrowserCoords,
    setBrowserZip,
    setBrowserError,
    setProofOfResidency,
  } = useLocation();

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
          <div className="space-y-3 rounded-md border p-3">
            <p className="text-sm text-slate-700">
              Click below to request your device location. We’ll convert it to a
              Cincinnati ZIP code.
            </p>

            <button
              type="button"
              className="rounded-md border px-3 py-2 text-sm"
              onClick={async () => {
                try {
                  setBrowserError(null);

                  const { requestBrowserLocation } =
                    await import("../services/geolocation");
                  const { reverseZip } =
                    await import("../services/mapboxClient");
                  const { toCincinnatiZipCode } =
                    await import("../data/toCincinnatiZipCode");

                  const point = await requestBrowserLocation();
                  setBrowserCoords(point.lat, point.lng);

                  const zipStr = await reverseZip({
                    lat: point.lat,
                    lng: point.lng,
                  });
                  const zipCode = zipStr ? toCincinnatiZipCode(zipStr) : null;

                  setBrowserZip(zipCode);
                } catch (e) {
                  setBrowserError(
                    e instanceof Error ? e.message : "Failed to get location.",
                  );
                }
              }}
            >
              Use my current location
            </button>

            {state.browser.error && (
              <p className="text-sm text-red-600">{state.browser.error}</p>
            )}

            {state.browser.lat !== null && state.browser.lng !== null && (
              <p className="text-xs text-slate-600">
                lat/lng: {state.browser.lat.toFixed(5)},{" "}
                {state.browser.lng.toFixed(5)} | ZIP:{" "}
                {state.browser.zipCode ?? "not in Cincinnati"}
              </p>
            )}

            {state.browser.lat !== null &&
              state.browser.lng !== null &&
              state.browser.zipCode === null && (
                <p className="text-sm text-red-600">
                  Your location appears to be outside Cincinnati city limits
                  (for now).
                </p>
              )}
          </div>
        )}

        {mode === "address" && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Enter your address
            </label>

            <AddressAutocomplete
              query={state.address.query}
              onQueryChange={setAddressQuery}
              onSelected={(p) => setAddressSelected(p)}
            />

            {/* Cincinnati guard feedback */}
            {state.address.selectedLabel && state.address.zipCode === null && (
              <p className="text-sm text-red-600">
                This address appears to be outside Cincinnati city limits (for
                now).
              </p>
            )}

            {/* Debug: show derived geo (remove later) */}
            {state.address.lat !== null && state.address.lng !== null && (
              <p className="text-xs text-slate-600">
                lat/lng: {state.address.lat.toFixed(5)},{" "}
                {state.address.lng.toFixed(5)} | ZIP:{" "}
                {state.address.zipCode ?? "not in Cincinnati"}
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
