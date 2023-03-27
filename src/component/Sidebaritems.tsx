import Image from "next/image";
import { type } from "os";
import React from "react";
type props = {
  text: string;
  active: boolean;

  image: string;
  onClick: () => void;
};

function Sidebaritems({ text, image, onClick, active }: props) {
  return (
    <div onClick={onClick} className=" flex items-center justify-center ml-9">
      <Image width={22} height={22} src={image} alt="" />
      <span
        className={`hidden xl:inline text-[16px] ${
          active ? " text-white" : "text-[#ffffff82]"
        } font-inter font-medium px-3 box-border`}
      >
        {text}
      </span>
    </div>
  );
}

export default Sidebaritems;
