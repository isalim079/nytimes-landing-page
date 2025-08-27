import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";
import Container6 from "./containers/Container6";
import Container7 from "./containers/Container7";
import Container8 from "./containers/Container8";

const LeftSideNews = () => {
  return (
    <div>
      <Container1 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[1px] bg-black"></div>
      </div>
      <Container2 />
      <Container3 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[1px] bg-black"></div>
      </div>
      <Container4 />
      {/* mini section */}
      <div className="py-5 text-center border-y-1 border-y-black">
        <p>
          <b>Got a Tip?</b> The Times offers several ways to send important
          information confidentially ›
        </p>
      </div>

      <Container5 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[1px] bg-black"></div>
      </div>
      <Container6 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[1px] bg-black"></div>
      </div>
      <Container7 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[1px] bg-black"></div>
      </div>
      <Container8 />
    </div>
  );
};

export default LeftSideNews;
