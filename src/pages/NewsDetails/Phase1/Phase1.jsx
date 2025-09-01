import { Bookmark, Forward, Gift } from "lucide-react";
import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";

const Phase1 = () => {
  return (
    <div>
      <div className="mt-10">
        <h6 className="text-center text-red-700 font-bold tracking-[2px]">
          OPINION
        </h6>
        <p className="text-center uppercase font-bold">Guest essay</p>
        <div className="h-[1px] bg-gray-300 mt-3 max-w-[80px] mx-auto"></div>
        <h1 className="max-w-[420px] mx-auto text-center text-4xl font-black mt-10">
          I Fought in Gaza. Here Is Why I Would Not Go Back.
        </h1>
        <p className="text-center text-gray-500 mt-5">Aug. 30, 2025</p>
        <div className="mt-7 max-w-[720px] mx-auto">
          <img
            className="w-full object-cover"
            src="https://static01.nyt.com/images/2025/09/02/multimedia/29vilk-whql/29vilk-whql-articleLarge-v2.jpg?quality=75&auto=webp 600w,https://static01.nyt.com/images/2025/09/02/multimedia/29vilk-whql/29vilk-whql-jumbo-v2.jpg?quality=75&auto=webp 820w,https://static01.nyt.com/images/2025/09/02/multimedia/29vilk-whql/29vilk-whql-superJumbo-v2.jpg?quality=75&auto=webp 1639w"
            alt=""
          />
          <span className="inline-block text-gray-500 text-xs mt-2">
            Ariel Schalit/Associated Press
          </span>
        </div>
      </div>
      {/* icons */}
      <div className="flex items-center gap-5 max-w-[640px] mx-auto mt-10">
        <p className="flex items-center gap-2 border p-2 rounded-full border-gray-300 text-sm">
          {" "}
          <Gift strokeWidth={1} /> Share full article
        </p>
        <p className="flex items-center border p-2 rounded-full border-gray-300">
          {" "}
          <Forward />
        </p>
        <p className="flex items-center border p-2 rounded-full border-gray-300">
          {" "}
          <Bookmark />
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto flex lg:flex-row lg:items-center flex-col mb-10">
        <div className="w-[284px]"></div>
        <div className="max-w-[600px] w-full">
          <LeftSideNews />
        </div>
        <div className="w-[25%]">
          <RightSideNews />
        </div>
      </div>
    </div>
  );
};

export default Phase1;
