import React from 'react'
import styles from "../styles/Home.module.css";

type props ={
    iscurrentuser : boolean
}

function InboxMessages({iscurrentuser}:props) {
  return (
    <div className={` ${iscurrentuser? "self-start" : "self-end"} h-[75px] w-[270px] border-[2px] border-[#ffffff1a] rounded-xl bg-[#1D1D1D] flex justify-start items-center relative mx-8 my-4    `}>
        {/* <div className="h-[30px] w-[30px] rounded-full border-2 border-blue-800 ml-2 "></div> */}
        <div data-usertype={iscurrentuser} className={styles.chatboxtip}></div>
        <div data-usertype={iscurrentuser} className={styles.innerchatboxtip}></div>
    </div>
  )
}

export default InboxMessages