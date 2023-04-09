/* eslint-disable @next/next/no-img-element */
import React from "react";
import LikedPersons from "./LikedPersons";

function LikeSection() {
  return (
    <div className="min-h-[300px] w-[100%] flex flex-col justify-start items-center overflow-y-scroll  ">
      <LikedPersons img="msgs.svg" />
      <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
      <LikedPersons img="profileadd.svg" />
      <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
    </div>
  );
}

export default LikeSection;
