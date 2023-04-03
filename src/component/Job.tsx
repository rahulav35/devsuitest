/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React from "react";
type props = {
  role: string;
  isActive: boolean;
  onClick: () => void;
};

function Job({ role, isActive, onClick }: props) {
  return (
    <div
      onClick={onClick}
      className="h-[35px] w-[140px] flex justify-between items-center border-b-[2px] border-[#ffffff15] "
    >
      <h1 className="text-xs text-[#ffffff71]  ">{role}</h1>

      {isActive && (
        <img className="h-[30px] w-[30px]" src="/ticksquare.svg" alt="" />
      )}
    </div>
  );
}

export default Job;
