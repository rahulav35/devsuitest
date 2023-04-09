import Image from "next/image";
import { type } from "os";
import React from "react";
type props = {
  text: string;
  image: string;
  onClick ?: ()=> void;
};

function Likes({ text, image , onClick}: props) {
  return (
    <div onClick={onClick} className="h-[35px] w-[85px] flex items-center justify-center ">
      <Image width={13} height={13} src={image} alt="" />
      <h1 className="text-xs text-white ml-2">{text}</h1>
    </div>
  );
}

export default Likes;
