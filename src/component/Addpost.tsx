/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React from "react";
type props = {
  Image: string;
  width?: number;
  height?: number;
};

function Addpost({ Image, width, height }: props) {
  return (
    <div className="h-[34px] w-[34px] rounded-full flex items-center justify-center ">
      <img style={{ width, height }} src={Image} alt="" />
    </div>
  );
}

export default Addpost;
