import React from "react";

function Addpost() {
  return (
    <div className="h-full w-full justify-center flex items-center bg-amber-400 z-100">
      <div className="h-[57%] w-[37%] rounded-lg bg-slate-700 flex flex-col justify-start items-center">
        <h1 className="text-white text-xl font-medium m-3">Create Post</h1>
        <div className="h-[60px] w-[100%] flex justify-start items-center ml-14 ">
          <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800"></div>

          <span className="text-md text-white font-medium ml-3 ">
            Amal Raj{" "}
          </span>
        </div>
        <textarea
          className="bg-transparent mt-5 -ml-10 text-sm text-white focus:outline-none "
          name=""
          id=""
          cols={32}
          rows={8}
          placeholder="Share your thoughts"
        ></textarea>
      </div>
    </div>
  );
}

export default Addpost;
