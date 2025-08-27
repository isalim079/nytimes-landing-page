import logo from "../../../assets/img/NewYorkTimes.svg";

const MiddleNav = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="grid grid-cols-4 items-center mt-3">
      {/* left section */}
      <div className="text-sm font-sans">
        <p>{formattedDate}</p>
        <p>Today’s Paper</p>
      </div>

      {/* middle section */}
      <div className="col-span-2 flex justify-center">
        <img className="w-[480px]" src={logo} alt="" />
      </div>

      {/* right section */}
      <div className="flex justify-end">
        <p>S&P 500</p>
      </div>
    </div>
  );
};

export default MiddleNav;
