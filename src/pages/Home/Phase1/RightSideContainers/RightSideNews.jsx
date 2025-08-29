import Divider2 from "../../../../components/ui/Divider2";
import Container1 from "./Containers/Container1";
import Container2 from "./Containers/Container2";
import Container3 from "./Containers/Container3";
import Container4 from "./Containers/Container4";

const RightSideNews = () => {
  return (
    <div className="py-4">
      <div className=" px-4">
        <Container1 />
        <Container2 />
        <Divider2 />
        <Container3 />
        <Divider2 />
        <Container4 />
      </div>
    </div>
  );
};

export default RightSideNews;
