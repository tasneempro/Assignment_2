
export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div
          onClick={() => setCurrentPage("home")}
          className="flex cursor-pointer items-center gap-2 text-2xl font-black tracking-tight text-red-600"
        >
          <span className="text-3xl">M</span>
          <span className="text-white">MovieExplorer</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setCurrentPage("home")}
            className={`font-semibold transition ${
              currentPage === "home" ? "text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("movies")}
            className={`rounded-md px-4 py-2 font-semibold transition ${
              currentPage === "movies"
                ? "bg-red-600 text-white"
                : "bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            Browse
          </button>
        </div>
      </div>
    </nav>
  );
}