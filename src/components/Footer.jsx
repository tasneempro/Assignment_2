

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-7 text-center text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-semibold text-white">MovieExplorer</p>
        <p className="text-sm">© 2026 MovieExplorer. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-red-400">GitHub</a>
          <a href="https://tvmaze.com" target="_blank" rel="noreferrer" className="transition hover:text-red-400">API Data</a>
        </div>
      </div>
    </footer>
  );
}