import  { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieListingPage from "./pages/MovieListingPage";
import MovieModal from "./components/MovieModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' or 'movies'
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-slate-100">
      <div>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          {currentPage === "home" ? (
            <HomePage onExploreClick={() => setCurrentPage("movies")} />
          ) : (
            <MovieListingPage onSelectMovie={(movie) => setSelectedMovie(movie)} />
          )}
        </main>
      </div>

      <Footer />

      {/* Modal Integration */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}