
export default function MovieCard({ movie, onSelect }) {
  const { name, image, rating, premiered } = movie;
  const year = premiered ? premiered.split("-")[0] : "N/A";
  const poster = image?.medium || "https://via.placeholder.com/210x295?text=No+Poster";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-lg shadow-black/30 transition duration-200 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-red-500/10">
      <div className="relative overflow-hidden bg-black">
        <img
          src={poster}
          alt={name}
          className="aspect-2/3 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute left-3 top-3 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          HD
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="truncate text-lg font-bold text-white" title={name}>
            {name}
          </h3>
          <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
            <span className="font-medium text-red-400">⭐ {rating?.average ? rating.average.toFixed(1) : "N/A"}</span>
            <span>{year}</span>
          </div>
        </div>

        <button
          onClick={() => onSelect(movie)}
          className="mt-4 w-full rounded-md bg-white/5 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
        >
          See Details
        </button>
      </div>
    </div>
  );
}