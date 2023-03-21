import Image from "next/image";
import { type } from "os";
import React from "react";

import Likes from "./Likes";
type props = {
  image?: string;
};

function Post({ image }: props) {
  return (
    <div className="min-h-[45%] w-[100%] mt-2 rounded-lg flex items-start justify-evenly flex-col bg-[#121212] ">
      <div className="h-[60px] w-[100%] flex justify-evenly items-center ">
        <div className="h-[46px] w-[46px] rounded-full border-[2px] border-blue-800"></div>
        <div className="h-[100%] w-[70%] flex flex-col justify-evenly items-start  -ml-7">
          <span className="text-lg text-white font-medium ">
            Amal Raj{" "}
            <span className="text-xs text-white font-normal ">
              {" "}
              is Searching for an efficient Developer
            </span>
          </span>
          <span className="text-xs text-white font-normal"> Developer</span>
        </div>
        <Image
          className=" -mt-5 -mr-5"
          width={20}
          height={20}
          src={"/more-vertical.svg"}
          alt=""
        />
      </div>
      <div className="h-[1px] w-[63%] bg-[#ffffff47] ml-28 my-1"></div>
      <p className="text-sm text-white font-light w-[85%] h-[80px] tracking-wider ml-11 mt-3 text-left">
        Hey there We are hiring! Join our team as a software developer and help
        us build innovative solutions that make a difference in peoples lives.
        us build innovative solutions that make a difference in peoples lives.
      </p>
      {image && (
        <Image
          className="h-[150px] w-[50px] ml-11"
          width={100}
          height={100}
          src={image}
          alt=""
        />
      )}
      <h1 className="text-xs text-white font-normal ml-11 mt-2">100 Likes</h1>
      <div className="h-[1px] w-[63%] bg-[#ffffff47] ml-28 my-3"></div>
      <div className="h-[40px] w-[85%] flex items-center justify-start ml-4 mb-2 ">
        <Likes image="/like.svg" text="Likes" />
        <Likes image="/Comment.svg" text="Comment" />
        <Likes image="/Share.svg" text="Share" />
      </div>
    </div>
  );
}

export default Post;
