import LeftSideNews from "./LeftSideContainers/LeftSideNews";
import RightSideNews from "./RightSideContainers/RightSideNews";

const Phase1 = () => {
  return (
    <div className="grid grid-cols-14">
      {/* left side */}
      <div className="col-span-10">
        <LeftSideNews />
      </div>

      {/* right side */}
      <div className="col-span-4">
        <RightSideNews />
      </div>
    </div>
  );
};

export default Phase1;
