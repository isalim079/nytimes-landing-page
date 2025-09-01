
import Divider2 from "../../../../components/ui/Divider2";
import Container1 from "./containers/Container1";
import Container10 from "./containers/Container10";
import Container11 from "./containers/Container11";
import Container12 from "./containers/Container12";
import Container13 from "./containers/Container13";
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
    <div className="py-4">
      <div className="lg:border-r-2 lg:border-r-gray-200">
        <Container1 />
        <Divider2 />
        <Container2 />
        <Container3 />
        <Divider2 />
        <Container4 />
        {/* mini section */}
        <div className="py-5 text-center border-y-1 border-y-black">
          <p>
            <b>Got a Tip?</b> The Times offers several ways to send important
            information confidentially
          </p>
        </div>
        <Container5 />
        <Divider2 />
        <Container6 />
        <Divider2 />
        <Container7 />
        <Divider2 />
        <Container8 />
        <Divider2 />
        <Container9 />
        <Divider2 />
        <Container10 />
        <Divider2 />
        <Container11 />
        <Divider2 />
        <Container12 />
        <Divider2 />
        <Container13 />
      </div>
    </div>
  );
};

export default LeftSideNews;
