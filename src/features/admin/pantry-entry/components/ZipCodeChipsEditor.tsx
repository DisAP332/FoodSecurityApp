import React from "react";

export function ZipCodeChipsEditor(props: {
  zipCodes: string[];
  onChange: (zipCodes: string[]) => void;
}) {
  const { zipCodes, onChange } = props;
  const [value, setValue] = React.useState("");

  function addZip(raw: string) {
    const zip = raw.trim();
    if (!zip) return;
    // basic guard: 5 digits (you can tighten to Cincinnati set later)
    if (!/^\d{5}$/.test(zip)) return;

    if (zipCodes.includes(zip)) return;
    onChange([...zipCodes, zip].sort());
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          className="w-full rounded-md border p-2 text-sm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add ZIP (e.g., 45206)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addZip(value);
              setValue("");
            }
          }}
        />
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-sm"
          onClick={() => {
            addZip(value);
            setValue("");
          }}
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {zipCodes.map((z) => (
          <span
            key={z}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
          >
            {z}
            <button
              type="button"
              className="text-slate-500 hover:text-black"
              onClick={() => onChange(zipCodes.filter((x) => x !== z))}
              aria-label={`Remove ZIP ${z}`}
              title="Remove"
            >
              ×
            </button>
          </span>
        ))}

        {zipCodes.length === 0 && (
          <span className="text-xs text-slate-500">No ZIPs added yet.</span>
        )}
      </div>
    </div>
  );
}
