import { Outlet } from "react-router";
import "./App.css";
import Footer from "./pages/shared/Footer/Footer";
import FooterMobile from "./pages/shared/Footer/FooterMobile";

function App() {
  return (
    <div className="font-cheltenham">
      <Outlet />
      <Footer />
      <FooterMobile />
    </div>
  );
}

export default App;
