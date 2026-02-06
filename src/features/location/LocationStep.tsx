import { useMemo, useState } from "react";
import { LocationView } from "./ui/LocationView";
import { useLocation } from "./state/useLocation";
import { AddressAutocomplete } from "./ui/AddressAutocomplete";
import { validateLocation } from "./pipeline/Location.validation";
import { normalizeLocation } from "./pipeline/Location.normalize";
import type { QuestionnaireAction } from "./../questionnaire/questionnaire.reducer";
import { AboutSection } from "../../components/AboutSection";

type Props = {
  onNext: () => void;
  dispatch: React.Dispatch<QuestionnaireAction>;
};

export function LocationStep({ onNext, dispatch }: Props) {
  const {
    state,
    setMode,
    setZipCode,
    setAddressQuery,
    setAddressSelected,
    setProofOfResidency,
    setBrowserCoords,
    setBrowserZip,
    setBrowserError,
  } = useLocation();

  const [errors, setErrors] = useState<string[]>([]);

  const addressMode = state.mode === "address";
  const browserMode = state.mode === "browser";
  const zipMode = state.mode === "zip";

  // Optional: show a tight “summary” for debugging while building
  const debug = useMemo(() => {
    if (!state.mode) return "mode: (none)";
    if (state.mode === "zip")
      return `mode: zip, zip: ${state.zip.zipCode ?? "(none)"}`;
    if (state.mode === "address")
      return `mode: address, query: ${state.address.query}`;
    return `mode: browser`;
  }, [state]);

  return (
    <div className="space-y-4">
      <LocationView
        mode={state.mode}
        zipCode={state.zip.zipCode}
        addressQuery={state.address.query}
        onModeChange={(m) => {
          setErrors([]);
          setMode(m);
        }}
        onZipChange={(z) => {
          setErrors([]);
          setZipCode(z);
        }}
        onAddressQueryChange={(q) => {
          setErrors([]);
          setAddressQuery(q);
        }}
      >
        {/* Address autocomplete stays outside the input, but inside the card */}
        {addressMode && (
          <AddressAutocomplete
            query={state.address.query}
            onQueryChange={setAddressQuery}
            onSelected={setAddressSelected}
          />
        )}

        {/* Cincinnati guard feedback */}
        {state.address.selectedLabel && state.address.zipCode === null && (
          <p className="text-sm text-red-600">
            This address appears to be outside Cincinnati city limits (for now).
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

        {browserMode && (
          <div className="space-y-3 rounded-md border p-3">
            <p className="text-sm text-slate-700">
              Click below to request your device location. Please be in home zip
              code area for eligibility accuracy.
            </p>

            <button
              type="button"
              className="rounded-md border px-3 py-2 text-sm"
              onClick={async () => {
                try {
                  setBrowserError(null);

                  const { requestBrowserLocation } =
                    await import("./services/geolocation");
                  const { reverseZip } =
                    await import("./services/mapboxClient");
                  const { toCincinnatiZipCode } =
                    await import("./data/toCincinnatiZipCode");

                  const point = await requestBrowserLocation();
                  setBrowserCoords(point.lat, point.lng);

                  // IMPORTANT: reverseZip expects {lng, lat}
                  const zipStr = await reverseZip({
                    lng: point.lng,
                    lat: point.lat,
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
                </p>
              )}
          </div>
        )}

        {/* Proof of residency (simple for now) */}
        <div>
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(state.hasProofOfResidency)}
              onChange={(e) => setProofOfResidency(e.target.checked)}
            />
            I have proof of residency
          </label>
          <p className="text-xs text-slate-500">
            (e.g. ID or mail with name and address)
          </p>
        </div>
      </LocationView>

      {errors.length > 0 && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          <ul className="list-disc pl-5">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      {zipMode && state.zip.lat !== null && state.zip.lng !== null && (
        <p className="text-xs text-slate-600">
          Using ZIP centroid: {state.zip.lat.toFixed(4)},{" "}
          {state.zip.lng.toFixed(4)}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500">{debug}</div>

        <button
          className="rounded-md border px-4 py-2 text-sm"
          onClick={() => {
            const result = validateLocation(state);
            if (!result.valid) {
              setErrors(result.errors.map((e) => e.message));
              return;
            }

            const normalized = normalizeLocation(state);

            // Final gate before committing to master state
            if (
              !normalized.zipCode ||
              normalized.lat == null ||
              normalized.lng == null
            ) {
              setErrors([
                "Location is incomplete. Please choose a Cincinnati ZIP or select a valid address/location.",
              ]);
              return;
            }

            dispatch({
              type: "SET_LOCATION",
              location: {
                source: normalized.source,
                zipCode: normalized.zipCode,
                lat: normalized.lat,
                lng: normalized.lng,
                hasProofOfResidency: normalized.hasProofOfResidency,
              },
            });

            setErrors([]);
            onNext();
          }}
        >
          Next
        </button>
      </div>
      <AboutSection />
    </div>
  );
}
