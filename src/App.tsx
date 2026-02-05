import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { FindPantriesPage } from "./features/questionnaire/FindPantriesPage";
import { PantryEntryPage } from "./features/admin/pantry-entry/PantryEntryPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<FindPantriesPage />} />
        <Route path="/admin" element={<PantryEntryPage />} />

        {/* optional: redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
