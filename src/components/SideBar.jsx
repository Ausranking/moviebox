import { NavLink } from "react-router-dom";
import DashBoardItem from "./DashBoardItem";
import Logo from "../components/Logo";
import { home, tvshow, calendar, projector, logout } from "../assets/icons";

const SideBar = ({ handleSidebar }) => {
  handleSidebar = { handleSidebar };
  return (
    <aside className="w-[14rem] h-screen grid pl-5 space-y-24 ring-1 z-10 ring-gray-200 rounded-tr-3xl rounded-br-3xl fixed">
      <div className="grid ">
        <div className="mb-5 mt-5 ">
          <Logo />
        </div>
        <div className="grid gap-4 p-2">
          <NavLink to="/">
            <DashBoardItem icon={home} text={"Home"} />
          </NavLink>

          <NavLink to="/">
            <DashBoardItem icon={projector} text={"Movies"} />
          </NavLink>

          <DashBoardItem icon={tvshow} text={"TV Series"} />
          <DashBoardItem icon={calendar} text={"Upcoming"} />

          <div className="w-[10rem] h-[13.125rem] grid place-items-center ring-1 ring-primary-color/50 m-auto py-2 ml-1 rounded-lg">
            <h2 className="text-lg font-semibold text-center ">
              Play movie quizes and earn free tickets
            </h2>
            <p className="text-sm my-2 font-semibold text-center">
              50k people are playing now
            </p>
            <button className="ring-1 ring-primary-color px-4 py-1 hover:scale-95  rounded-3xl">
              Start playing
            </button>
          </div>
          <DashBoardItem icon={logout} text={"Logout"} />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
