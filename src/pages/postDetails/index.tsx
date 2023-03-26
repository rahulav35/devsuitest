import Mainlayout from "@/layouts/Mainlayout";
import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

function PostDetails() {
  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-black ">
        <div className="w-[90%] h-[86%]  bg-black flex flex-col justify-start items-center ">
          <div className="w-full h-[60%] flex flex-row justify-between items-center ">
            <Image
              className="w-[35%] h-full "
              width={30}
              height={30}
              src={"/Rectangle 49.svg"}
              alt=""
            />
            <div className="w-[60%] h-full bg-black">
              <h1 className="text-[#FFFFFF] font-semibold text-[34px]">
                {" "}
                Mobile App Design
              </h1>
              <h1 className="text-[#FFFFFF] font-light text-[18px] mt-3">
                Revolutionize your mobile experience with our sleek and
                intuitive app design
              </h1>
              <div className="w-full h-[13%]  flex flex-row items-center justify-start mt-10">
                <Image
                  className="w-[7%] h-full "
                  width={30}
                  height={30}
                  src={"/Ellipse 17.svg"}
                  alt=""
                />
                <h1 className="text-[#FFFFFF] text-[17px] font-semibold ml-5">
                  Athul Vishnu
                </h1>
                <div className="w-[15%] h-[70%] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[5px] ml-[20px] ">
                  <h1 className="font-semibold text-[14px] text-[#FFFFFF]">
                    Visit Profile
                  </h1>
                </div>
              </div>
              <div className="w-[40%] h-[30%]  flex flex-col items-center justify-around mt-5">
                <div className="w-full h-[15%]  flex flex-row items-center justify-start">
                  <IoMdCheckmark size={20} color="green" />
                  <h1 className="text-[#FFFFFF] text-[17px] font-light ml-3">
                    Figma file acess
                  </h1>
                </div>
                <div className="w-full h-[15%]  flex flex-row items-center justify-start">
                  <IoMdCheckmark size={20} color="green" />
                  <h1 className="text-[#FFFFFF] text-[17px] font-light ml-3">
                    Provided assets
                  </h1>
                </div>{" "}
                <div className="w-full h-[15%]  flex flex-row items-center justify-start">
                  <IoMdCheckmark size={20} color="green" />
                  <h1 className="text-[#FFFFFF] text-[17px] font-light ml-3">
                    Readme file to get started
                  </h1>
                </div>{" "}
              </div>
              <div className="w-[15%] h-[8%] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[5px] mt-[23px] ">
                <h1 className="font-semibold text-[14px] text-[#FFFFFF]">
                  Download zip
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[40%] flex flex-col justify-start items-start overflow-y-scroll scrollbar-hide mt-8">
            <h1 className="text-[#FFFFFF] text-[25px] font-semibold ">
              Publications
            </h1>
            <div className="w-full h-[10%] flex flex-row justify-end items-center ">
              <h1 className="text-[#FFFFFF] text-[15px] font-light underline underline-offset-2  ml-3">
                Publish work
              </h1>
            </div>
            <div className="w-full min-h-[1px] bg-[#ffffff16] mt-2"></div>
            <div className="w-full h-[18%]  flex flex-row items-center justify-between mt-2">
              <div className="w-[50%] h-full  flex flex-row items-center justify-start">
                <Image
                  className="w-[10%] h-full "
                  width={30}
                  height={30}
                  src={"/Ellipse 17.svg"}
                  alt=""
                />
                <h1 className="text-[#FFFFFF] text-[17px] font-semibold ml-5">
                  Athul Vishnu &nbsp;
                  <span className="font-light">Submitted your work</span>
                </h1>
              </div>
              <div className="w-[15%] h-[70%] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[5px] ml-[20px] ">
                <h1 className="font-semibold text-[14px] text-[#FFFFFF]">
                  Visit Profile
                </h1>
              </div>
            </div>{" "}
            <div className="w-full min-h-[1px] bg-[#ffffff16] mt-4"></div>
            <div className="w-full h-[18%]  flex flex-row items-center justify-between mt-2">
              <div className="w-[50%] h-full flex flex-row items-center justify-start">
                <Image
                  className="w-[10%] h-full "
                  width={30}
                  height={30}
                  src={"/Ellipse 17.svg"}
                  alt=""
                />
                <h1 className="text-[#FFFFFF] text-[17px] font-semibold ml-5">
                  Athul Vishnu &nbsp;
                  <span className="font-light">Submitted your work</span>
                </h1>
              </div>
              <div className="w-[15%] h-[70%] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[5px] ml-[20px] ">
                <h1 className="font-semibold text-[14px] text-[#FFFFFF]">
                  Visit Profile
                </h1>
              </div>
            </div>{" "}
            <div className="w-full min-h-[1px] bg-[#ffffff16] mt-4"></div>
            <div className="w-full h-[18%]  flex flex-row items-center justify-between mt-2">
              <div className="w-[50%] h-full flex flex-row items-center justify-start">
                <Image
                  className="w-[10%] h-full "
                  width={30}
                  height={30}
                  src={"/Ellipse 17.svg"}
                  alt=""
                />
                <h1 className="text-[#FFFFFF] text-[17px] font-semibold ml-5">
                  Athul Vishnu &nbsp;
                  <span className="font-light">Submitted your work</span>
                </h1>
              </div>
              <div className="w-[15%] h-[70%] bg-gradient-to-r from-[#14D3DB] to-[#0057FF] flex flex-row items-center justify-center rounded-[5px] ml-[20px] ">
                <h1 className="font-semibold text-[14px] text-[#FFFFFF]">
                  Visit Profile
                </h1>
              </div>
            </div>
            <div className="w-full min-h-[1px] bg-[#ffffff16] mt-4 mb-6"></div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default PostDetails;
