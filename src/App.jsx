import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar/Navbar";

function App() {
  return (
    <div className="font-cheltenham">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
