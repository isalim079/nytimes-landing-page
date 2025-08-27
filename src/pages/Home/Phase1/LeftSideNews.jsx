import { ChevronRight } from "lucide-react";

const LeftSideNews = () => {
  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      {/* left side data */}
      <div className="col-span-4">
        <h6 className="font-sans text-xs font-semibold mb-2">ANALYSIS</h6>
        {/* container 1 */}
        <div className="border-b-2 border-b-gray-200 pb-3">
          <h3 className="text-2xl font-semibold leading-[28px]">Trump Again Escalates Power Grabs in Bid to Fire Fed Member</h3>
          <p className="mt-3 text-gray-500 leading-tight">
            President Trump claimed he had cause to remove Lisa Cook, a member
            of the independent board who had not obeyed his demands to vote for
            lower interest rates.
          </p>
          <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">5 min read</span>
        </div>

        {/* container 2 */}
        <div className="mt-3 border-b-2 border-b-gray-200 pb-3">
          <h3 className="text-lg font-semibold leading-[26px]">
            Fed Defends Independence as Cook Plans Challenge to ‘Illegal’ Firing
          </h3>
          <span className="flex items-center gap-1 mt-1 text-gray-600">See more updates <ChevronRight className="w-3 pt-1" /></span>
        </div>

        {/* container 3 */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold leading-[26px]">
            Markets Brush Off Fed Threats. But Concerns Linger on Wall Street.
          </h3>
          <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">3 min read</span>
        </div>
      </div>

      {/* right side data */}
      <div className="col-span-8 border-l-2 border-l-gray-200 pl-4">
        <img
          src="https://static01.nyt.com/images/2025/08/26/multimedia/26biz-france-econ1-bcmj/26biz-france-econ1-bcmj-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          alt=""
        />
        <h3 className="text-lg font-semibold leading-[26px] mt-4">
          Housing Official’s Push on Mortgage Fraud Gives Trump a Political
          Weapon
        </h3>
        <p className="text-gray-500 mt-2 leading-tight">
          President Trump claimed he had cause to remove Lisa Cook, a member of
          the independent board who had not obeyed his demands to vote for lower
          interest rates.
        </p>
        <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">4 min read</span>
      </div>
    </div>
  );
};

export default LeftSideNews;
