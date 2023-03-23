import Mainlayout from "@/layouts/Mainlayout";
import Image from "next/image";
import React from "react";

function PostDetails() {
  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-white">
        <div className="w-[90%] h-[86%]  bg-[#1E1E1E] flex flex-col justify-start items-center ">
          <div className="w-full h-[60%] flex flex-row justify-between items-center border">
            <Image
              className="w-[35%] h-full "
              width={30}
              height={30}
              src={"/Rectangle 49.svg"}
              alt=""
            />
            <div className="w-[60%] h-full bg-blue-800">
              <h1 className="text-[#FFFFFF] font-semibold text-[35px]">
                {" "}
                Mobile App Design
              </h1>
              <h1 className="text-[#FFFFFF] font-light text-[22px]">
                Revolutionize your mobile experience with our sleek and
                intuitive app design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default PostDetails;
