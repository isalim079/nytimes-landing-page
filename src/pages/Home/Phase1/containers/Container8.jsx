import HeadingTitleComponents from "../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container8 = () => {
  return (
    <div className="mt-3">
      {/* top section */}
      <div className="flex flex-row gap-7 font-sans text-sm px-4">
        <span className="font-semibold">Trump Administration</span>
        <span>Tariff Tracker</span>
        <span>Federal Law Enforcement in D.C.</span>
        <span>Attacks on Institutions</span>
        <span>Approval Ratings</span>
      </div>
      <div className="grid grid-cols-12 p-4 gap-4 mt-2">
        {/* left side data */}
        <div className="col-span-4">
          <h6 className="font-sans text-xs font-semibold mb-2">ANALYSIS</h6>
          <HeadingTitleComponents
            title={"Trump Plays Reality TV Host at Marathon Cabinet Meeting"}
            subtitle={
              "President Trump hosted a televised meeting at the White House for hours as his cabinet members offered praise. It was a glimpse of how he runs his presidency."
            }
            minutesRead={"5 min read"}
          />
          <HeadingTitleComponents
            className="mt-3"
            title={
              "Trump Says He Welcomes Chinese Students, as His Administration Blocks Them"
            }
            subtitle={
              "The president has praised Chinese students several times. But his policies are making it more difficult for students from China to come to the U.S."
            }
            minutesRead={"3 min read"}
          />
        </div>
        {/* right side */}
        <div className="col-span-8 pl-4">
          <ImageComponents
            src={
              "https://static01.nyt.com/images/2025/08/26/multimedia/26dc-scene-pmjt/26dc-scene-pmjt-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Doug Mills/The New York Times"}
          />
        </div>
      </div>

      {/* bottom cards */}
      <div className="px-4">
        <div className="py-4 border-y-1 border-t-gray-200 flex gap-4">
          <SubHeadingTitleComponents
            title={"FEMA Suspends Staff Who Signed a Letter Criticizing Trump"}
            minutesRead={"2 min read"}
          />
          <SubHeadingTitleComponents
            className={"border-l-2 border-l-gray-200 pl-5"}
            title={
              "Justice Dept. Broadens Inquiry Into Key Players in Russia Investigation"
            }
            minutesRead={"4 min read"}
          />
          <SubHeadingTitleComponents
            className={"border-l-2 border-l-gray-200 pl-5"}
            title={
              "Deploy Troops to Chicago? Trump Says He Can ‘Do Anything I Want to Do.’"
            }
            minutesRead={"2 min read"}
          />
        </div>
      </div>
    </div>
  );
};

export default Container8;
