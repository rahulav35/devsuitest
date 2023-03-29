/* eslint-disable @next/next/no-img-element */
import React from "react";

function Addphotos() {
  return (
    <div className="h-[170px] w-[350px] bg-[#0f0303] mt-3  rounded-[8px] flex justify-center items-center p-2 box-border">
      <div className="h-[100%] w-[100%] bg-[#202020]  rounded-[6px] flex-col flex justify-center items-center">
        <img
          className=" h-[17px] w-[17px] -mt-[11%] -mr-[90%] "
          src="x.svg"
          alt=""
        />
        <div className="h-[40px] w-[40px] rounded-full  bg-[#2C2C2C] flex justify-center items-center ">
          <img className="h-[20px] w-[20px]" src="galleryadd.svg" alt="" />
        </div>
        <h1 className="text-lg text-white mt-1">Add photos/Videos</h1>
        <h3 className="text-xs text-[#ffffff79]">Drag and drop to file </h3>
      </div>
    </div>
  );
}

export default Addphotos;
