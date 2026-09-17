export default function MovieCard({ movie, onSelect }) {
  const { name, image, rating, premiered } = movie;
  const year = premiered ? premiered.split("-")[0] : "N/A";
  const poster =
    image?.medium || "https://via.placeholder.com/210x295?text=No+Poster";

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700/60 flex flex-col hover:border-indigo-500/50 hover:shadow-xl transition group">
      <div className="relative overflow-hidden aspect-[2/3] bg-slate-900">
        <img
          src={poster}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white truncate" title={name}>
            {name}
          </h3>
          <div className="flex justify-between items-center mt-2 text-sm text-slate-400 font-medium">
            <span>
              ⭐ {rating?.average ? rating.average.toFixed(1) : "N/A"}
            </span>
            <span>📅 {year}</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(movie)}
          className="w-full py-2.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white rounded-lg font-semibold border border-indigo-500/30 hover:border-indigo-600 transition cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
