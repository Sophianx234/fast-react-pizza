import { Link } from "react-router-dom";
import UserName from "../user/UserName";

function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-6 py-5  sticky top-0 z-20">
      <Link to='/' className="text-md font-semibold uppercase tracking-widest text-yellow-950 subpixel-antialiased">
        Fast React Pizza Co.
      </Link>
      <input
        type="search"
        placeholder="Search..."
        className="rounded-full bg-yellow-100 py-2 indent-4 transition-all  focus:scale-x-110 sm:w-80 outline-none px-1 pr-4 text-stone-600  font-medium "
      />
      <UserName/>
      
    </div>
  );
}

export default Header;
