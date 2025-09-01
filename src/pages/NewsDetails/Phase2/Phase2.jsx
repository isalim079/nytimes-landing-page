import LeftSideNews from "./LeftSideNews/LeftSideNews";
import RightSideNews from "./RightSideNews/RightSideNews";

const Phase2 = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex lg:flex-row flex-col gap-8">
      <div className="w-full">
        <div className="h-[1px] bg-black"></div>
        <LeftSideNews />
      </div>
      <div className="max-w-[320px] w-full">
          <div className="h-[1px] bg-black"></div>
        <RightSideNews />
      </div>
    </div>
  );
};

export default Phase2;
