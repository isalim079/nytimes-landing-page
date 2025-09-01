import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";

const Container11 = () => {
  return (
    <div className="grid grid-cols-12 lg:p-4 gap-4 mt-2 items-center mb-4 lg:mb-0">
      {/* left section */}
      <div className="lg:col-span-4 col-span-12">
        <h6 className="font-sans text-xs font-semibold mb-2">ANALYSIS</h6>

        <HeadingTitleComponents
          title={"Donald Trump’s Big Gay Government"}
          subtitle={
            "The “A-Gays” of Washington are proud to work for the president — never mind what other gay men think of them."
          }
          titleSize={"text-2xl"}
        />
      </div>
      {/* right section */}
      <div className="lg:col-span-8 col-span-12 ">
        <div className="flex w-full justify-end lg:w-fit gap-2">
          <img
            className="lg:w-[268px] w-[160px] h-full object-cover"
            src="https://static01.nyt.com/images/2025/08/22/multimedia/ST-POWER-GAYS-02-hwft/ST-POWER-GAYS-02-hwft-verticalTwoByThree735.jpg?quality=75&auto=webp"
            alt=""
          />
          <img
            className="lg:w-[268px] w-[160px] h-full object-cover"
            src="https://static01.nyt.com/images/2025/08/22/multimedia/ST-POWER-GAYS-swap-qwlc/ST-POWER-GAYS-swap-qwlc-verticalTwoByThree735-v3.jpg?quality=75&auto=webp"
            alt=""
          />
        </div>
        <span className="text-gray-500 font-sans text-[10px] font-semibold flex justify-end mt-1">
          Jason Andrew for The New York Times
        </span>
      </div>
    </div>
  );
};

export default Container11;
