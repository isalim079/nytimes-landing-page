import Container1 from "./Containers/Container1";

const LeftSideNews = () => {
  return (
    <div className="py-4">
      <h6 className="font-sans text-xs font-bold mb-2 px-4">More News</h6>
      <div className="border-r border-r-gray-300">
        <Container1 />
      </div>
    </div>
  );
};

export default LeftSideNews;
