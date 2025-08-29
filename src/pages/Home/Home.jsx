import Divider2 from "../../components/ui/Divider2";
import Phase1 from "./Phase1/Phase1";
import Phase2 from "./Phase2/Phase2";
import Phase3 from "./Phase3/Phase3";
import Phase4 from "./Phase4/Phase4";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <Phase1 />
        <Divider2 />
        <Phase2 />
        <Divider2 />
        <Phase3 />
        <Divider2 />
        <Phase4 />
      </div>
    </div>
  );
};

export default Home;
