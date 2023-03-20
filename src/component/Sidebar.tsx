import { sidebarlinks } from "@/constants/links";
import { useRouter } from "next/router";
import React from "react";
import Sidebaritems from "./Sidebaritems";

function Sidebar() {
  const router = useRouter();
  return (
    <div className="h-[86%] min-w-[240px] flex flex-col items-center justify-between border-[2px] border-[#ffffff1b] bg-[#121212d3] rounded-2xl ml-14  ">
      <div className="h-[62%] w-[100%] flex flex-col items-start justify-evenly  mt-5 ">
        {sidebarlinks.map((item, i) => (
          <Sidebaritems
            key={i}
            text={item.label}
            image={item.icon}
            onClick={() => router.push(item.path)}
          />
        ))}
      </div>
      <div className="h-[70px] w-[100%] flex items-center justify-start mb-5 ">
        <div className="h-[50px] w-[50px] rounded-full border-2 border-white ml-9"></div>
        <span className="ml-2 text-white font-semibold text-sm">User</span>
      </div>
    </div>
  );
}

export default Sidebar;
