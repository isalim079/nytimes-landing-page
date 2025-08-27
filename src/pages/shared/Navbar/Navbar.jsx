import BottomNavRoute from "./BottomNavRoute";
import MiddleNav from "./MiddleNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <div className="py-3">
      <div className="max-w-[1200px] mx-auto">
        <TopNav />
        <MiddleNav />
        <BottomNavRoute />
      </div>
    </div>
  );
};

export default Navbar;
