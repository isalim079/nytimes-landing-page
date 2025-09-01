import Divider2 from "../../components/ui/Divider2";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import Phase3 from "./Phase3/Phase3";
import Phase4 from "./Phase4/Phase4";
import Phase5 from "./Phase5/Phase5";
import Phase6 from "./Phase6/Phase6";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        <Phase1 />
        <Divider2 />
        <Phase2 />
        <Divider2 />
        <Phase3 />
        <Divider2 />
        <Phase4 />
        <Divider2 />
        <Phase5 />
        <div className="h-[1px] bg-black"></div>
        <div className="h-[1px] bg-black mt-[2px]"></div>
        <Phase6 />
      </div>
    </div>
  );
};

export default Home;
