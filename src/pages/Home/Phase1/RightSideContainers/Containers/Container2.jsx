import { useRef, useState } from "react";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://static01.nyt.com/images/2025/08/26/multimedia/26WELL-ASK-KOMBUCHA1-jztm/26WELL-ASK-KOMBUCHA1-jztm-smallSquare252-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
    imageHeight: "h-[130px]",
    title: "Is Kombucha Good for You?",
    minutesRead: "4 min read",
    titleFontSize: "text-base",
    titleLeading: "leading-[24px]",
  },
  {
    src: "https://static01.nyt.com/images/2024/11/24/multimedia/Lemon-Lime-Satin-Creamsrex-cfgm/Lemon-Lime-Satin-Creamsrex-cfgm-smallSquare252.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
    imageHeight: "h-[130px]",
    title: "Nigella Lawson’s 5-Ingredient Citrusy Satin Creams",
    titleFontSize: "text-base",
    titleLeading: "leading-[24px]",
  },
  {
    src: "https://static01.nyt.com/images/2025/08/27/arts/26cul-loveisland/26col-loveisland-smallSquare252.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
    imageHeight: "h-[130px]",
    title: "Nigella Lawson’s 5-Ingredient Citrusy Satin Creams",
    minutesRead: "5 min read",
    titleFontSize: "text-base",
    titleLeading: "leading-[24px]",
  },
  {
    src: "https://static01.nyt.com/images/2025/08/13/multimedia/tamc-081325-marcus-freeman/tamc-081325-marcus-freeman-smallSquare252.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
    imageHeight: "h-[130px]",
    title: "Nigella Lawson’s 5-Ingredient Citrusy Satin Creams",
    minutesRead: "From the athletic",
    titleFontSize: "text-base",
    titleLeading: "leading-[24px]",
  },
];

const Container2 = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 2;
  const totalSlides = slides.length;
  const maxSlide = totalSlides - slidesToShow;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handlePrev = () => {
    if (sliderRef.current && currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (sliderRef.current && currentSlide < maxSlide) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="my-3">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`px-4 ${idx % slidesToShow !== slidesToShow - 1 ? " border-r border-gray-300" : ""}`}
          >
            <ImageComponents
              src={slide.src}
              imageHeight={slide.imageHeight}
              title={slide.title}
              minutesRead={slide.minutesRead}
              titleFontSize={slide.titleFontSize}
              titleLeading={slide.titleLeading}
            />
          </div>
        ))}
      </Slider>
      {/* nav button */}
      <div className="flex items-center gap-3 justify-end mt-2">
        <button
          className={`p-1 rounded-full border cursor-pointer ${
            currentSlide === 0 ? "opacity-50" : ""
          }`}
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={3} />
        </button>
        <button
          className={`p-1 rounded-full border cursor-pointer ${
            currentSlide >= maxSlide ? "opacity-50" : ""
          }`}
          onClick={handleNext}
          disabled={currentSlide >= maxSlide}
        >
          <ChevronRight className="w-4 h-4" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default Container2;
