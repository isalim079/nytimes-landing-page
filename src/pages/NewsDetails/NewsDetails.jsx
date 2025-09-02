import NavbarMobile from "../shared/Navbar/NavbarMobile/NavbarMobile";
import NewsDetailsNav from "../shared/NewsDetailsNav/NewsDetailsNav";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";

const NewsDetails = () => {
  return (
    <div>
      <NewsDetailsNav />
      <NavbarMobile />
      <div className="mb-5 px-4 lg:px-0">
        <Phase1 />
        <Phase2 />
      </div>
    </div>
  );
};

export default NewsDetails;
