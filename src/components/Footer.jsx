

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-6 border-t border-slate-800 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-semibold text-slate-300">🎬 MovieExplorer</p>
        <p className="text-sm">© 2026 MovieExplorer. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">GitHub</a>
          <a href="https://tvmaze.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">API Data</a>
        </div>
      </div>
    </footer>
  );
}