import { useState } from "react";
import { Link } from "react-router";
import logo from "../../../assets/img/NewYorkTimes.svg";
import { footerLinks } from "./FooterData";

const columns = [
  { key: "news", label: "News", links: footerLinks.news },
  { key: "arts", label: "Arts", links: footerLinks.arts },
  { key: "lifestyle", label: "Lifestyle", links: footerLinks.lifestyle },
  { key: "opinion", label: "Opinion", links: footerLinks.opinion },
  { key: "more", label: "More", links: footerLinks.more },
];

const FooterMobile = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <div className="px-6">
      <div className="max-w-[1200px] mx-auto lg:hidden block">
        <div>
          <div className="h-[2px] bg-gray-300"></div>
          <div className="h-[1px] bg-gray-300 mt-[1px]"></div>
        </div>
        <img className="mt-5" src={logo} alt="" />
        <div className="h-[1px] bg-gray-300 mt-3"></div>

        {/* links */}
        <div className="grid font-sans">
          {columns.map((col) => (
            <div
              key={col.key}
              className={`flex flex-col text-sm space-y-1 border-b border-b-gray-300 py-2`}
            >
              <button
                className="font-bold uppercase mb-2 text-left w-full focus:outline-none"
                onClick={() => handleToggle(col.key)}
              >
                {col.label}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === col.key
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {open === col.key &&
                  (() => {
                    const links = col.links;
                    const mid = Math.ceil(links.length / 2);
                    const left = links.slice(0, mid);
                    const right = links.slice(mid);
                    return (
                      <div className="flex gap-4">
                        <div className="flex flex-col flex-1">
                          {left.map((item) => (
                            <Link
                              key={item.id}
                              to={item.url}
                              className="block pl-2 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <div className="flex flex-col flex-1">
                          {right.map((item) => (
                            <Link
                              key={item.id}
                              to={item.url}
                              className="block pl-2 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center text-xs text-gray-600 font-sans pb-10 mt-3">
          <Link to={"#"}>
            © {new Date().getFullYear()} The New York Times Company
          </Link>
          <div className="flex flex-wrap space-x-4 justify-center mt-2">
            {footerLinks.bottom.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
