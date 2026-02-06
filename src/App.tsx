import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { FindPantriesPage } from "./features/questionnaire/FindPantriesPage";
import { PantryEntryPage } from "./features/admin/pantry-entry/PantryEntryPage";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      {/* This grows and pushes footer down */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<FindPantriesPage />} />
          <Route path="/dataEntryPage" element={<PantryEntryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
