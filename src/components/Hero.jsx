
export default function Hero({ onExploreClick }) {
  return (
    <div className="relative flex min-h-[75vh] items-center border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.28),_transparent_30%),linear-gradient(180deg,_#050505_0%,_#111827_100%)] px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 py-16">
        <div className="z-10 max-w-2xl space-y-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">New & trending</p>
          <h1 className="text-4xl font-black leading-none tracking-tight text-white md:text-7xl">
            Enjoy the best stories,
            <span className="block text-red-500">all in one place.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Explore smart picks, watchlists, and detail-rich movie discovery in a sleek streaming-style layout.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="rounded-md bg-red-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500"
            >
              Browse now
            </button>
            <button
              onClick={onExploreClick}
              className="rounded-md border border-white/20 bg-white/5 px-7 py-3 text-base font-bold text-white transition hover:bg-white/10"
            >
              Watch list
            </button>
          </div>
        </div>

        <div className="hidden w-full max-w-md rounded-3xl border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/60 md:block">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
            <div className="flex h-72 items-end justify-between bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.4),_transparent_45%),linear-gradient(180deg,_rgba(15,23,42,0.2),_rgba(2,6,23,0.9))] p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Featured</p>
                <h2 className="mt-3 text-3xl font-black text-white">Movie</h2>
              </div>
              <div className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm font-bold text-red-300">
                8.8 ★
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}