import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container10 = () => {
  return (
    <div className="grid grid-cols-12 lg:p-4 gap-4 mt-2 mb-4 lg:mb-0">
      {/* left side data */}
      <div className="lg:col-span-4 col-span-12">
        <HeadingTitleComponents
          title={"Taylor Swift and Travis Kelce Announce Their Engagement"}
          subtitle={
            "The news was posted on social media: “Your English teacher and your gym teacher are getting married.”"
          }
          minutesRead={"4 min read"}
          border={true}
        />
        <HeadingTitleComponents
          title={
            "Swift’s Engagement Ring Hints at a Return to Vintage Elegance"
          }
          subtitle={
            "Taylor Swift’s antique-inspired sparkler channels the “heirloom look,” reflecting a return to antique stones."
          }
          minutesRead={"3 min read"}
          border={true}
          className={"mt-3"}
        />
        <SubHeadingTitleComponents
          title={"The Big Moments From the Couple’s Love Story"}
          minutesRead={"4 min read"}
          className={"mt-3"}
        />
      </div>

      {/* right side data */}
      <div className="lg:col-span-8 col-span-12 lg:pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26ST-TAYLOR-SWIFT-ENGAGEMENT-RING-bhgc/26ST-TAYLOR-SWIFT-ENGAGEMENT-RING-bhgc-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          photoCredits={"Taylor Swift and Travis Kelce"}
        />
      </div>
    </div>
  );
};

export default Container10;
