import Divider2 from "../../../../components/ui/Divider2";

const LeftSideNews = () => {
  return (
    <div className="mt-4">
      {/* container 1 */}
      <div>
        <p className="font-bold font-sans">inEducation: Computer Science</p>
        <p className="font-sans text-sm max-w-[620px] mt-1">
          New York Times inEducation has been designed as a resource to connect
          Times journalism with key areas of study for students and faculty
          through our Education Subscription Program. If you are affiliated with
          a U.S. college, visit accessnyt.com to learn if your institution
          provides New York Times access. Others should inquire with their
          school or local library. If you are a faculty or staff member
          interested in bringing The New York Times to your school, visit the
          Group Subscriptions Page.
        </p>
        {/* cards */}
        <div className="grid lg:grid-cols-3 my-6 overflow-x-auto space-y-4 lg:space-y-0">
          {/* card 1 */}
          <div className="flex items-center gap-4 lg:gap-0 lg:pr-3">
            <p>A.I. Travel Tools Are Everywhere. Are They Any Good?</p>
            <img
              className="w-[85px] h-[85px]"
              src="https://static01.nyt.com/images/2025/08/19/travel/19trav-ai-roundup-illo/19trav-ai-roundup-illo-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
          </div>
          {/* card 2 */}
          <div className="flex items-center gap-4 lg:gap-0 lg:pl-3 lg:border-l lg:border-l-gray-300 lg:pr-3">
            <p>
              The Hobbyist Restorer Who Rocked the Art World With an A.I.
              Innovation
            </p>
            <img
              className="w-[85px] h-[85px]"
              src="https://static01.nyt.com/images/2025/08/21/world/21int-italy-AI-Art/21int-italy-AI-Art-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
          </div>
          {/* card 3 */}
          <div className="flex items-center gap-4 lg:gap-0 lg:pl-3 lg:border-l lg:border-l-gray-300">
            <p>21 Ways People Are Using A.I. at Work</p>
            <img
              className="w-[85px] h-[85px]"
              src="https://static01.nyt.com/images/2025/08/08/multimedia/2025-06-26-ai-jobs-index/2025-06-26-ai-jobs-index-thumbLarge-v2.png?quality=75&auto=webp&disable=upscale  "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* divider */}
      <Divider2 />

      {/* container 2 */}
      <div className="mt-4">
        <p className="font-sans font-bold mb-4">More in Personal Tech</p>

        {/* cards container */}
        <div className="flex flex-wrap gap-4">
          {/* card 1 */}
          <div className="lg:max-w-[270px]">
            <img
              className="w-full object-cover"
              src="https://static01.nyt.com/images/2025/08/27/technology/personaltech/27BIZ-TECHTIP-TOP/27BIZ-TECHTIP-TOP-square640.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            <p className="text-lg">
              Fine-Tune Your Feed and Get News You Can Use
            </p>
          </div>
          {/* card 2 */}
          <div className="lg:max-w-[270px]">
            <img
              className="w-full object-cover"
              src="https://static01.nyt.com/images/2025/07/31/business/00techfix/00techfix-square640-v2.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            <p className="text-lg">
              Why A.I. Should Make Parents Rethink Posting Photos of Their
              Children Online
            </p>
          </div>
          {/* card 3 */}
          <div className="lg:max-w-[270px]">
            <img
              className="w-full object-cover"
              src="https://static01.nyt.com/images/2025/08/27/world/27int-skorea-smartphone-ban/27int-skorea-smartphone-ban-square640.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            <p className="text-lg">
              South Korea Outlaws the Use of Smartphones During Class
            </p>
          </div>
          {/* card 4 */}
          <div className="lg:max-w-[270px]">
            <img
              className="w-full object-cover"
              src="https://static01.nyt.com/images/2025/08/04/well/04WELL-PHONE-BREAKUP-lede-copy/04WELL-PHONE-BREAKUP-lede-copy-square640-v2.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            <p className="text-lg">15 Ways to Break Free of Your Phone</p>
          </div>
          {/* card 5 */}
          <div className="lg:max-w-[270px]">
            <img
              className="w-full object-cover"
              src="https://static01.nyt.com/images/2025/07/30/technology/personaltech/30BIZ-TECHTIP-TOP/30BIZ-TECHTIP-TOP-square640.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
            <p className="text-lg">How to Put Your Phone in Vacation Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNews;
