import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [movie]);

  if (!movie) return null;

  const { name, image, summary, rating, premiered, genres, status, language } = movie;
  const year = premiered ? premiered.split("-")[0] : "N/A";
  const backdrop = image?.original || image?.medium || "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl shadow-black/60"
      >
        <div className="relative h-64 w-full bg-slate-950 md:h-80">
          <img src={backdrop} alt={name} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 p-2 text-sm text-white transition hover:bg-red-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="relative z-10 -mt-12 space-y-4 p-6 md:p-8">
          <h2 className="text-3xl font-black text-white">{name}</h2>

          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
            <span className="rounded-full border border-red-500/40 bg-red-600/15 px-3 py-1 text-red-300">
              ⭐ {rating?.average ? rating.average.toFixed(1) : "N/A"}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              📅 {year}
            </span>
            {language && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                🌐 {language}
              </span>
            )}
            {status && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                📡 {status}
              </span>
            )}
          </div>

          {genres && genres.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
              {genres.map((g) => (
                <span key={g} className="rounded-full bg-white/5 px-2.5 py-1.5">
                  {g}
                </span>
              ))}
            </div>
          )}

          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Overview
            </h4>
            <div
              className="max-h-48 overflow-y-auto pr-2 text-sm leading-7 text-slate-300 md:text-base"
              dangerouslySetInnerHTML={{
                __html: summary || "<p>No overview available for this title.</p>",
              }}
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="rounded-md border border-white/10 bg-white/5 px-6 py-2.5 font-bold text-white transition hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}