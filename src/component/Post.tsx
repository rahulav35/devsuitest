/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { type } from "os";
import React, { useState } from "react";

import CommentSection from "./CommentSection";

import Likes from "./Likes";
import LikeSection from "./LikeSection";
import RequestWork from "./RequestWork";
import { useAppContext } from "@/contexts/Appcontext";

type props = {
  image?: string;
};

function Post({ image }: props) {
  const {postSectionType,setPostSectionType}= useAppContext()

  const [commenthandle, setCommenthandle] = useState([
    {
      id: "abcdefghi",
      commentor: "Pranav t v",
      comment: "hei shitsu",
      commentedat: "time",
      replies: [
        {
          id: "abcdefghi",
          commentor: "Pranav t v",
          comment: "hei shitsu",
          commentedat: "time",
        },
        {
          id: "abcdefghi",
          commentor: "Pranav t v",
          comment: "hei shitsu",
          commentedat: "time",
        },
      ],
    },
  ]);

  function RenderPostSection() {
    if (postSectionType=== "comment") {
      return ( <CommentSection setComments={setCommenthandle} comments={commenthandle} />)
      
    }

    else if (postSectionType ==="like") {
      return (<LikeSection />)
      
    }

    else {
      return (
        <RequestWork/>
      )
    }
    
  }

  return (
    <div className="max-h-[75vh] min-h-[40vh] w-[100%] mt-2  rounded-lg flex items-start justify-start flex-col bg-[#121212] overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <div className="h-[60px] w-[100%] flex justify-evenly items-center mt-2">
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
      <p className="text-sm text-white font-light w-[85%] min-h-[80px] tracking-wider ml-11 mt-3 text-left">
        Hey there We are hiring! Join our team as a software developer and help
        us build innovative solutions that make a difference in peoples lives.
        us build innovative solutions that make a difference in peoples lives.
      </p>{" "}
      {image && (
        <img
          className=" w-[200px] object-cover ml-11"
          src="/gallery.svg"
          alt=""
        />
      )}
      <h1 onClick={()=>setPostSectionType("like")} className="text-xs text-white font-normal ml-11 mt-2">100 Likes</h1>
      <div className="h-[1px] w-[63%] bg-[#ffffff47] ml-28 my-3"></div>
      <div className="h-[40px] w-[85%] flex items-center justify-start ml-6 mb-2 ">
        <Likes image="/like.svg" text="Likes" />
        <Likes image="/Comment.svg" text="Comment" onClick={()=> setPostSectionType("comment")} />
        <Likes image="/Share.svg" text="Share" />
        <div className="h-[34px] w-[110px] bg-gradient-to-r from-[#14D3DB] via-[#3471ec] to-[#0057FF] rounded-[8px] flex justify-center items-center p-[2px] box-border ml-[80px]">
          <div onClick={()=> setPostSectionType("request")} className="h-[100%] w-[100%] rounded-[6px] bg-[#121212] flex justify-center items-center">
            <h1 className="text-xs font-medium bg-gradient-to-r from-[#14D3DB] to-[#0057FF] bg-clip-text text-transparent ">Request Work</h1>
          </div>

        </div>
      </div>
     
 <RenderPostSection/>
     
    </div>
  );
}

export default Post;
