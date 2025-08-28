import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";

const Container1 = () => {
  return (
    <div className="border-b-2 pb-2 border-b-gray-200">
      <ImageComponents
        src={
          "https://static01.nyt.com/images/2025/08/26/multimedia/19WELL-ASK-BACK-PAIN-01-qtbg/19WELL-ASK-BACK-PAIN-01-qtbg-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        }
        title={"What Are the Best Exercises for Back Pain?"}
        photoCredits={"Joyce Lee for the New York Times"}
        imageHeight={"h-[220px] w-full object-cover"}
        titleFontSize={"text-2xl"}
        titleFontWeight={"font-normal"}
        subtitle={
          "The condition is hard to treat. But moving can help, if you do it right."
        }
        minutesRead={"4 min read"}
      />
    </div>
  );
};

export default Container1;
