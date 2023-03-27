import React from "react";
import { MdOutlineCancel } from "react-icons/md";

function Createpost() {
  return (
    <div className=" h-[100vh] w-[100vw] text-white flex justify-center items-center fixed top-0 left-0">
      <div className="h-[57%] w-[35%] rounded-3xl bg-[#121212]  border-[3px] border-[#2d2b2b] flex flex-col justify-start items-center mr-28 mt-8">
        <div className="h-[40px] w-[100%] flex justify-center items-center relative ">
          <h1 className="text-white text-xl font-medium    m-auto ">
            Create Post
          </h1>
          <MdOutlineCancel className="h-[23px] w-[23px]  absolute right-3" />
        </div>

        <div className="bg-[#ffffff4f] w-[100%] h-[1px]"></div>
        <div className="h-[60px] w-[100%] flex justify-start items-center ml-14 ">
          <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800"></div>

          <span className="text-md text-white font-medium ml-3 ">
            Amal Raj{" "}
          </span>
        </div>
        <textarea
          className="bg-transparent mt-3  text-sm text-white focus:outline-none  "
          name=""
          id=""
          cols={48}
          rows={10}
          placeholder="Share your thoughts"
        ></textarea>
      </div>
    </div>
  );
}

export default Createpost;
