import { Link, NavLink } from "react-router-dom";
import Movies from "../pages/Movies";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <>
      <SideBar />
      <main className="w- grid place-content-center h-screen m-auto absolute left-[25%] max-md:left-[35%]   ">
        <h1 className="text-7xl font-bold text-center "> Welcome</h1>
      </main>
    </>
  );
};

export default Dashboard;
