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
    <div className="min-h-screen flex flex-col justify-between bg-[#050505] text-white">
      <div className="bg-[#050505]">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="bg-[#050505]">
          {currentPage === "home" ? (
            <HomePage onExploreClick={() => setCurrentPage("movies")} />
          ) : (
            <MovieListingPage onSelectMovie={(movie) => setSelectedMovie(movie)} />
          )}
        </main>
      </div>

      <Footer />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}