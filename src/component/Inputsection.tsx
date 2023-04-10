import React from 'react'

function Inputsection() {
  return (
    
    <div className="h-[55px] w-[100%] border-t-[2px] border-[#ffffff18] flex justify-center items-center bg-[#121212] rounded-b-2xl ">
    <form className="h-[80%] w-[95%] flex justify-between items-center border-[2px] border-[#ffffff18] rounded-full bg-[#12121283]  "> 
       <input  className='h-[100%] w-[85%] text-white text-[12px] pl-10 box-border focus:outline-none bg-[#12121283]  ' type="text" placeholder='messages' />
    <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-[#404040] mr-1"></div> 
     </form>

 </div>
  )
}

export default Inputsection