/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React, { Dispatch, SetStateAction, useState } from "react";
import Job from "./Job";
type props = {
  classname: string;
  roleselect: any[];
  toggle: any;
};

function Jobrole({ classname, roleselect, toggle }: props) {
  const [showjobrole, setShowjobrole] = useState(false);

  return (
    <div
      className={`${classname} min-h-[38px] w-[160px] flex flex-col justify-start items-center `}
    >
      <div
        onClick={() => setShowjobrole(!showjobrole)}
        className="h-[38px] w-[160px] rounded-lg bg-[#1d0808fb]  flex justify-between items-center px-2 box-border "
      >
        <h1 className=" text-xs text-[#ffffff96] tracking-tight">
          Select job role
        </h1>
        <img className="h-[19px] w-[19px]" src="arrowdown2.svg" alt="" />
      </div>
      {showjobrole && (
        <div className="min-h-[33px] w-[160px] flex flex-col justify-start items-center mt-2 border-[3px] border-[#ffffff15] bg-[#1d0808fb]  rounded-xl">
          <Job
            onClick={() => toggle("Frontend Developer")}
            role="Frontend Developer"
            isActive={roleselect.includes("Frontend Developer")}
          />
          <Job
            onClick={() => toggle("Backend Developer")}
            role="Backend Developer"
            isActive={roleselect.includes("Backend Developer")}
          />
          <Job
            onClick={() => toggle("FullStalk Developer")}
            role="FullStalk Developer"
            isActive={roleselect.includes("FullStalk Developer")}
          />
          <Job
            onClick={() => toggle("Flutter Developer")}
            role="Flutter Developer"
            isActive={roleselect.includes("Flutter Developer")}
          />
          <Job
            onClick={() => toggle("ios Developer")}
            role="ios Developer"
            isActive={roleselect.includes("ios Developer")}
          />
          <Job
            onClick={() => toggle("UI/UX Developer")}
            role="UI/UX Designer"
            isActive={roleselect.includes("UI/UX Designer")}
          />
        </div>
      )}
    </div>
  );
}

export default Jobrole;
