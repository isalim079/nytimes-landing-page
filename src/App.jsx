import { Outlet } from "react-router";
import "./App.css";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <div className="font-cheltenham">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
