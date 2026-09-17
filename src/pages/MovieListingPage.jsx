import  { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieListingPage({ onSelectMovie }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = "https://api.tvmaze.com/shows";
        if (query.trim() !== "") {
          url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data.");

        const data = await res.json();
        const formattedData = query.trim() !== ""
          ? data.map((item) => item.show)
          : data.slice(0, 24);

        setMovies(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="mx-auto min-h-[80vh] max-w-7xl px-6 py-8">
      <div className="mx-auto mb-8 max-w-3xl">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie or TV show..."
            className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white placeholder-slate-400 shadow-inner shadow-black/40 outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-sm font-semibold text-slate-300">
          <div className="mr-3 h-8 w-8 animate-spin rounded-full border-b-2 border-red-500"></div>
          Loading titles...
        </div>
      ) : error ? (
        <div className="py-20 text-center text-red-400 font-semibold">
          ⚠️ {error}
        </div>
      ) : movies.length === 0 ? (
        <div className="py-20 text-center text-slate-400 font-semibold">
          No titles found for "{query}". Try searching for something else!
        </div>
      ) : (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight text-white">Trending now</h2>
            <span className="text-sm font-medium text-slate-400">{movies.length} titles</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSelect={onSelectMovie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}