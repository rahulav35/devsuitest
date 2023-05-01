import React from "react";
type props = {
  name: string;
  position: string;
};

function Suggetions({ name, position }: props) {
  return (
    <div className="h-[65px] w-[85%] flex justify-evenly items-center border-[2px] border-[#2d2b2b] rounded-xl bg-[#131313]">
      <div className="h-[46px] w-[46px] rounded-full border-[2px] border-blue-800"></div>
      <div className="h-[80%] w-[70%] flex flex-col justify-evenly items-start ">
        <span className="text-sm text-white font-medium ">{name} </span>
        <span className="text-xs text-white font-light"> {position}</span>
      </div>
    </div>
  );
}

export default Suggetions;
