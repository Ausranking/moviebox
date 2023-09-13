import { NavLink, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
      <div>
          {/* <Navbar/>  */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
