import { ChevronDown, Menu } from "lucide-react";
import logo from '../../../assets/img/NewYorkTimes.svg'

const NewsDetailsNav = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto lg:flex items-center justify-between py-5 hidden">
        {/* left side */}
        <div>
          <Menu />
        </div>
        {/* middle side */}
        <div>
            <img src={logo} alt="" />
        </div>
        {/* right side */}
        <div className="flex items-center gap-1">
            <span><ChevronDown size={18}/></span>
            <span>Account</span>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsNav;
