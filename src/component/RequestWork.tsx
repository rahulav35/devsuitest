import React from 'react'
import Requests from './Requests'

function RequestWork() {
  return (
    <div className="min-h-[300px] w-[100%] flex flex-col justify-start items-center overflow-y-scroll  ">
   <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
    <Requests/>
    <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
    <Requests/>
    <div className="h-[1px] w-[63%] bg-[#2d2b2b]  ml-12 my-2"></div>
  </div>
  )
}

export default RequestWork