import React from 'react'

function Conversations() {
  return (
    <div className='h-[60px] w-[95%] flex items-center justify-evenly rounded-xl bg-[#1D1D1D] border-[2px] border-[#ffffff23] my-2'>
       
        <div className="h-[46px] w-[46px] rounded-full border-[2px] border-blue-800"></div>
        <div className="h-[40px] w-[65%] flex flex-col justify-evenly items-start   ">
          <span className="text-[17px] text-white font-medium ">
            Amal Raj{" "}
            
          </span>
          <span className="text-[12px] text-white font-normal"> Hey there.....</span>
        </div>
     <div className=" h-[50px] w-[30px]  flex flex-col justify-end items-center ">
        <div className="h-[8px] w-[8px] bg-[#0133B1] rounded-full "></div>
        <span className='text-[10px] text-[#ffffff80] mt-2 '>1 min</span>
     </div>
      </div>
    
  )
}

export default Conversations