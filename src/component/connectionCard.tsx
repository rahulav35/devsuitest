import Image from "next/image";
import React from "react";

function ConnectionCard() {
  return (
    <div className="w-[234px] h-[294p7] bg-[#121212] flex flex-col justify-start items-center border-[2px] border-[#ffffff16] rounded-[20px] p-[7px]  ">
      <Image
        className="w-[98%] "
        width={20}
        height={20}
        src={"/Rectangle 84.svg"}
        alt=""
      />
      <div className="w-[95%] h-[30%]  flex flex-col justify-start items-start bg-[#121212] ">
        <h1 className="text-[#FFFFFF] text-[20px] font-semibold">Amal Raj</h1>
        <h1 className="text-[#FFFFFF] text-[14px] font-normal">Developer</h1>

        <div className="w-[100%] h-[40%] flex flex-row justify-between items-center mt-2 ">
          <div className="w-[48%] h-full flex flex-row justify-center items-center  bg-gradient-to-r from-[#14D3DB] to-[#0057FF]  rounded-[5px]">
            <h1 className="text-[#FFFFFF] text-[15px] font-normal">Follow</h1>
          </div>
          <div className="w-[48%] h-full flex flex-row justify-center items-center bg-[#404040]  rounded-[5px]">
            <h1 className="text-[#FFFFFF] text-[15px] font-normal">Remove</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectionCard;
