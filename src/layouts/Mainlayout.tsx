import Sidebar from "@/component/Sidebar";
import React from "react";

function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center lg1200:pl-[3%] lg1300:pl-[4%] xl1400:pl-[4%] xl1500:pl-[5%] xl1600:pl-[6%] xl xl1900:pl-[7%] xl2200:pl-[7%] xl2500:pl-[8%] xl3050:pl-[9%] ">
      <Sidebar />
      {children}
    </div>
  );
}

export default Mainlayout;
