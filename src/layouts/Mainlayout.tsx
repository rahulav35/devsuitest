import Sidebar from "@/component/Sidebar";
import React from "react";

function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <Sidebar />
      {children}
    </div>
  );
}

export default Mainlayout;
