import type { Pantry } from "../pantries/types/pantry.types";

function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildKml(pantries: Pantry[], name = "Food Security Pantries") {
  const placemarks = pantries
    .map((p) => {
      const servicesText = p.services?.length
        ? `Services: ${p.services
            .map((s) => {
              const label = s.label ? `${s.label}: ` : "";
              const notes = s.notes ? ` (Notes: ${s.notes})` : "";
              return `${label}${s.scheduleText}${notes}`;
            })
            .join("; ")}`
        : "";

      const description = esc(
        [
          p.addressLine,
          `${p.city}, ${p.state} ${p.zip}`,
          p.phone ? `Phone: ${p.phone}` : "",
          p.eligibility ? `Eligibility: ${p.eligibility}` : "",
          p.additionalServices
            ? `Additional services: ${p.additionalServices}`
            : "",
          servicesText,
          typeof p.lgbtVetted === "boolean"
            ? `LGBT vetted: ${p.lgbtVetted ? "Yes" : "No (not yet vetted)"}`
            : "",
        ]
          .filter(Boolean)
          .join("\n"),
      );

      const hasCoords =
        typeof p.lat === "number" &&
        typeof p.lng === "number" &&
        Number.isFinite(p.lat) &&
        Number.isFinite(p.lng);

      return `
  <Placemark>
    <name>${esc(p.name)}</name>
    <description>${description}</description>
    ${hasCoords ? `<Point><coordinates>${p.lng},${p.lat},0</coordinates></Point>` : ""}
  </Placemark>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>${esc(name)}</name>
  ${placemarks}
</Document>
</kml>`;
}
