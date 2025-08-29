import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";


const Phase4 = () => {
  return (
     <div className="grid grid-cols-14 mb-3">
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

export default Phase4;
