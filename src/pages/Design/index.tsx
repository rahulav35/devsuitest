import Card from "@/component/card";
import SearchBar from "@/component/searchBar";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

function Index() {
  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center  ">
        <div className="w-[90%] h-[86%]  flex flex-col justify-start items-center ">
          <div className="w-[100%] h-[12%] flex flex-row items-start justify-between ">
            <SearchBar />
            <div className="w-[150px] h-[50px] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[20px] ">
              <h1 className="font-semibold text-[17px] text-[#FFFFFF]">
                Post a Design
              </h1>
            </div>
          </div>
          <div className="w-full h-[88%] grid  grid-cols-3 gap-y-9  gap-x-24 overflow-y-scroll scrollbar-hide  place-content-between place-items-center">
            <Card
              image="/Rectangle 49.svg"
              designName="Mobile App Design"
              userName="Athul Vishnu"
            />
            <Card
              image="/Rectangle 51.svg"
              designName="Mobile App Design"
              userName="Amal Raj"
            />
            <Card
              image="/Rectangle 53.svg"
              designName="Mobile App Design"
              userName="Pranav Padmanabhan"
            />
            <Card
              image="/Rectangle 57.svg"
              designName="Mobile App Design"
              userName="Sharath "
            />
            <Card
              image="/Rectangle 58.svg"
              designName="Mobile App Design"
              userName="Rahul AV"
            />
            <Card
              image="/Rectangle 59.svg"
              designName="Mobile App Design"
              userName="Athul Vishnu"
            />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Index;
