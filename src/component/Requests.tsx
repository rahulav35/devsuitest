import React from 'react'

function Requests() {
  return (
    <div className="h-[50px] w-[100%] flex items-center justify-between  my-2">
    <div className="h-[50px] w-[70%] flex justify-evenly items-center ">
      <div className="h-[38px] w-[38px] rounded-full border-[2px] border-blue-800"></div>
      <div className="h-[100%] w-[70%] flex flex-col justify-evenly items-start  -ml-5">
        <span className="text-lg text-white font-medium ">Pranav </span>
        <span className="text-xs text-white font-normal">
          {" "}
          BlockChain Developer
        </span>
      </div>
    </div>
    <div className="h-[35px] w-[110px] rounded-[8px] flex items-center justify-center bg-[#404040] mr-3 ">
        <h1 className=" text-sm text-white">Accept </h1>
     
    </div>

<img className='h-[20px] w-[20px] mr-[25px]' src="/x.svg" alt="" />    
  </div>
  )
}

export default Requests