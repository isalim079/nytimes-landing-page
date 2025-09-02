import { useState } from "react";
import { Link } from "react-router";
import { navLinkData } from "./NavbarData";
import { ChevronDown } from "lucide-react";

const BottomNavRoute = () => {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div className="">
      <div className="relative">
        <div className="flex flex-row justify-center items-center font-sans gap-5 text-sm text-gray-700">
          {navLinkData.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.subMenus && setHoveredNav(item.id)}
              onMouseLeave={() => item.subMenus && setHoveredNav(null)}
            >
              <Link className="flex items-center gap-1" to={item.link}>
                {item.nav} <ChevronDown className="w-[14px] mt-[2px]" />
                {item?.id === 7 && (
                  <span className="flex justify-end ml-3">
                    <span className="h-[17px] w-[2px] bg-gray-300"></span>
                  </span>
                )}
              </Link>
              {/* Accordion dropdown */}
              {item.subMenus && hoveredNav === item.id && (
                <div className="fixed w-screen left-0 bg-white shadow-xl transition-all duration-300 overflow-hidden z-50">
                  <div className="max-w-[1200px] mx-auto flex justify-center gap-10 pt-7 mt-3 border-t border-t-gray-300">
                    {Object.entries(item.subMenus).map(([section, items]) => {
                      const mid = Math.ceil(items.length / 2);
                      const left = items.slice(0, mid);
                      const right = items.slice(mid);
                      return (
                        <div
                          key={section}
                          className="p-4 border-b border-gray-100"
                        >
                          <span className="block text-xs font-bold mb-2 capitalize">
                            {section.replace(/([A-Z])/g, " $1")}
                          </span>
                          <div className="flex gap-10">
                            <div className="flex flex-col">
                              {left.map((subitem) => (
                                <a
                                  key={subitem.id}
                                  href={subitem.link}
                                  className="text-sm py-1 block text-gray-700 hover:underline"
                                >
                                  {subitem.nav}
                                </a>
                              ))}
                            </div>
                            <div className="flex flex-col">
                              {right.map((subitem) => (
                                <a
                                  key={subitem.id}
                                  href={subitem.link}
                                  className="text-sm py-1 block text-gray-700 hover:underline"
                                >
                                  {subitem.nav}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavRoute;
