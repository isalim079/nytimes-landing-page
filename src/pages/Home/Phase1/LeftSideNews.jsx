import { ChevronRight } from "lucide-react";
import ImageComponents from "../../../components/ui/homeComponents/ImageComponents";
import HeadingTitleComponents from "../../../components/ui/homeComponents/HeadingTitleComponents";
import SubHeadingTitleComponents from "../../../components/ui/homeComponents/SubHeadingTitleComponents";

const LeftSideNews = () => {
  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      {/* left side data */}
      <div className="col-span-4">
        <h6 className="font-sans text-xs font-semibold mb-2">ANALYSIS</h6>

        <HeadingTitleComponents
          border={true}
          title={"Trump Again Escalates Power Grabs in Bid to Fire Fed Member"}
          subtitle={
            "President Trump claimed he had cause to remove Lisa Cook, a member of the independent board who had not obeyed his demands to vote for lower interest rates."
          }
          minutesRead={"5 min read"}
        />

        <SubHeadingTitleComponents
          border={true}
          className={"mt-3"}
          title={
            "Fed Defends Independence as Cook Plans Challenge to ‘Illegal’ Firing"
          }
          updates={true}
        />

        <SubHeadingTitleComponents
          border={true}
          className={"mt-3"}
          title={
            "Markets Brush Off Fed Threats. But Concerns Linger on Wall Street."
          }
          minutesRead={"3 min read"}
        />
      </div>

      {/* right side data */}
      <div className="col-span-8 border-l-2 border-l-gray-200 pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26biz-france-econ1-bcmj/26biz-france-econ1-bcmj-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          title={
            "Housing Official’s Push on Mortgage Fraud Gives Trump a Political Weapon"
          }
          subtitle={
            "President Trump claimed he had cause to remove Lisa Cook, a member of the independent board who had not obeyed his demands to vote for lower interest rates."
          }
          minutesRead={"4 min read"}
        />
      </div>
    </div>
  );
};

export default LeftSideNews;
