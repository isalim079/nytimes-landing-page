import { Link } from "react-router";
import logo from "../../../assets/img/NewYorkTimes.svg";
import { footerLinks } from "./FooterData";
import { User } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="h-[2px] bg-gray-300"></div>
          <div className="h-[1px] bg-gray-300 mt-[1px]"></div>
        </div>
        <img className="mt-3" src={logo} alt="" />

        {/* links */}
        <div className="grid lg:grid-cols-6 font-sans mt-5">
          {/* column 1 */}
          <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold uppercase text-xs mb-2">News</span>
            {footerLinks.news.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* column 2 */}
          <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold uppercase text-xs mb-2">arts</span>
            {footerLinks.arts.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* column 3 */}
          <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold uppercase text-xs mb-2">lifestyle</span>
            {footerLinks.lifestyle.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* column 4 */}
          <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold uppercase text-xs mb-2">opinion</span>
            {footerLinks.opinion.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* column 5 */}
          <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold uppercase text-xs mb-2">more</span>
            {footerLinks.more.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* column 6 */}
          <div className="flex flex-col text-sm space-y-1 border-l border-l-gray-300 pl-4">
            <span className="font-bold uppercase text-xs mb-2">opinion</span>
            <span className="font-bold text-base flex items-center gap-2">
              <svg width={"10px"} viewBox="0 0 10 13">
                <path
                  fill="#000"
                  d="M9.9,8c-0.4,1.1-1.2,1.9-2.3,2.4V8l1.3-1.2L7.6,5.7V4c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7C6,1.7,4.5,0.6,2.8,0.6c-1.5,0-2.5,1.1-2.5,2.2C0.3,4,1,4.3,1.6,4.6l0-0.1C1.4,4.4,1.3,4.1,1.3,3.8c0-0.5,0.5-0.9,1-0.9C3.7,2.9,6,4,7.4,4h0.1v1.7L6.2,6.8L7.5,8v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5V10l2.2-1v-5L2.5,5.5c0.3-1,1-1.7,1.8-2l0,0C2.2,3.9,0.1,5.6,0.1,8c0,2.9,2.4,4.8,5.2,4.8C8.2,12.9,9.9,10.9,9.9,8L9.9,8z"
                ></path>
              </svg>
              Subscribe
            </span>
            <span className="font-bold text-base flex items-center -ml-1 gap-2">
              <User size={16} stroke="0" fill="black" /> Manage my account
            </span>
            <span className="font-bold text-base flex items-center gap-2">
              <svg width={"12px"} viewBox="0 0 14 13" fill="#000">
                <path d="M13.1,11.7H3.5V1.2h9.6V11.7zM13.1,0.4H3.5C3,0.4,2.6,0.8,2.6,1.2v2.2H0.9C0.4,3.4,0,3.8,0,4.3v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9V1.2C14,0.8,13.6,0.4,13.1,0.4"></path>
                <polygon points="10.9,3 5.2,3 5.2,3.9 11.4,3.9 11.4,3"></polygon>
                <rect x="5.2" y="4.7" width="6.1" height="0.9"></rect>
                <rect x="5.2" y="6.5" width="6.1" height="0.9"></rect>
              </svg>{" "}
              Home Delivery
            </span>
            <span className="font-bold text-base flex items-center gap-2">
              <svg width={"10px"} viewBox="0 0 10 13">
                <path
                  fill="#000"
                  d="M9.9,8c-0.4,1.1-1.2,1.9-2.3,2.4V8l1.3-1.2L7.6,5.7V4c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7C6,1.7,4.5,0.6,2.8,0.6c-1.5,0-2.5,1.1-2.5,2.2C0.3,4,1,4.3,1.6,4.6l0-0.1C1.4,4.4,1.3,4.1,1.3,3.8c0-0.5,0.5-0.9,1-0.9C3.7,2.9,6,4,7.4,4h0.1v1.7L6.2,6.8L7.5,8v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5V10l2.2-1v-5L2.5,5.5c0.3-1,1-1.7,1.8-2l0,0C2.2,3.9,0.1,5.6,0.1,8c0,2.9,2.4,4.8,5.2,4.8C8.2,12.9,9.9,10.9,9.9,8L9.9,8z"
                ></path>
              </svg>
              Gift Subscription
            </span>
            <span className="mt-5 text-xs">Group Subscription</span>
            <span className="mt-1 text-xs">Gift Articles</span>
            <span className="mt-1 text-xs">Email Newsletters</span>
            <div className="h-[1px] bg-gray-200 my-3"></div>
            <span className="text-xs">NYT Licensing</span>
            <span className="mt-1 text-xs">Replica Edition</span>
            <span className="mt-1 text-xs">Times Store</span>
          </div>
        </div>

        {/* bottom section */}
        <div className="h-[1px] bg-gray-200 my-3"></div>
        <div className="flex flex-row justify-around items-center text-xs text-gray-600 font-sans pb-10">
          <Link to={"#"}>
            © {new Date().getFullYear()} The New York Times Company
          </Link>
          {footerLinks.bottom.map((item) => (
            <Link key={item.id} to={item.url}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
