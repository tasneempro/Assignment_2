export default function Hero({ onExploreClick }) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-[75vh] flex items-center justify-center px-6 text-center border-b border-slate-800">
      <div className="max-w-3xl z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
          DISCOVER YOUR NEXT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            FAVORITE MOVIE
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto">
          Explore thousands of movies and TV shows from around the world with
          real-time details and summaries.
        </p>
        <div className="pt-4">
          <button
            onClick={onExploreClick}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
