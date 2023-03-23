import Sidebar from "@/component/Sidebar";
import React from "react";

function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center xl2000:px-[260px] xl1900:px-[250px] xl1700:px-[150px] xl1550:px-[90px] xl">
      <Sidebar />
      {children}
    </div>
  );
}

export default Mainlayout;
