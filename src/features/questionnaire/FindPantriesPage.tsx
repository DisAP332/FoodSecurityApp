import { useState } from "react";
import { LocationStep } from "../location/LocationStep";
import { ExportsStep } from "../exports/ExportsStep";
import { useQuestionnaire } from "./useQuestionnaire";
import { PantryGeocodeTool } from "../pantries/services/PantryGeocodeTool";

type Step = "location" | "exports";

export function FindPantriesPage() {
  const { state, dispatch } = useQuestionnaire();
  const [step, setStep] = useState<Step>("location");

  return (
    <main className="mx-auto max-w-md px-4 py-6">
      {step === "location" && (
        <LocationStep onNext={() => setStep("exports")} dispatch={dispatch} />
      )}

      {step === "exports" && state.location && (
        <ExportsStep
          masterLocation={state.location}
          onBack={() => setStep("location")}
        />
      )}
      {import.meta.env.DEV && <PantryGeocodeTool />}
    </main>
  );
}
