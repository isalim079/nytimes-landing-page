import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container6 = () => {
  return (
    <div className="mt-3 mb-4 lg:mb-0">
      {/* top section */}
      <div className="flex flex-row overflow-x-auto gap-7 font-sans text-sm lg:px-4 py-3 lg:py-0">
        <span className="font-semibold text-nowrap">Russia-Ukraine War</span>
        <span className="text-nowrap">Photos</span>
        <span className="text-nowrap">Peace Talks</span>
        <span className="text-nowrap">State of the War</span>
        <span className="text-nowrap">Changed by Trauma</span>
      </div>
      {/* container section */}
      <div className="mt-2">
        <div className="grid grid-cols-12 lg:p-4 gap-4">
          {/* left side data */}
          <div className="lg:col-span-4 col-span-12">
            <HeadingTitleComponents
              border={true}
              title={
                "Russia and Ukraine Target Energy Sites, Seeking Leverage Away From the Front"
              }
              subtitle={
                "The two countries appear to be trying to raise political pressure on each other and send signals to Washington in case peace talks move forward."
              }
              minutesRead={"6 min read"}
            />

            <SubHeadingTitleComponents
              border={true}
              className={"mt-3"}
              title={
                "Russian Troops Gain a Toehold in Another Ukrainian Region"
              }
              minutesRead={"2 min read"}
            />
          </div>

          {/* right side data */}
          <div className="lg:col-span-8 col-span-12 lg:pl-4">
            <ImageComponents
              src="https://static01.nyt.com/images/2025/08/26/multimedia/26int-ukraine-russia-energy-01-tjkw/26int-ukraine-russia-energy-01-tjkw-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              photoCredits={'Agence France-Presse, via Telegram'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container6;
