
import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container1 = () => {
  return (
    <div className="grid grid-cols-12 lg:px-4 gap-4 pb-4">
      {/* left side data */}
      <div className="lg:col-span-4 col-span-12">
        <h6 className="font-sans text-xs font-semibold mb-2">ANALYSIS</h6>

        <HeadingTitleComponents
          border={true}
          title={"Full Weight of U.S. Tariffs Slams Into Effect Against India"}
          subtitle={
            "As punishment for buying Russian oil, President Trump doubled the tariff on goods from India to 50 percent, jeopardizing its relationship with the U.S."
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
      <div className="lg:col-span-8 col-span-12 lg:border-l-2 lg:border-l-gray-200 lg:pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/27/multimedia/27Biz-India-US-01-btlh/27Biz-India-US-01-btlh-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
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

export default Container1;
