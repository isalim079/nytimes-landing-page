import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container13 = () => {
    return (
         <div className=" mt-3">
      {/* top section */}
      <div className="flex flex-row overflow-x-auto gap-7 font-sans text-sm px-4">
        <span className="font-semibold text-nowrap">U.S. Open</span>
        <span className="text-nowrap">Sinner Interview</span>
        <span className="text-nowrap">The Etiquette Debate</span>
        <span className="text-nowrap">How Rankings Work</span>
        <span className="text-nowrap">The Honey Deuce Cocktail</span>
      </div>
      {/* container section */}
      <div className="mt-2">
        <div className="grid grid-cols-12 p-4 gap-4">
          {/* left side data */}
          <div className="lg:col-span-4 col-span-12">
            <HeadingTitleComponents
              border={true}
              title={
                "U.S. Open Day 3: Gauff Wins After a Tough Contest of Twists and Turns"
              }
              subtitle={
                "Coco Gauff survived a three-set thriller, and fellow American Tommy Paul also advanced. Both Jannik Sinner and Iga Swiatek won earlier."
              }
              minutesRead={"From The Athletic"}
            />

            <SubHeadingTitleComponents
              className={"mt-3"}
              title={
                "Coco Gauff’s New Serve and a U.S. Open Win Built on Old Foundations"
              }
              minutesRead={"From The Athletic"}
            />
          </div>

          {/* right side data */}
          <div className="lg:col-span-8 col-span-12 pl-4">
            <ImageComponents
              src="https://static01.nyt.com/images/2025/08/26/multimedia/26hp-gauff-pmth/26hp-gauff-pmth-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              photoCredits={'Vera Nieuwenhuis/Associated Press'}
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Container13;