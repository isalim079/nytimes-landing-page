import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";

const LeftSideNews = () => {
  return (
    <div>
      <Container1 />
      {/* divider */}
      <div className="px-4">
        <div className="h-[2px] bg-black"></div>
      </div>
      <Container2 />
      <Container3 />
    </div>
  );
};

export default LeftSideNews;
