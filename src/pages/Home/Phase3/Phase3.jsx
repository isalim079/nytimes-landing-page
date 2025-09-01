import ImageComponents from "../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Phase3 = () => {
  return (
    <div className="mb-3 lg:mb-0">
      <h6 className="font-sans text-xs font-bold mb-2 mt-4">Well</h6>

      <div className="grid lg:grid-cols-5">
        {/* section 1 */}
        <div className="lg:pr-4 ">
          <ImageComponents
            imageHeight={"h-[205px] w-full object-cover"}
            src={
              "https://static01.nyt.com/images/2025/08/20/multimedia/20WELL-READING-pbjg/20WELL-READING-pbjg-square640.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Graham Dickie/The New York Times"}
          />
          <SubHeadingTitleComponents
            title={"Fewer People Are Reading for Fun, Study Finds"}
            minutesRead={"3 min read"}
            className={'my-3 lg:my-0'}
          />
        </div>
        {/* section 2 */}
        <div className="lg:px-4 lg:border-x lg:border-x-gray-300">
          <ImageComponents
            src={
              "https://static01.nyt.com/images/2025/08/05/multimedia/PT-FITNESS-ASSESSMENTS-HP-promo/PT-FITNESS-ASSESSMENTS-02-gkfh-square640.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Graham Dickie/The New York Times"}
          />
          <SubHeadingTitleComponents
            title={"Fewer People Are Reading for Fun, Study Finds"}
            minutesRead={"3 min read"}
            className={'mb-3 lg:mb-0'}
          />
        </div>
        {/* section 3 */}
        <div className="lg:px-4 lg:border-x lg:border-x-gray-300 my-3 lg:my-0">
          <ImageComponents
            src={
              "https://static01.nyt.com/images/2025/07/25/reader-center/25-ELECTROLYTES-HP-PROMO-COVER/25-ELECTROLYTES-HP-PROMO-COVER-square640.png?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Graham Dickie/The New York Times"}
          />
          <SubHeadingTitleComponents
            title={"Fewer People Are Reading for Fun, Study Finds"}
            minutesRead={"3 min read"}
            className={'mb-3 lg:mb-0'}
          />
        </div>
        {/* section 4 */}
        <div className="lg:px-4 lg:border-x lg:border-x-gray-300">
          <ImageComponents
            src={
              "https://static01.nyt.com/images/2025/08/05/multimedia/WELL-JAPANESE-WALKING-qjvk/WELL-JAPANESE-WALKING-qjvk-square640.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Graham Dickie/The New York Times"}
          />
          <SubHeadingTitleComponents
            title={"Fewer People Are Reading for Fun, Study Finds"}
            minutesRead={"3 min read"}
            className={'mb-3 lg:mb-0'}
          />
        </div>
        {/* section 5 */}
        <div className="lg:pl-4 lg:border-l lg:border-l-gray-300">
          <ImageComponents
            imageHeight={"h-[205px] w-full object-cover"}
            src={
              "https://static01.nyt.com/images/2025/07/09/multimedia/WELL-POWERLIFTING-SENIORS1-tfvj-hp/WELL-POWERLIFTING-SENIORS1-tfvj-square640.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            }
            photoCredits={"Graham Dickie/The New York Times"}
          />
          <SubHeadingTitleComponents
            title={"Fewer People Are Reading for Fun, Study Finds"}
            minutesRead={"3 min read"}
          />
        </div>
      </div>
    </div>
  );
};

export default Phase3;
