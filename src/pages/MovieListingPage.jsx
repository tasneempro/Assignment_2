import  { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieListingPage({ onSelectMovie }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial shows or search query results
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
        
        // TVMaze search endpoint wraps objects in { score, show }
        const formattedData = query.trim() !== "" 
          ? data.map((item) => item.show) 
          : data.slice(0, 24); // Cap initial list to 24 for clean display

        setMovies(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search requests
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 min-h-[80vh]">
      {/* Search Bar Section */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie or TV show..."
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 pl-11 pr-4 py-3.5 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner"
          />
        </div>
      </div>

      {/* Dynamic Content Display */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-slate-400 font-semibold">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mr-3"></div>
          Loading shows...
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-400 font-semibold">
          ⚠️ {error}
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center py-20 text-slate-400 font-semibold">
          No titles found for "{query}". Try searching for something else!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelect={onSelectMovie} />
          ))}
        </div>
      )}
    </div>
  );
}