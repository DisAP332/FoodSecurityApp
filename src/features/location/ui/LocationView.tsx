import { QuestionCard } from "../../../components/questionFormat/QuestionCard";
import {
  CINCINNATI_ZIP_CODES,
  type CincinnatiZipCode,
} from "../data/ZipCodes.data";
import type { LocationMode } from "../state/Location.types";

type Props = {
  mode?: LocationMode;
  zipCode?: CincinnatiZipCode;
  addressQuery: string;

  onModeChange: (mode: LocationMode) => void;
  onZipChange: (zip: CincinnatiZipCode) => void;
  onAddressQueryChange: (q: string) => void;

  // Slot for AddressAutocomplete UI, proof checkbox, browser messages, etc.
  children?: React.ReactNode;
};

export function LocationView({
  mode,
  zipCode,
  addressQuery,
  onModeChange,
  onZipChange,
  onAddressQueryChange,
  children,
}: Props) {
  return (
    <QuestionCard
      title="How would you like to share your location?"
      description="We do NOT save your data! We only use this information to find nearby food resources and determine eligibility."
    >
      <fieldset className="space-y-3">
        <legend className="sr-only">Location input method</legend>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "zip"}
            onChange={() => onModeChange("zip")}
          />
          <span>Use ZIP code</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "browser"}
            onChange={() => onModeChange("browser")}
          />
          <span>Use my location</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="location-mode"
            checked={mode === "address"}
            onChange={() => onModeChange("address")}
          />
          <span>Enter address</span>
        </label>
      </fieldset>

      <div className="mt-4 space-y-3">
        {mode === "zip" && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Select your ZIP code
            </label>
            <select
              className="w-full rounded-md border p-2"
              value={zipCode ?? ""}
              onChange={(e) => onZipChange(e.target.value as CincinnatiZipCode)}
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

        {children}
      </div>
    </QuestionCard>
  );
}
