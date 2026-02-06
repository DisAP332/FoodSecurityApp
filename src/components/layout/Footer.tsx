export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t bg-white py-4 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        {/* Left / Center area */}
        <div>© {year} Food Security Flow</div>

        {/* Right side */}
        <div className="flex items-center gap-6 text-right">
          <span>Serana Robinson Web Development</span>

          <a
            href="https://cash.app/$mangosiriachaxx"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-3 py-1 transition hover:bg-green-50 hover:text-green-700"
          >
            ☕ Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
