import LeftSideNews from "./LeftSideContainers/LeftSideNews";
import RightSideNews from "./RightSideContainers/RightSideNews";

const Phase2 = () => {
  return (
    <div className="grid grid-cols-14">
      {/* left side */}
      <div className="lg:col-span-10 col-span-14">
        <LeftSideNews />
      </div>

      {/* right side */}
      <div className="lg:col-span-4 col-span-14">
        <RightSideNews />
      </div>
    </div>
  );
};

export default Phase2;
