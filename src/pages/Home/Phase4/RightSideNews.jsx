const RightSideNews = () => {
  return (
    <div className="pl-4 pt-4">
      {/* section 1 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3 flex gap-5 justify-between">
        <div>
          <h3 className={`font-semibold leading-[22px] mt-1`}>
            4 Approaches to Dealing With a Narcissist
          </h3>
          <p className="text-gray-500 leading-tight mt-1">
            We asked experts for books to help people understand narcissistic
            personality disorder.
          </p>
          <span className="text-gray-500 uppercase font-sans text-[10px]">
            3 min read
          </span>
        </div>
        <div>
          <img
            className="w-[190px] h-[90px] object-cover"
            src="https://static01.nyt.com/images/2025/08/28/well/28WELL-NARCISSISM-BOOKS-image/28WELL-NARCISSISM-BOOKS-image-smallSquare252-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-3 border-b-2 border-b-gray-200 pb-3 flex gap-5 justify-between">
        <div>
          <h3 className={`font-semibold leading-[22px] mt-1`}>
            A Traditional Necklace That Lives On
          </h3>
          <p className="text-gray-500 leading-tight mt-1">
            Many jewelry designers and makers are inspired by the Native
            American squash blossom design.
          </p>
          <span className="text-gray-500 uppercase font-sans text-[10px]">
            3 min read
          </span>
        </div>
        <div>
          <img
            className="w-[210px] h-[90px] object-cover"
            src="https://static01.nyt.com/images/2025/08/28/multimedia/28sp-jewelry-NM-inyt-digi-03-jtgk/28sp-jewelry-NM-inyt-digi-03-jtgk-smallSquare252.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
      </div>

      {/* section 3 */}
      <div className="mt-3 flex gap-5 justify-between">
        <div>
          <h3 className={`font-semibold leading-[22px] mt-1`}>
            ‘Thursday Murder Club’: A Whodunit
          </h3>
          <p className="text-gray-500 leading-tight mt-1">
            Helen Mirren, Ben Kingsley and Pierce Brosnan solve cold cases from
            a retirement home.
          </p>
          <span className="text-gray-500 uppercase font-sans text-[10px]">
            2 min read
          </span>
        </div>
        <div>
          <img
            className="w-[200px] h-[90px] object-cover"
            src="https://static01.nyt.com/images/2025/08/29/multimedia/28cul-murderclub-review-cqkz/28cul-murderclub-review-cqkz-smallSquare252.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideNews;
