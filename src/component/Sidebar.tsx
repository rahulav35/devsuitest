import { sidebarlinks } from "@/constants/links";
import { useRouter } from "next/router";
import React from "react";
import Sidebaritems from "./Sidebaritems";
import { useAppContext } from "@/contexts/Appcontext";

function Sidebar() {
  const {user}= useAppContext()
  const router = useRouter();
  return (
    <div className="h-[86%] min-w-[240px] flex flex-col items-center justify-between border-[2px] border-[#ffffff1b] bg-[#121212d3] rounded-2xl ml-16  ">
      <div className="h-[62%] w-[100%] flex flex-col items-start justify-evenly text-gray-300 mt-5 ">
        {sidebarlinks.map((item, i) => (
          <Sidebaritems
            key={i}
            text={item.label}
            image={router.pathname === item.path ? item.activeicon : item.icon}
            active={router.pathname === item.path}
            onClick={() => router.push(item.path)}
          />
        ))}
      </div>
      <div className="h-[70px] w-[100%] flex items-center justify-start mb-5 ">
        <div className="h-[50px] w-[50px] rounded-full border-2 border-white ml-9"></div>
        <span className="ml-2 text-white font-semibold text-sm">{user.name??"#####"}</span>
      </div>
    </div>
  );
}

export default Sidebar;
