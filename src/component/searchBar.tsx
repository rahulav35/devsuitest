import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="w-[530px] h-[50px] bg-[#121212] flex flex-row items-center justify-between border border-[#FFFFFF] rounded-[30px] px-[7px]">
      <input
        type="text"
        placeholder="Search here..."
        className="w-[85%] h-full bg-[#121212] rounded-[30px] focus:outline-none text-[#FFFFFF] ml-5"
      />
      <div className="w-[7%] h-[70%] bg-[#404040] flex flex-col items-center justify-center rounded-[100%] ">
        <BsSearch size={20} color="white" />
      </div>
    </div>
  );
}

export default SearchBar;
