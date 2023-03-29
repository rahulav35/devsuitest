/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React, { useState } from "react";
import Job from "./Job";
type props = {
  classname: string;
};

function Jobrole({ classname }: props) {
  const [showjobrole, setShowjobrole] = useState(false);

  return (
    <div
      className={`${classname} min-h-[38px] w-[160px] flex flex-col justify-start items-center my-2`}
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
          <Job role="Frontend Developer" />
          <Job role="Backend Developer" />
          <Job role="FullStalk Developer" />
          <Job role="Flutter Developer" />
          <Job role="ios Developer" />
          <Job role="UI/UX Designer" />
        </div>
      )}
    </div>
  );
}

export default Jobrole;
