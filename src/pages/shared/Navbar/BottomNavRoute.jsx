import { Link } from "react-router";
import { navLinkData } from "./NavbarData";
import { ChevronDown } from "lucide-react";

const BottomNavRoute = () => {
  return (
    <div>
      <div className="max-w-[980px] mx-auto flex flex-row justify-between items-center font-sans text-sm text-gray-700 mt-5">
        {navLinkData.map((item) => (
          <Link
            className="flex items-center gap-1"
            to={item.link}
            key={item.id}
          >
            {item.nav} <ChevronDown className="w-[14px] mt-[2px]" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavRoute;
