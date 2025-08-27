import ImageComponents from "../../../components/ui/homeComponents/ImageComponents";
import HeadingTitleComponents from "../../../components/ui/homeComponents/HeadingTitleComponents";
import SubHeadingTitleComponents from "../../../components/ui/homeComponents/SubHeadingTitleComponents";
import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";

const LeftSideNews = () => {
  return (
    <div>
      <Container1 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[2px] bg-black"></div>
      </div>
      {/* container - 2 */}
      <Container2 />
    </div>
  );
};

export default LeftSideNews;
