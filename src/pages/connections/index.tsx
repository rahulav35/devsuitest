import ConnectionCard from "@/component/connectionCard";
import SearchBar from "@/component/searchBar";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

function Connections() {
  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-black ">
        <div className="w-[90%] h-[86%]  bg-black flex flex-col justify-start items-start px-[50px]">
            <SearchBar/>
            <div className="w-full h-[92%] grid  grid-cols-4 gap-y-9  gap-x-19 overflow-y-scroll scrollbar-hide  place-content-between place-items-center  mt-7">
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>
                <ConnectionCard/>

            </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Connections;
