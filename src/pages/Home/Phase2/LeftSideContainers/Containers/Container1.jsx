import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container1 = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 lg:px-4 gap-4 mt-2">
        {/* left side data */}
        <div className="lg:col-span-4 col-span-12">
          <HeadingTitleComponents
            title={
              "Rainer Weiss, Who Gave a Nod to Einstein and the Big Bang, Dies at 92"
            }
            subtitle={
              "He shared the Nobel Prize in Physics for his work on gravitational waves, which helped confirm Einstein’s general theory of relativity and how the universe began."
            }
            minutesRead={"7 min read"}
            titleSize={"text-lg"}
          />
          <HeadingTitleComponents
            className="mt-3"
            title={"Mumbai’s Pigeon-Feeding Rules Aren’t Going Over Well"}
            subtitle={
              "New restrictions have led to protests and threats of hunger strikes by the Jain religious community, which believes in nonviolence against all creatures."
            }
            minutesRead={"4 min read"}
            titleSize={"text-lg"}
          />
        </div>
        {/* right side */}
        <div className="lg:col-span-8 col-span-12 lg:pl-4">
          <ImageComponents
            src={
              "https://static01.nyt.com/images/2025/08/26/multimedia/26Weiss--jgvt/26Weiss--jgvt-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Joann Pai for The New York Times"}
          />
        </div>
      </div>

      {/* bottom cards */}
      <div className="lg:px-4 mt-4">
        <div className="py-4 border-t-1 border-t-gray-200 flex flex-col lg:flex-row gap-3">
          <HeadingTitleComponents
            title={
              "Jokey Names for Detention Centers Face Criticism for Insensitivity"
            }
            minutesRead={"6 min read"}
            subtitle={
              "The use of alliterative names for new immigrant detention centers by the Trump administration and its allies is causing serious disagreements."
            }
          />
          <HeadingTitleComponents
            className={"lg:border-l-2 lg:border-l-gray-200 lg:pl-3"}
            title={
              "Cracker Barrel Drops New Logo Design After Conservative Backlash"
            }
            minutesRead={"3 min read"}
            subtitle={
              "The chain, known for its farmhouse aesthetic, ignited a social media firestorm when it announced a rebrand. President Trump was among the critics."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Container1;
