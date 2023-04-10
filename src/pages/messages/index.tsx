import Conversations from '@/component/Conversations'
import InboxMessages from '@/component/InboxMessages'
import Inputsection from '@/component/Inputsection'
import Mainlayout from '@/layouts/Mainlayout'
import React from 'react'

function Messages() {
  return (
    <Mainlayout> 
      <div className="h-[100vh] w-[100vw] flex items-center justify-center ">
        <div className="h-[90%] w-[95%] flex justify-evenly items-center bg-[#070707] rounded-2xl ">
            <section className='min-h-[96%] w-[280px] bg-[#121212] rounded-xl flex flex-col justify-items-start items-center '>
                <h1 className="text-2xl text-white font-medium my-2">Messages</h1>
                <div className="h-[40px] w-[90%] flex items-center justify-between border-[2px] border-[#2d2b2b] rounded-3xl mt-2 ">
                <input
                  className="text-xs text-white font-normal h-[100%] w-[80%] rounded-3xl pl-4 box-border  bg-[#12121277] focus:outline-none"
                  type="text"
                  placeholder="Search here..."
                />
                <img className="h-[30px] w-[30px] mr-1"
                 
                 src={"/searchh.svg"}
                 alt=""/>  
              </div>
             <div className="min-h-[60px] w-[100%]  flex flex-col justify-start items-center">
             <Conversations/>
              <Conversations/>
              <Conversations/>
              <Conversations/>
             
              
             </div>

              
                 </section>




                 <section className='min-h-[96%] w-[590px] rounded-2xl bg-[#121212] flex flex-col items-center justify-between'> 
     <div className="h-[55px] w-[100%] border-b-[2px] border-[#ffffff18] flex justify-start items-center">

           <div className="h-[38px] w-[38px] rounded-full border-[2px] border-blue-800 ml-10"></div>
        
           <span className="text-[16px] text-white font-medium ml-2">
            Athul Vishnu{" "}
           </span>

             <div className="h-[8px] w-[8px] rounded-full bg-[#06C630] ml-2"></div>

     </div>

     <div className="h-[470px] w-[100%] bg-[#121212] 
     flex flex-col justify-center items-center">
      
      
      <InboxMessages iscurrentuser={true}/>
      <InboxMessages iscurrentuser={false}/>


     </div>

     

            <Inputsection/>        
                    
                    </section>





</div>

        
        
        
        </div>
        
        
        </Mainlayout>
  )
}

export default Messages