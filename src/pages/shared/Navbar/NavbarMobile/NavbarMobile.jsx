import { useState } from "react";
import { ChevronDown, Menu, UserRound, X } from "lucide-react";
import logo from "../../../../assets/img/NewYorkTimes.svg";
import { navLinkData } from "../NavbarData";

const NavbarMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-5 lg:hidden px-4">
        {/* left side */}
        <div>
          <button onClick={() => setDrawerOpen(true)}>
            <Menu />
          </button>
        </div>
        {/* middle side */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* right side */}
        <div className="flex items-center gap-1">
          <UserRound fill="black" stroke="" />
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full overflow-y-auto bg-white z-50 shadow-lg transition-transform duration-300 w-full ${drawerOpen ? "translate-x-0" : "-translate-x-full"} font-sans`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <button onClick={() => setDrawerOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-4 py-2">
          {navLinkData.map((nav) => (
            <div key={nav.id} className="border-b border-gray-100 py-2">
              <button
                className="flex items-center justify-between w-full text-left font-semibold py-2 focus:outline-none"
                onClick={() =>
                  nav.subMenus ? handleAccordion(nav.id) : setDrawerOpen(false)
                }
              >
                <span>{nav.nav}</span>
                {nav.subMenus && (
                  <ChevronDown
                    className={`ml-2 transition-transform duration-300 ${openAccordion === nav.id ? "rotate-180" : ""}`}
                  />
                )}
              </button>
              {/* Accordion for submenus */}
              {nav.subMenus && (
                <div
                  className={`overflow-y-auto transition-all duration-300 ${openAccordion === nav.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {/* Render submenus: section1, section2, topStories */}
                  {Object.entries(nav.subMenus).map(([section, items]) => (
                    <div key={section} className="pl-4 py-2">
                      <span className="block text-xs font-bold mb-1 capitalize">
                        {section.replace(/([A-Z])/g, " $1")}
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {items.map((item) => (
                          <a
                            key={item.id}
                            href={item.link}
                            className="text-sm py-1 block text-gray-700 hover:underline"
                          >
                            {item.nav}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavbarMobile;
