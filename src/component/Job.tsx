/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React from "react";
type props = {
  role: string;
};

function Job({ role }: props) {
  return (
    <div className="h-[35px] w-[140px] flex justify-between items-center border-b-[2px] border-[#ffffff15] ">
      <h1 className="text-xs text-[#ffffff71]  ">{role}</h1>

      <img className="h-[20px] w-[20px]" src="/ticksquare.svg" alt="" />
    </div>
  );
}

export default Job;
