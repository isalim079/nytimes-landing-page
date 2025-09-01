import HeadingTitleComponents from "../../../components/ui/homeComponents/HeadingTitleComponents";

const LeftSideNews = () => {
  return (
    <div className="mt-3">
      <h6 className="font-sans text-xs font-bold mb-2">
        Culture and Lifestyle
      </h6>
      <div className="grid grid-cols-12 gap-4 mt-2 items-center lg:border-r lg:border-r-gray-300 lg:pr-4">
        {/* left section */}
        <div className="lg:col-span-4 col-span-12">
          <HeadingTitleComponents
            title={"At the Frick, a Young Painter Spars With an Old Master"}
            subtitle={
              "The “too muchness” of Rococo painting has met its match with Flora Yukhnovich’s immersive “Four Seasons.”"
            }
            titleSize={"text-2xl"}
            minutesRead={'7 min read'}
          />
        </div>
        {/* right section */}
        <div className="lg:col-span-8 col-span-12">
          <div className="flex w-fit gap-2">
            <img
              className=""
              src="https://static01.nyt.com/images/2025/08/29/multimedia/28hp-cul-flora-frick-promo/28cul-flora-seasons-frick-tjqc-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              alt=""
            />
          </div>
          <span className="text-gray-500 font-sans text-[10px] font-semibold flex justify-end mt-1">
           Clifford Prince King for The New York Times
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNews;
