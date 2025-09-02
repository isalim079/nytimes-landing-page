import { useEffect, useState } from "react";
import BottomNavRoute from "./BottomNavRoute";
import MiddleNav from "./MiddleNav";
import TopNav from "./TopNav";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto py-3 lg:block hidden">
        <TopNav />
        <MiddleNav />
      </div>
      <div
        className={`transition-all duration-300 lg:block hidden ${
          scrollY > 200 ? "fixed top-0 w-full bg-white z-20 py-3 shadow-lg" : ""
        }`}
      >
        <BottomNavRoute />
      </div>

      <div className="mt-3 lg:block hidden">
        <div className="h-[1px] bg-black"></div>
        <div className="h-[1px] bg-black mt-[2.5px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
