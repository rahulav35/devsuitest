import Addpost from "@/component/Addpost";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

function Index() {
  return (
    <Mainlayout>
      <div className=" h-full w-full text-white flex justify-center items-center">
        <Addpost />
      </div>
    </Mainlayout>
  );
}

export default Index;
