import Divider from "../../../components/ui/Divider";
import Container1 from "./containers/Container1";
import Container10 from "./containers/Container10";
import Container11 from "./containers/Container11";
import Container12 from "./containers/Container12";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";
import Container6 from "./containers/Container6";
import Container7 from "./containers/Container7";
import Container8 from "./containers/Container8";
import Container9 from "./containers/Container9";

const LeftSideNews = () => {
  return (
    <div>
      <Container1 />
      <Divider />
      <Container2 />
      <Container3 />
      <Divider />
      <Container4 />
      {/* mini section */}
      <div className="py-5 text-center border-y-1 border-y-black">
        <p>
          <b>Got a Tip?</b> The Times offers several ways to send important
          information confidentially ›
        </p>
      </div>
      <Container5 />
      <Divider />
      <Container6 />
      <Divider />
      <Container7 />
      <Divider />
      <Container8 />
      <Divider />
      <Container9 />
      <Divider />
      <Container10 />
      <Divider />
      <Container11 />
      <Divider />
      <Container12 />
    </div>
  );
};

export default LeftSideNews;
