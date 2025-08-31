
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";

const Container9 = () => {
  return (
    <div className="grid grid-cols-12 p-4 gap-4 mt-2">
      {/* left side data */}
      <div className="lg:col-span-4 col-span-12">
        <HeadingTitleComponents
          title={"A Teen Was Suicidal. ChatGPT Was the Friend He Confided In."}
          subtitle={
            "More people are turning to chatbots for emotional support. At first, a 16-year-old used ChatGPT for schoolwork, but then he started planning to end his life."
          }
          minutesRead={"5 min read"}
        />
      </div>

      {/* right side data */}
      <div className="lg:col-span-8 col-span-12 pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26biz-chatbot-teen-thpl/26biz-chatbot-teen-thpl-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          photoCredits={"Mark Abramson for The New York Times"}
        />
      </div>
    </div>
  );
};

export default Container9;
