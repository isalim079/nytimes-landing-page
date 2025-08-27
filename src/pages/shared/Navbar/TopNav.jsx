import { Search } from "lucide-react";
import { navTopCategory } from "./NavbarData";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between">
      {/* search icon */}
      <div>
        <button>
          <Search className="w-4" />
        </button>
      </div>

      {/* middle category */}
      <div className="flex items-center text-xs font-sans font-semibold gap-4 text-gray-500">
        {navTopCategory.map((item) => (
          <li className="list-none uppercase" key={item.id}>
            {item.category}
          </li>
        ))}
      </div>

      {/* right action button */}
      <div className="text-white space-x-3 text-xs">
        <button className="px-4 py-2 rounded-sm bg-[#567b95] uppercase">
          Subscribe for $0.25/week
        </button>
        <button className="px-4 py-2 rounded-sm bg-[#567b95] uppercase">
          Login
        </button>
      </div>
    </div>
  );
};

export default TopNav;
