import { formatEligibility } from "../admin/pantry-entry/utils";
import type { Pantry } from "../pantries/types/pantry.types";

export function buildGuideMd(pantries: Pantry[], userZip: string) {
  const lines: string[] = [];

  lines.push(`# Food Resources Guide (Cincinnati)`);
  lines.push(`User ZIP: **${userZip}**`);
  lines.push(``);
  lines.push(`## How to use this`);
  lines.push(
    `1. Open the **KML** file in Google My Maps to see all locations.`,
  );
  lines.push(
    `2. Import the **ICS** file into Google Calendar to track pantry hours.`,
  );
  lines.push(
    `3. Use the entries below to prepare what you need and when to arrive.`,
  );
  lines.push(``);

  for (const p of pantries) {
    lines.push(`---`);
    lines.push(`## ${p.name}`);
    lines.push(`**Address:** ${p.addressLine}, ${p.city}, ${p.state} ${p.zip}`);
    if (p.phone) lines.push(`**Phone:** ${p.phone}`);
    if (p.eligibility)
      lines.push(`**Eligibility:** ${formatEligibility(p.eligibility)}`);
    if (p.additionalServices)
      lines.push(`**Additional services:** ${p.additionalServices}`);
    if (typeof p.lgbtVetted === "boolean") {
      lines.push(
        `**LGBT vetted:** ${p.lgbtVetted ? "Yes" : "No (not yet vetted)"}`,
      );
    }

    if (p.services?.length) {
      lines.push(``);
      lines.push(`**Services & hours:**`);
      for (const s of p.services) {
        const label = s.label ? `${s.label}: ` : "";
        lines.push(`- ${label}${s.scheduleText}`);
        if (s.notes) lines.push(`  - Notes: ${s.notes}`);
      }
    }

    lines.push(``);
    lines.push(`**Tips for arrival:**`);
    lines.push(`- Arrive early if lines are common.`);
    lines.push(`- Bring ID and proof of residency if required.`);
    lines.push(
      `- Call ahead if you’re unsure about eligibility or holiday closures.`,
    );
    lines.push(``);
  }

  return lines.join("\n");
}
