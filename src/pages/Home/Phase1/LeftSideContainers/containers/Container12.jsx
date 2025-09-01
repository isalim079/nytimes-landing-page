import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";

const Container12 = () => {
  return (
    <div className="grid grid-cols-12 lg:p-4 gap-4 lg:mt-2 mt-4 mb-4 lg:mb-0">
      {/* left side data */}
      <div className="lg:col-span-4 col-span-12">
        <HeadingTitleComponents
          title={
            "Lafufus, Fake Labubu Dolls, Raise Safety Alarms and Spawn Raids"
          }
          subtitle={
            "The dupes of the cute-ugly toys have left consumer complaints and warnings about safety risks and potentially hazardous chemicals in their wake."
          }
          minutesRead={"4 min read"}
        />
      </div>

      {/* right side data */}
      <div className="lg:col-span-8 col-span-12 lg:pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26int-labubus-1-chjp/26int-labubus-1-chjp-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          photoCredits={"Go Nakamura/Reuters"}
        />
      </div>
    </div>
  );
};

export default Container12;
