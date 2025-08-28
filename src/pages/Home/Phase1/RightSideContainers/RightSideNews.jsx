import Container1 from "./Containers/Container1";
import Container2 from "./Containers/Container2";

const RightSideNews = () => {
  return (
    <div className="py-4">
      <div className="border-l-2 border-l-gray-200 px-4">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
};

export default RightSideNews;
