/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@/contexts/Appcontext";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Addphotos from "./Addphotos";
import Addpost from "./Addpost";
import Jobrole from "./Jobrole";
import { Checkbox } from "@mui/material";
import pink from "@mui/material/colors/pink";
import Axios  from "@/config/AxioConfig";


function Createpost() {
  const { setIsCreateModelVisible } = useAppContext();
  const[checked,setChecked] = useState(false);
  const { postType } = useAppContext();
  const [roleselect, setRoleselect] = useState<any[]>([]);
  function role(post: string) {
    if (!roleselect.includes(post)) {
      setRoleselect([...roleselect, post]);
    } else {
      setRoleselect(roleselect.filter((item) => item !== post));
    }
  }


  const [img, setImg] = useState<any>()
  const [desc,setDesc] = useState("")

const AddPost=async() => {
  const response = await Axios.post("/api/post",{

    postId:(Math.random()*1e18).toString(),
    userId: (Math.random()*1e18).toString(),
    desc:desc,
    img:img,
    likes:[],
    comments:[]

  })
  const data = await response.data;
  console.log(data)
  
}

  if (postType === "ordinary") {
    return (
      <div className=" h-[100vh] w-[100vw] text-white flex justify-center items-center fixed top-0 left-0">
        <div className="h-[60%] w-[32%] rounded-3xl bg-[#121212]  border-[2px] border-[#2d2b2b] flex flex-col justify-start items-center mr-28 mt-8">
          <div className="h-[40px] w-[100%] flex justify-center items-center relative ">
            <h1 className="text-white text-lg font-medium    m-auto ">
              Create Post
            </h1>
            <img
              className="h-[20px] w-[20px] mr-3"
              onClick={() => setIsCreateModelVisible(false)}
              src="x.svg"
              alt=""
            />
          </div>
          <div className="bg-[#ffffff4f] w-[100%] h-[1px]"></div>
          <div className="h-[60px] w-[100%] flex justify-start items-center ml-10">
            <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800"></div>

            <span className="text-md text-white font-medium ml-3 ">
              Amal Raj{" "}
            </span>
          </div>
          <textarea
          onChange={(e)=>setDesc(e.target.value)}
            style={{ resize: "none" }}
            className="bg-transparent mt-2 text-sm text-white focus:outline-none ml-3  "
            name=""
            id=""
            cols={48}
            rows={10}
            placeholder="Share your thoughts"
          ></textarea>
          <div className="h-[49px] w-[90%] rounded-3xl  border-[3px] border-[#2d2b2b] bg-[#121212f8] flex items-center justify-between mt-3 ">
            <h1 className="text-sm text-[#ffffff96] ml-3 ">Add your post</h1>
            <div className="h-[45px] w-[230px] flex items-center justify-evenly ">
              <Addpost height={25} width={25} Image="post.svg" />
              <Addpost height={25} width={25} Image="gallery.svg" />
              <Addpost height={25} width={25} Image="work.svg" />
              <Addpost height={22} width={22} Image="Event.svg" />
              <div className="h-[33px] w-[33px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0057FF] to-[#14d4db]">
                <img className="h-[18px] w-[18px]" src="Vector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (postType === "image") {
    return (
      <div className=" h-[100vh] w-[100vw] text-white flex justify-center items-center fixed top-0 left-0">
        <div className="h-[60%] w-[32%] rounded-3xl bg-[#121212]  border-[2px] border-[#2d2b2b] flex flex-col justify-start items-center mr-28 mt-8">
          <div className="h-[40px] w-[100%] flex justify-center items-center relative ">
            <h1 className="text-white text-lg font-medium    m-auto ">
              Create Post
            </h1>
            <img
              className="h-[20px] w-[20px] mr-3"
              onClick={() => setIsCreateModelVisible(false)}
              src="x.svg"
              alt=""
            />
          </div>
          <div className="bg-[#ffffff4f] w-[100%] h-[1px]"></div>
          <div className="h-[60px] w-[100%] flex justify-start items-center ml-10">
            <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800"></div>

            <span className="text-md text-white font-medium ml-3 ">
              Amal Raj{" "}
            </span>
          </div>
          <textarea
           onChange={(e)=>setDesc(e.target.value)}
            style={{ resize: "none" }}
            className="bg-transparent mt-2 text-sm text-white focus:outline-none ml-3  "
            name=""
            id=""
            cols={48}
            rows={2}
            placeholder="Share your thoughts"
          ></textarea>
          <Addphotos />

          <div className="flex items-center my-2 -ml-[60%]">
          <Checkbox
  checked={checked}
  onChange={(e)=> {
    setChecked(e.target.checked)
  }}
 
  inputProps={{ 'aria-label': 'controlled' }}
/>
            <label
              htmlFor="default-checkbox"
              className="ml-4 text-sm  text-white"
            >
              Share as work
            </label>
          </div>
          <div className="h-[49px] w-[90%] rounded-3xl  border-[3px] border-[#2d2b2b] bg-[#121212f8] flex items-center justify-between mt-3 ">
            <h1 className="text-sm text-[#ffffff96] ml-3 ">Add your post</h1>
            <div className="h-[45px] w-[230px] flex items-center justify-evenly ">
              <Addpost height={25} width={25} Image="post.svg" />
              <Addpost height={25} width={25} Image="gallery.svg" />
              <Addpost height={25} width={25} Image="work.svg" />
              <Addpost height={22} width={22} Image="Event.svg" />
              <div className="h-[33px] w-[33px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0057FF] to-[#14d4db]">
                <img className="h-[18px] w-[18px]" src="Vector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (postType === "work") {
    return (
      <div className=" h-[100vh] w-[100vw] text-white flex justify-center items-center fixed top-0 left-0">
        <div className="h-[60%] w-[32%] rounded-3xl bg-[#121212]  border-[2px] border-[#2d2b2b] flex flex-col justify-between items-center mr-28 mt-8">
          <div className="h-[40px] w-[100%] flex justify-center items-center relative ">
            <h1 className="text-white text-lg font-medium    m-auto ">
              Create Post
            </h1>
            <img
              className="h-[20px] w-[20px] mr-3"
              onClick={() => setIsCreateModelVisible(false)}
              src="x.svg"
              alt=""
            />
          </div>
          <div className="bg-[#ffffff4f] w-[100%] h-[1px] -mt-8"></div>
          <div className="h-[60px] w-[100%] flex justify-start items-center ml-10 -mt-8">
            <div className="h-[40px] w-[40px] rounded-full border-[2px] border-blue-800"></div>

            <span className="text-md text-white font-medium ml-3 ">
              Amal Raj{" "}
            </span>
          </div>
          <input onChange={(e)=>setDesc(e.target.value)} className="h-[20px] w-[90%] bg-transparent text-xs  text-[#ffffff96]  my-1 tracking-wider -mt-8 focus:outline-none" type="text" placeholder="Details about the job" />
          <Jobrole
            classname=" z-[100] absolute top-[38%] left-[32%]"
            roleselect={roleselect}
            toggle={role}
          />

          <Addphotos />

          <div className="h-[49px] w-[90%] rounded-3xl  border-[2px] border-[#2d2b2b] bg-[#121212f8] flex items-center justify-between mb-2 ">
            <h1 className="text-sm text-[#ffffff96] ml-3 ">Add your post</h1>
            <div className="h-[45px] w-[230px] flex items-center justify-evenly ">
              <Addpost height={25} width={25} Image="post.svg" />
              <Addpost height={25} width={25} Image="gallery.svg" />
              <Addpost height={25} width={25} Image="work.svg" />
              <Addpost height={22} width={22} Image="Event.svg" />
              <div className="h-[33px] w-[33px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0057FF] to-[#14d4db]">
                <img className="h-[18px] w-[18px]" src="Vector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Createpost;
