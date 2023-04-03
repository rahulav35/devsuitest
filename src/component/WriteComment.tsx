import React, { useState } from "react";
type props = {
  comment: any;
};

function WriteComment({ comment }: props) {
  return (
    <div className="h-[50px] w-[87%] flex justify-start items-center  ml-6 mt-2 ">
      <div className="h-[38px] w-[38px] rounded-full border-[2px] border-blue-800 mr-3"></div>
      <div className="h-[70px] w-[70%] flex flex-col justify-center items-start  ">
        <span className="text-[18px] text-white font-medium  ">
          Pranav{" "}
          <span className="text-[14px] text-white font-light mr-1 ">
            {" "}
            Commented
          </span>{" "}
          :{" "}
          <span className="text-white font-light text-xs mx-1">{comment}</span>
        </span>
        <div className="h-[35%] min-w-[130px] flex items-center justify-between ">
          <span className="text-[13px] bg-gradient-to-r from-[#14D3DB]  to-[#0057FF] text-transparent bg-clip-text font-medium">
            {" "}
            56 Likes{" "}
          </span>
          <span className="  text-xs text-white font-medium ">Reply</span>
          <span className="  text-xs text-white font-normal">10 m</span>
        </div>
      </div>
    </div>
  );
}

export default WriteComment;
