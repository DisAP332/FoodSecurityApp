import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium ${
              isActive ? "text-black" : "text-slate-600 hover:text-black"
            }`
          }
        >
          Find Pantries
        </NavLink>

        {/* Center Title */}
        <div className="text-base font-semibold tracking-wide">
          Food Security Flow <span className="text-xs">(V1)</span>
        </div>

        {/* Right link */}
        <NavLink
          to="/dataEntryPage"
          className={({ isActive }) =>
            `text-sm font-medium ${
              isActive ? "text-black" : "text-slate-600 hover:text-black"
            }`
          }
        >
          Data Entry
        </NavLink>
      </div>
    </nav>
  );
}
