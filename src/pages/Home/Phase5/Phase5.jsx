import { gameSecData } from "./Phase5Data";

const Phase5 = () => {
  return (
    <div className="my-3">
      <h6 className="font-bold font-sans">
        Games <span className="font-normal italic text-sm">Daily puzzles</span>
      </h6>

      {/* cards data 1 */}
      <div className="grid lg:grid-cols-3 mt-5">
        {gameSecData.section1.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between ${
              [1, 2].includes(item.id) ? "pr-2 border-r border-r-gray-300" : ""
            } ${[2, 3].includes(item.id) ? "pl-4" : ""}`}
          >
            <div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={item.src} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* divider */}
      <div className="h-[0.5px] bg-gray-300 my-3"></div>

      {/* cards data 2 */}
      <div className="grid lg:grid-cols-3">
        {gameSecData.section2.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between ${
              [4, 5].includes(item.id) ? "pr-2 border-r border-r-gray-300" : ""
            } ${[5, 6].includes(item.id) ? "pl-4" : ""}`}
          >
            <div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
            <div>
              <img className="w-[80px] h-[80px]" src={item.src} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phase5;
