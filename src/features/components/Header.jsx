function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-6 py-5 overflow-scroll sticky top-0">
      <h1 className="text-md font-semibold uppercase tracking-widest text-yellow-950 subpixel-antialiased">
        Fast React Pizza Co.
      </h1>
      <input
        type="search"
        placeholder="Search..."
        className="rounded-full bg-yellow-100 py-2 indent-4 transition-all  focus:scale-x-110 sm:w-80 outline-none px-1 pr-4 text-stone-600  font-medium "
      />

      <p className="text-md hidden font-semibold uppercase tracking-wide text-yellow-950 sm:block">
        Damian
      </p>
    </div>
  );
}

export default Header;
