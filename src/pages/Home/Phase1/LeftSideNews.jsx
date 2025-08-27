import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";

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
    </div>
  );
};

export default LeftSideNews;
