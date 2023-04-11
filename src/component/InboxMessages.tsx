import React from 'react'
import styles from "../styles/Home.module.css";

type props ={
    iscurrentuser : boolean;
    message? :any;
}

function InboxMessages({iscurrentuser,message}:props) {
  
  return (
    <div className={` ${iscurrentuser? "self-start" : "self-end"} min-h-[50px] w-[270px] border-[2px] border-[#ffffff1a] ${iscurrentuser ? "rounded-r-3xl" : "rounded-l-3xl"} rounded-t-3xl bg-[#1D1D1D] flex justify-start items-center relative mx-8 my-4  p-3 box-border   `}>
        {/* <div className="h-[30px] w-[30px] rounded-full border-2 border-blue-800 ml-2 "></div> */}
        <p className='h-[100%] max-w-[100%] break-words rounded-2xl  text-white text-[12px] text-start' >{message} </p>
        {/* <div data-usertype={iscurrentuser} className={styles.chatboxtip}></div>
        <div data-usertype={iscurrentuser} className={styles.innerchatboxtip}></div> */}
    </div>
  )
}

export default InboxMessages