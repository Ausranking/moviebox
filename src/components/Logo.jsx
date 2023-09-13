import { NavLink } from "react-router-dom";
import { logo } from "../assets/icons";

const Logo = () => {
  return (
    <div className="flex items-center  max-w-[200px] relative">
      <NavLink to="/">
        <div className="inline-flex items-center">
          <img
            className="dark:col"
            src={logo}
            alt="logo"
            width={36}
            height={36}
          />
          <span className="absolute left-14 font-bold">MovieBox</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
