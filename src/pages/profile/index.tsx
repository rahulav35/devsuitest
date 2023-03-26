import Mainlayout from "@/layouts/Mainlayout";
import Image from "next/image";
import React from "react";
import { Calendar } from "iconsax-react";
import { Cake } from "iconsax-react";
import { Messages1 } from "iconsax-react";
import { MdLocationOn } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { MdArrowForwardIos } from "react-icons/md";
import Post from "@/component/Post";

function Profile() {
  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-black ">
        <div className="w-[90%] h-[86%]  bg-black flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide  ">
          <div className="w-full h-[55%] rounded-[14px] flex flex-col justify-between items-center border-[2px] border-[#ffffff16]  bg-[#121212] relative ">
            <Image
              className="w-full"
              width={30}
              height={30}
              src={"/Rectangle 50.svg"}
              alt=""
            />
            <div className="w-full h-[38%] flex flex-row justify-between items-center  ">
              <Image
                className="w-[15%] h-full absolute top-11 left-5 "
                width={30}
                height={30}
                src={"/Ellipse 170.svg"}
                alt=""
              />
              <div className="w-[18%] h-full bg-[#121212] flex flex-col justify-center items-start ml-52">
                <h1 className="text-[#FFFFFF] font-semibold text-[25px]">
                  {" "}
                  Rahul
                </h1>
                <h1 className="text-[#FFFFFF] font-light text-[20px]">
                  {" "}
                  Frontend Developer
                </h1>
              </div>
              <div className="w-[35%] h-full flex flex-row justify-around items-center">
                <div className="w-[35%] h-full  bg-[#121212] flex flex-col justify-center items-start">
                  <h1 className="text-[#FFFFFF] font-normal text-[22px]">
                    {" "}
                    Following
                  </h1>
                  <h1 className="text-[#FFFFFF] font-light text-[20px]">
                    {" "}
                    11515
                  </h1>
                </div>{" "}
                <div className="w-[35%] h-full bg-[#121212] flex flex-col justify-center items-start">
                  <h1 className="text-[#FFFFFF] font-normal text-[22px]">
                    {" "}
                    Followers
                  </h1>
                  <h1 className="text-[#FFFFFF] font-light text-[20px]">
                    {" "}
                    155445
                  </h1>
                </div>
                <div className="w-[20%] h-[80%] bg-[#151515] flex flex-col justify-center items-center border-[2px] border-[#ffffff16] rounded-[10px] ">
                  <Messages1 size="32" color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[100%] flex flex-row items-center justify-center mt-6 ">
            <div className="w-[32%] h-full flex flex-col items-center justify-start ">
              <div className="w-full h-[45%] flex flex-col items-start justify-start bg-[#121212] border-[2px] border-[#ffffff16]  p-4 rounded-[14px] ">
                <h1 className="text-[#FFFFFF]  font-semibold text-[20px]">
                  About &#123;Name&#125;
                </h1>
                <h1 className="text-[#FFFFFF] font-light text-[18px] mt-1">
                  Iam a passionate frontend developer from kerala.
                </h1>
                <div className="w-full h-[20%]  flex flex-row justify-start items-center mt-2 ">
                  <MdLocationOn size={20} color="white" />
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ml-2">
                    kerala, India
                  </h1>
                </div>
                <div className="w-full h-[20%]  flex flex-row justify-start items-center ">
                  <TfiWorld size={20} color="white" />
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ml-2">
                    www.portfolio.in
                  </h1>
                </div>
                <div className="w-full h-[20%]  flex flex-row justify-start items-center ">
                  <Calendar size="22" color="white" />
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ml-2">
                    kerala, India
                  </h1>
                </div>
                <div className="w-full h-[20%]  flex flex-row justify-start items-center ">
                  <Cake size="20" color="white" />
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ml-2">
                    kerala, India
                  </h1>
                </div>
              </div>
              <div className="w-full h-[12%] rounded-[14px] flex flex-row items-center justify-between px-8 mt-3 mb-3 bg-[#121212] border-[2px] border-[#ffffff16]">
                <h1 className="text-[#FFFFFF] font-normal text-[20px] ">
                  Portfolio
                </h1>
                <MdArrowForwardIos size={22} color="white" />
              </div>
              <div className="w-full h-[30%] rounded-[15px] bg-[#121212] p-4 border-[2px] border-[#ffffff16]">
                <h1 className="text-[#FFFFFF] font-normal text-[20px] ">
                  Skills
                </h1>
                <div className="w-full h-[15%]  bg-[#121212] flex flex-row justify-between items-center mt-2 ">
                  <h1 className="text-[#FFFFFF] font-light text-[18px] w-[25%] ">
                    Html
                  </h1>
                  <div className="w-[50%] h-[50%]  flex flex-row justify-between items-center bg-white rounded-[15px]">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#14D3DB] to-[#0057FF]  flex flex-row justify-between items-center rounded-[15px]"></div>
                  </div>
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ">
                    3/5
                  </h1>
                </div>
                <div className="w-full h-[15%]  bg-[#121212] flex flex-row justify-between items-center mt-2">
                  <h1 className="text-[#FFFFFF] font-light text-[18px]  w-[25%]  ">
                    CSS
                  </h1>
                  <div className="w-[50%] h-[50%]  flex flex-row justify-between items-center bg-white rounded-[15px]">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#14D3DB] to-[#0057FF]  flex flex-row justify-between items-center rounded-[15px]"></div>
                  </div>
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ">
                    3/5
                  </h1>
                </div>
                <div className="w-full h-[15%]  bg-[#121212] flex flex-row justify-between items-center mt-2">
                  <h1 className="text-[#FFFFFF] font-light text-[18px]  w-[25%] ">
                    Javascript
                  </h1>
                  <div className="w-[50%] h-[50%]  flex flex-row justify-between items-center bg-white rounded-[15px]">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#14D3DB] to-[#0057FF]  flex flex-row justify-between items-center rounded-[15px]"></div>
                  </div>
                  <h1 className="text-[#FFFFFF] font-light text-[18px] ">
                    3/5
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[65%] h-full flex flex-col items-start justify-start ml-8  ">
              <h1 className="text-[#FFFFFF] font-normal text-[25px] ">Feeds</h1>
              <div className="w-full min-h-[30%] rounded-[10px] mt-2">
                <Post />
                <Post />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Profile;
