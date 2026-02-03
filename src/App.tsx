import { useState } from "react";
import { LocationStep } from "./features/location/LocationStep";
import { ExportsStep } from "./features/exports/ExportsStep";
import { useQuestionnaire } from "./features/questionnaire/useQuestionnaire";

type Step = "location" | "exports";

export default function App() {
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
    </main>
  );
}

// import { useLocation } from "./features/location/state/useLocation.ts";
// import { Location } from "./features/location/ui/Location.tsx";
// import { PantryGeocodeTool } from "./features/pantries/PantryGeocodeTool.tsx";

// function App() {
//   const location = useLocation();

//   return (
//     <main className="p-6 max-w-md mx-auto">
//       <h1 className="text-xl font-bold mb-4">Food Security App</h1>

//       <Location
//         mode={location.state.mode}
//         zipCode={location.state.zipCode}
//         address={location.state.address}
//         onModeChange={location.setMode}
//         onZipChange={location.setZipCode}
//         onAddressChange={location.setAddress}
//       />

//       <button
//         disabled={!location.state.isValid}
//         className="mt-6 w-full bg-black text-white p-3 disabled:opacity-50"
//       >
//         Next
//       </button>
//       <PantryGeocodeTool />
//     </main>
//   );
// }

// export default App;
