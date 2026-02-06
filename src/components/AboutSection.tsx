export function AboutSection() {
  return (
    <section className="mx-auto mt-12 max-w-3xl space-y-6 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-800">
        About Food Security Flow
      </h2>

      <p className="text-slate-700">
        Food Security Flow helps Cincinnati residents quickly find nearby food
        pantries they are eligible for!
      </p>

      <p className="text-slate-700">
        Based on your location and eligibility information, the app calculates
        the closest food pantries and generates:
      </p>

      <ul className="list-disc space-y-2 pl-6 text-slate-700">
        <li>
          A custom <strong>Google Maps file</strong> with pantry locations for
          easy navigation
        </li>
        <li>
          A <strong>Google Calendar (.ics)</strong> file with pantry hours
          automatically scheduled{"(:"}
        </li>
        <li>
          A simple <strong>step-by-step guide</strong> with eligibility
          information and preparation tips!
        </li>
      </ul>

      <p className="text-slate-700">
        We do not store personal data. Location information is used only to
        calculate results in real time.
      </p>

      <p className="text-sm text-slate-500">
        Built to reduce friction, increase access, and make food support easier
        to navigate. {"<3"}
      </p>
    </section>
  );
}
