import { useLocation } from "./features/location/state/useLocation.ts";
import { Location } from "./features/location/ui/Location.tsx";

function App() {
  const location = useLocation();

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Food Security App</h1>

      <Location
        mode={location.state.mode}
        zipCode={location.state.zipCode}
        address={location.state.address}
        onModeChange={location.setMode}
        onZipChange={location.setZipCode}
        onAddressChange={location.setAddress}
      />

      <button
        disabled={!location.state.isValid}
        className="mt-6 w-full bg-black text-white p-3 disabled:opacity-50"
      >
        Next
      </button>
    </main>
  );
}

export default App;
