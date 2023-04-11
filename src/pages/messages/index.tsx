import Conversations from "@/component/Conversations";
import InboxMessages from "@/component/InboxMessages";
import Inputsection from "@/component/Inputsection";
import Mainlayout from "@/layouts/Mainlayout";
import Axios  from "../../config/AxioConfig";
import { Props } from "emoji-picker-react";
import { Message } from "iconsax-react";
import { type } from "os";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Messages() {
  const [messagetext, setmessageText] = useState<string>("");

  const [messageHandle, setMessageHandle] = useState<any[]>([]);

  function sendMessage(e: any) {
    e.preventDefault();
    if (messagetext.trim().length !== 0) {
      setMessageHandle([
        ...messageHandle,
        {
          id: (Math.random() * 1e18).toString(),
          message: messagetext,
        },
      ]);
      setmessageText("");
    }
  }

  async function fetchData() {
   try {
    const response = await Axios.get("/api/messages/940363293317053200")
    const data = await response.data
    // console.log(response)

    
   } catch (error) {
    
    console.log(error)
   }
  
  }

  useEffect(() => {
    
    // fetchData()
  }, [])
  

  return (
    <Mainlayout>
      <div className="h-[100vh] w-[100vw] flex items-center justify-center ">
        <div className="h-[90%] w-[95%] flex justify-evenly items-center bg-[#070707] rounded-2xl ">
          <section className="min-h-[96%] w-[280px] bg-[#121212] rounded-xl flex flex-col justify-items-start items-center ">
            <h1 className="text-2xl text-white font-medium my-2">Messages</h1>
            <div className="h-[40px] w-[90%] flex items-center justify-between border-[2px] border-[#2d2b2b] rounded-3xl mt-2 ">
              <input
                className="text-xs text-white font-normal h-[100%] w-[80%] rounded-3xl pl-4 box-border  bg-[#12121277] focus:outline-none"
                type="text"
                placeholder="Search here..."
              />
              <img
                className="h-[30px] w-[30px] mr-1"
                src={"/searchh.svg"}
                alt=""
              />
            </div>
            <div className="min-h-[60px] w-[100%]  flex flex-col justify-start items-center">
              <Conversations />
              <Conversations />
              <Conversations />
              <Conversations />
            </div>
          </section>

          <section className="min-h-[96%] w-[590px] rounded-2xl bg-[#121212] flex flex-col items-center justify-between">
            <div className="h-[55px] w-[100%] border-b-[2px] border-[#ffffff18] flex justify-start items-center">
              <div className="h-[38px] w-[38px] rounded-full border-[2px] border-blue-800 ml-10"></div>

              <span className="text-[16px] text-white font-medium ml-2">
                Athul Vishnu{" "}
              </span>

              <div className="h-[8px] w-[8px] rounded-full bg-[#06C630] ml-2"></div>
            </div>

            <div
              className="h-[470px] w-[100%] bg-[#121212] overflow-y-scroll scrollbar-hide
     flex flex-col-reverse justify-start items-center"
            >





<InfiniteScroll className=" w-[45vw] flex flex-col relative "
  dataLength={messageHandle.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={null}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={()=> null}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={null}
  releaseToRefreshContent={null}
>
{messageHandle.map((message, i) => {
                return (
                  <InboxMessages
                    iscurrentuser={i % 2 === 0 ? true : false}
                    message={message.message}
                  />
                );
              })}
</InfiniteScroll>











              
            </div>

            <div className="h-[55px] w-[100%] border-t-[2px] border-[#ffffff18] flex justify-center items-center bg-[#121212] rounded-b-2xl ">
              <form
                onSubmit={sendMessage}
                className="h-[80%] w-[95%] flex justify-between items-center border-[2px] border-[#ffffff18] rounded-full bg-[#12121283]  "
              >
                <input
                  onChange={(e) => setmessageText(e.target.value)}
                  className="h-[100%] w-[85%] text-white text-[12px] pl-10 box-border focus:outline-none bg-[#12121283] 
        "
                  type="text"
                  placeholder="messages"
                  value={messagetext}
                />

                <div
                  onClick={sendMessage}
                  className="h-[35px] w-[35px] rounded-full flex justify-center items-center bg-[#404040] mr-1"
                ></div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Messages;
