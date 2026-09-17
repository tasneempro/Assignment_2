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

  const { name, image, summary, rating, premiered, genres, status, language } =
    movie;
  const year = premiered ? premiered.split("-")[0] : "N/A";
  const backdrop =
    image?.original ||
    image?.medium ||
    "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
      >
        <div className="relative h-64 md:h-80 w-full bg-slate-950">
          <img
            src={backdrop}
            alt={name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full p-2 border border-slate-700 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-4 -mt-12 relative z-10">
          <h2 className="text-3xl font-black text-white">{name}</h2>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <span className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full">
              ⭐ {rating?.average ? rating.average.toFixed(1) : "N/A"}
            </span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              📅 {year}
            </span>
            {language && (
              <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                🌐 {language}
              </span>
            )}
            {status && (
              <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                📡 {status}
              </span>
            )}
          </div>

          {genres && genres.length > 0 && (
            <div className="flex gap-2 text-xs font-semibold text-slate-400">
              {genres.map((g) => (
                <span key={g} className="bg-slate-800 px-2.5 py-1 rounded">
                  {g}
                </span>
              ))}
            </div>
          )}

          <div>
            <h4 className="text-slate-400 font-bold uppercase text-xs tracking-wider mb-2">
              Overview
            </h4>
            <div
              className="text-slate-300 leading-relaxed text-sm md:text-base max-h-48 overflow-y-auto pr-2"
              dangerouslySetInnerHTML={{
                __html:
                  summary || "<p>No overview available for this title.</p>",
              }}
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
