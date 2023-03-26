import Image from "next/image";
import React from "react";

type props = {
  image: string;
  designName: string;
  userName: string;
};

function Card({ image, designName, userName }: props) {
  return (
    <div className="w-[303px] h-[363px] bg-[#121212] flex flex-col justify-start items-center border-[2px] border-[#ffffff16] rounded-[20px] p-[20px] ">
      <Image className="w-full " width={30} height={30} src={image} alt="" />
      <div className="w-full h-full  flex flex-col justify-center items-start bg-[#121212]">
        <h1 className="text-[#FFFFFF] text-[20px] font-semibold">
          {designName}
        </h1>
        <div className="w-full h-[50%] ">
          <div className="w-[60%] h-full flex flex-row justify-start items-center ">
            <Image
              className=" "
              width={31}
              height={31}
              src={"/Ellipse 17.svg"}
              alt=""
            />
            <h1 className="text-[#FFFFFF] text-[15px] font-light ml-3">
              {userName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
