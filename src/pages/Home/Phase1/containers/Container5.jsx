import HeadingTitleComponents from "../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../components/ui/homeComponents/ImageComponents";

const Container5 = () => {
  return (
    <div className="grid grid-cols-12 p-4 gap-4 mt-2">
      {/* left side data */}
      <div className="col-span-4">
        <HeadingTitleComponents
          title={
            "London Asks Commuters, ‘Please Put Your Headphones In, Thank You’"
          }
          subtitle={
            "The campaign for silence on the public transit system, which appeals to consideration for fellow passengers, stops short of strictly enforcing fines."
          }
          minutesRead={"3 min read"}
        />
      </div>

      {/* right side data */}
      <div className="col-span-8 pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26int-uk-headphones-1-gtfb/26int-uk-headphones-1-gtfb-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          photoCredits={"Jack Taylor/Reuters"}
        />
      </div>
    </div>
  );
};

export default Container5;
