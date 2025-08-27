import { Link } from "react-router";
import { navLinkData } from "./NavbarData";
import { ChevronDown } from "lucide-react";

const BottomNavRoute = () => {
  return (
    <div>
      <div className=" flex flex-row justify-center items-center font-sans gap-5 text-sm text-gray-700 mt-4">
        {navLinkData.map((item) => (
          <Link
            className={`flex items-center gap-1`}
            to={item.link}
            key={item.id}
          >
            {item.nav} <ChevronDown className="w-[14px] mt-[2px]" />{" "}
            {item?.id === 7 && (
              <span className="flex justify-end ml-3">
                <span className="h-[17px] w-[2px] bg-gray-300"></span>
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* bottom lines */}
      <div className="mt-3">
        <div className="h-[1px] bg-black"></div>
        <div className="h-[1px] bg-black mt-[2.5px]"></div>
      </div>
    </div>
  );
};

export default BottomNavRoute;
