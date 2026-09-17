export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div
        onClick={() => setCurrentPage("home")}
        className="flex items-center gap-2 text-2xl font-extrabold cursor-pointer tracking-wider text-indigo-500"
      >
        <span>🎬</span> MovieExplorer
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={() => setCurrentPage("home")}
          className={`font-semibold transition hover:text-indigo-400 ${
            currentPage === "home" ? "text-indigo-500" : "text-slate-300"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("movies")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            currentPage === "movies"
              ? "bg-indigo-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          Explore Movies
        </button>
      </div>
    </nav>
  );
}
