import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";


const Phase4 = () => {
  return (
     <div className="grid grid-cols-14 mb-3">
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

export default Phase4;
