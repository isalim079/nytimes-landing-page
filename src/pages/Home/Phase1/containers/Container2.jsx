import HeadingTitleComponents from "../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container2 = () => {
    return (
        <div className="">
        <div className="grid grid-cols-12 p-4 gap-4 mt-2">
          {/* left side data */}
          <div className="col-span-4">
            <HeadingTitleComponents
              title={
                "Fears of a French Government Collapse Send Its Borrowing Costs Soaring"
              }
              subtitle={
                "France, a cornerstone economy in Europe, is rapidly becoming one of its weakest links as a political and debt crisis loom."
              }
              minutesRead={"3 min read"}
            />
            <HeadingTitleComponents
              className="mt-3"
              title={
                "Housing Official’s Push on Mortgage Fraud Gives Trump a Political Weapon"
              }
              subtitle={
                "Bill Pulte, the director of the Federal Housing Finance Agency, could win the president an opening on the Federal Reserve board."
              }
              minutesRead={"4 min read"}
            />
          </div>
          {/* right side */}
          <div className="col-span-8 pl-4">
            <ImageComponents
              src={
                "https://static01.nyt.com/images/2025/08/26/multimedia/26biz-france-econ1-bcmj/26biz-france-econ1-bcmj-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              }
              photoCredits={"Joann Pai for The New York Times"}
            />
          </div>
        </div>

        {/* bottom cards */}
        <div className="px-4">
          <div className="py-4 border-y-2 border-t-gray-200 flex gap-3">
            <SubHeadingTitleComponents
              title={
                "Cook to Sue Over Her Firing, Asserting Trump Abused Power"
              }
              minutesRead={"5 min read"}
            />
            <SubHeadingTitleComponents
              className={"border-l-2 border-l-gray-200 pl-3"}
              title={
                "Markets Brush Off Fed Threats. But Concerns Linger on Wall Street."
              }
              minutesRead={"3 min read"}
            />
          </div>
        </div>
      </div>
    );
};

export default Container2;