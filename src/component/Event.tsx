import Image from "next/image";
import { type } from "os";
import React from "react";
type props = {
  text: string;
  image: string;
  width: number;
  height: number;
  onClick?: () => void;
};

function Event({ text, image, height, width, onClick }: props) {
  return (
    <div
      onClick={onClick}
      className="h-[33px] w-[85px] border-[2px] border-[#2d2b2b] flex items-center justify-evenly rounded-xl"
    >
      <Image width={width} height={height} src={image} alt="" />
      <h1 className="text-[13px] text-white">{text}</h1>
    </div>
  );
}

export default Event;
