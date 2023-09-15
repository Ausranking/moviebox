import React from "react";

const DashBoardItem = ({ icon, text }) => {
  return (
    <div className="flex items-center text-center cursor-pointer p-2  space-x-5 rounded-md justify-stretch hover:bg-emerald-400/20 hover:border-r-4 border-primary-color">
      <div className="">
        <img src={icon} alt="" width={25} height={30} />
      </div>
      <div className="font-semibold">{text}</div>
    </div>
  );
};

export default DashBoardItem;
