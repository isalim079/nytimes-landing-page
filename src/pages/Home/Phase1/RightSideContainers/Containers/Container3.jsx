import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container3 = () => {
  return (
    <div className="pb-3">
      {/* section 1 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3">
        <h6 className="font-sans text-xs font-semibold mb-2">Opinion</h6>
        <p className="uppercase text-gray-500 text-xs">The Editorial Board</p>
        <h3 className={`text-xl font-semibold leading-[28px] mt-1`}>
          Where’s Your Evidence, Mr. President?
        </h3>
        <span className="text-gray-500 uppercase font-sans text-[10px]">
          3 min read
        </span>
      </div>

      {/* section 2 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3">
        <p className="uppercase text-gray-500 text-xs">Dmytro Kuleba</p>
        <h3 className={`text-xl font-semibold leading-[28px] mt-1`}>
          Europe Has Found Its Formula for Managing Trump
        </h3>
        <span className="text-gray-500 uppercase font-sans text-[10px]">
          4 min read
        </span>
        <ImageComponents
          imageHeight={"h-[220px] object-cover w-full mt-2"}
          src={
            "https://static01.nyt.com/images/2025/08/27/multimedia/27kuleba-kwqz/27kuleba-kwqz-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          }
          photoCredits={"Doug Mills/The New york Times"}
        />
      </div>

      {/* section 3 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3 flex items-center justify-between">
        <div>
          <p className="uppercase text-gray-500 text-xs">Bret stephens</p>
          <h3 className={`text-lg leading-[26px] mt-1`}>
            Donald Trump's Assault on Capitalism
          </h3>
          <span className="text-gray-500 uppercase font-sans text-[10px]">
            4 min read
          </span>
        </div>
        <div>
          <img
            className="w-14"
            src="https://static01.nyt.com/images/2017/08/27/insider/bretstephens/bretstephens-thumbLarge-v6.png?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
      </div>

      {/* section 4 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3 flex gap-5 justify-between">
        <div>
          <p className="uppercase text-gray-500 text-xs">Ross Douthat</p>
          <h3 className={`text-lg leading-[22px] mt-1`}>
            Small Bookstores and the Future of Liberalism
          </h3>
          <span className="text-gray-500 uppercase font-sans text-[10px]">
            4 min read
          </span>
        </div>
        <div>
          <img
            className=""
            src="https://static01.nyt.com/images/2025/08/26/opinion/26douthat-img/26douthat-img-smallSquare252.png?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
      </div>

      {/* section 5 */}
      <div className="mt-3 flex flex-col lg:flex-row">
        <div className="lg:pr-3 ">
          <SubHeadingTitleComponents
            titleWeight={"font-normal"}
            titleLeading={"leading-[22px]"}
            titleSize={"text-base"}
            topHeading={"The Ezra Klein Show"}
            title={"Trump Is Building His Own Paramilitary Force"}
          />
          {/* divider */}
          <div className="my-2">
            <div className="h-[2px] bg-gray-200 w-full"></div>
          </div>
          <SubHeadingTitleComponents
            titleWeight={"font-normal"}
            titleLeading={"leading-[22px]"}
            titleSize={"text-base"}
            topHeading={"Kate Shaw"}
            title={
              "The Supreme Court Must Limit This President. Start With the Fed."
            }
            minutesRead={"8 min read"}
          />
          <div className="my-2 block lg:hidden">
            <div className="h-[1.5px] bg-gray-200 w-full"></div>
          </div>
        </div>
        <div className="lg:border-l-2 lg:border-l-gray-200 lg:pl-3 mt-2 lg:mt-0">
          <SubHeadingTitleComponents
            titleWeight={"font-normal"}
            titleSize={"text-base"}
            titleLeading={"leading-[22px]"}
            topHeading={"Jamelle Bouie"}
            title={"All the Things Trump Thinks He Owns"}
            minutesRead={"5 min read"}
          />
          {/* divider */}
          <div className="my-2">
            <div className="h-[2px] bg-gray-200 w-full"></div>
          </div>
          <SubHeadingTitleComponents
            titleWeight={"font-normal"}
            titleSize={"text-base"}
            titleLeading={"leading-[22px]"}
            topHeading={"Matias Spektor"}
            title={
              "These Countries Have Never Trusted America. Trump Is Proving Them Right."
            }
            minutesRead={"5 mi read"}
          />
        </div>
      </div>
    </div>
  );
};

export default Container3;
