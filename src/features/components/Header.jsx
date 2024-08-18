function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-6 py-2">
      <h1 className="text-md font-semibold uppercase tracking-wide text-slate-800">
        Fast React Pizza Co.
      </h1>
      <input
        type="search"
        placeholder="Search..."
        className="rounded-full bg-yellow-100 py-1 indent-4 placeholder:italic sm:w-80"
      />

      <p className="text-md hidden font-semibold uppercase tracking-wide text-slate-800 sm:block">
        Damian
      </p>
    </div>
  );
}

export default Header;
