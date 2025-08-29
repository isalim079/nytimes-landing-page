import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar/Navbar";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <div className="font-cheltenham">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
