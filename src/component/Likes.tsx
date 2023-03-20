import Image from "next/image";
import { type } from "os";
import React from "react";
type props = {
  text: string;
  image: string;
};

function Likes({ text, image }: props) {
  return (
    <div className="h-[35px] w-[105px] flex items-center justify-center ">
      <Image width={13} height={13} src={image} alt="" />
      <h1 className="text-xs text-white ml-2">{text}</h1>
    </div>
  );
}

export default Likes;
