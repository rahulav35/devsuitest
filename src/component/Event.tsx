import Image from "next/image";
import { type } from "os";
import React from "react";
type props = {
  text: string;
  image: string;
  width: number;
  height: number;
};

function Event({ text, image, height, width }: props) {
  return (
    <div className="h-[35px] w-[85px] bg-[#1E1E1E] flex items-center justify-evenly rounded-xl">
      <Image width={width} height={height} src={image} alt="" />
      <h1 className="text-sm text-white">{text}</h1>
    </div>
  );
}

export default Event;
