import { newsData } from "./Phase6Data";

const Phase6 = () => {
  return (
    <div className="mt-5">
      <h6 className="uppercase font-bold">News</h6>

      {/* news */}
      <div className="grid lg:grid-cols-5 gap-7 mt-4">
        {newsData.map((item) => (
          <div key={item.id}>
            <p className="font-sans font-bold text-xs mb-2">{item.title}</p>
            <img src={item.image} alt="" />
            <p className="mt-3">{item.description1}</p>
            <p className="my-2">{item.description2}</p>
            <p>{item.description3}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phase6;
