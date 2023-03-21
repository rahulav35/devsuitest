import Image from "next/image";
import React from "react";
import { X } from "./Icons";

function Warning() {
  return (
    <div className="h-[90px] w-[95%] rounded-xl flex items-center justify-between bg-[#8d0707e4]  border-[2px] border-[#2d2b2b94] mt-5  ">
      <div className="h-[100%] w-[90%] flex flex-col justify-evenly items-start  pl-3">
        <h1 className="text-white text-xl flex items-start font-medium">
          Alpha warning !
        </h1>
        <h2 className="text-[11px] text-white flex items-start">
          DevsUi is still in the alpha phase,things may break,please handle us
          with care.
        </h2>
      </div>
      <Image
        className="-mt-16 mr-2"
        width={25}
        height={25}
        src="/x.svg"
        alt=""
      />
    </div>
  );
}

export default Warning;
