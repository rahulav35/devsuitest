/* eslint-disable @next/next/no-img-element */
import About from "../../component/About";
import Createpost from "../../component/Createpost";
import Event from "../../component/Event";
import Post from "../../component/Post";
import { useEffect } from "react";

import Suggetions from "../../component/Suggetions";
import Warning from "../../component/Warning";
import { useAppContext } from "../../contexts/Appcontext";
import Mainlayout from "../../layouts/Mainlayout";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

import React, {
  Children,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import AXIOS from "../../config/AxioConfig";
import { useRouter } from "next/router";

function Index() {
  const { isCreateModelVisible, setIsCreateModelVisible, user } =
    useAppContext();
  const { postType, setPostType } = useAppContext();
  const [postHandle, setPostHandle] = useState<any[]>([]);

  const router = useRouter();

  async function fetchData() {
    try {
      const response = await AXIOS.get("/api/posts");
      const data = await response.data;
      setPostHandle(data);
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      // If user length is zero, redirect to "/"
      router.push("/");
    } else {
      fetchData();
    }
  }, []);

  return (
    <Mainlayout>
      <div className="h-[100vh] max-w-[1300px] flex justify-between items-center ml-5 overflow-hidden ">
        <Head>
          <title>DevsUi</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-[90%] w-[90%] rounded-lg flex items-center justify-start mt-5   ">
          <section className="h-[100vh] w-[63%] flex flex-col justify-start items-center rounded-lg box-border  overflow-y-scroll scrollbar-hide ">
            <div className="h-[105px] w-[100%] bg-[#121212] flex flex-col items-center justify-evenly rounded-lg ">
              <div className="h-[40px] w-[90%] flex items-center justify-between border-[2px] border-[#2d2b2b] rounded-3xl mt-2 ">
                <input
                  className="text-sm text-white font-normal h-[100%] w-[70%] rounded-3xl pl-4 box-border  bg-[#121212] focus:outline-none"
                  type="text"
                  placeholder="Search here..."
                />
                <Image
                  className="mr-1"
                  width={31}
                  height={31}
                  src={"/searchh.svg"}
                  alt=""
                />
              </div>
              <div className="h-[40px] w-[85%] flex items-center justify-between">
                <Event
                  image="/post.svg"
                  text="Post"
                  height={21}
                  width={21}
                  onClick={() => (
                    setIsCreateModelVisible(true), setPostType("ordinary")
                  )}
                />
                <Event
                  image="/gallery.svg"
                  text="Photos"
                  height={21}
                  width={21}
                  onClick={() => (
                    setIsCreateModelVisible(true), setPostType("image")
                  )}
                />
                <Event
                  image="/work.svg"
                  text="Work"
                  height={19}
                  width={19}
                  onClick={() => (
                    setIsCreateModelVisible(true), setPostType("work")
                  )}
                />
                <Event
                  image="/Event.svg"
                  text="Event"
                  height={16}
                  width={16}
                  onClick={() => (
                    setIsCreateModelVisible(true), setPostType("event")
                  )}
                />
              </div>
            </div>
            <div className="w-[100%] min-h-[80%]    flex flex-col items-center justify-start   ">
              <div className="w-full h-full flex flex-col items-center justify-s overflow-y-scroll scrollbar-hide mt-2   ">
            


                {postHandle.map((post, i) => {
                  return (
                    <Post
                      key={i}
                      image="logo.svg"
                      desc={post.desc}
                      comment={post.comments}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section className="h-[100%] w-[33%] flex flex-col justify-start items-center rounded-lg ml-3  ">
            <div className="min-h-[280px] w-[95%] flex items-center justify-evenly flex-col border-[2px] border-[#2d2b2b] rounded-lg bg-[#121212cf] ">
              <h1 className="text-[19px] font-medium text-white -ml-[47%]">
                Suggestions
              </h1>
              <Suggetions name="Athul Vishnu" position="UI/UX Designer" />
              <Suggetions
                name="Pranav Padmanabhan"
                position="Full Stalk Developer"
              />
              <Suggetions name="Rahul Mohan" position="Frontend Developer" />
              <h1 className="text-[#0057FF] text-xs ml-[85%] h-[20px] w-[30%] ">
                See More
              </h1>
            </div>
            <Warning />
            <About />
          </section>
        </div>
        {isCreateModelVisible && <Createpost />}
      </div>
    </Mainlayout>
  );
}

export default Index;
