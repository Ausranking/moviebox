import { Link, NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import Logo from "./Logo";

const Dashboard = () => {
  const [sidebar, setSideBar] = useState(false);

  const handleSidebar = () => setSideBar(!sidebar);
  return (
    <>
      <div className="max-md:hidden">
        <SideBar/>
      </div>

      <nav className="flex w-screen md:hidden items-center justify-between p-4">
        <div>
          <Logo />
        </div>

        <div onClick={handleSidebar} className="md:hidden">
          {sidebar ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </nav>

      <div>
        {sidebar ? (
          <div className="h-screen w-screen rounded-md absolute bg-gradient-to-tr from-primary-color to-purple-950 z-10 grid place-items-center text-xl text-center  ">
            Mobile sidebar component coming soon...
          </div>
        ) : (
          ""
        )}
      </div>

      <main className="grid place-content-center h-screen m-auto lg:absolute left-[25%] max-md:left-[35%]   ">
        <h1 className="text-7xl font-bold text-center "> Welcome</h1>
      </main>
    </>
  );
};

export default Dashboard;
