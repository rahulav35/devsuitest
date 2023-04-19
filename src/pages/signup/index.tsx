import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { HomeTrendDown } from "iconsax-react";
import { light } from "@mui/material/styles/createPalette";
import AccountCircle from '@mui/icons-material/AccountCircle';


function Signup() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex flex-col h-screen bg-BgImg  items-center justify-center ">
        <div className="flex flex-col h-screen  w-full items-center justify-center   bg-black-low-opacity backdrop-blur-[50px] ">
          <img className="h-[120px] w-[130px]" src="/Devsuilogo.svg" alt="" />
          <h1 className="text-white font-averia font-semibold text-5xl mt-5  ">
            DevsUI
          </h1>

          <h1 className="text-white font-averia font-semibold text-xl mt-3 tracking-wider ">
            Create,Connect,Share
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-3xl tracking-tight font-averia text-white">
          Create Account
        </h1>

     <div className="h-[300px] w-[300px] flex flex-col justify-evenly items-center ">
     \
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <img className="h-[20px] w-[20px] mx-3" src="/user.svg" alt="" />
        <TextField id="input-with-sx" label="Name" variant="standard" sx={{ borderBottom: "1px solid #ffffff"}} InputLabelProps={{sx:{color:"#ffffff", textTransform: "capitalize", }}}   InputProps={{
        style: {
          color: 'white', 
          borderBottomColor:'white'
        },
      }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <img className="h-[23px] w-[23px] mx-3" src="/useroctagon.svg" alt="" />
        <TextField id="input-with-sx" label="Username" variant="standard" sx={{ borderBottom: "1px solid #ffffff"}} InputLabelProps={{sx:{color:"#ffffff", textTransform: "capitalize", }}}   InputProps={{
        style: {
          color: 'white', 
          borderBottomColor:'white'
        },
      }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  }}>
       <img className="h-[22px] w-[22px] mx-3 " src="/sms.svg" alt="" />
       <TextField id="input-with-sx" label="Email" variant="standard" sx={{ borderBottom: "1px solid #ffffff"}} InputLabelProps={{sx:{color:"#ffffff", textTransform: "capitalize", }}}   InputProps={{
        style: {
          color: 'white', 
          borderBottomColor:'white'
        },
      }} />
      </Box>
     </div>

     <h1 className="text-white text-sm font-averia mt-6 ">Create & Connect</h1>
     <div className="h-[1px] w-[150px] bg-white "></div>
     <div className="h-[2px] w-[450px] bg-[#ffffff25] my-8"></div>


     <div className="h-[130px] w-[300px]  flex flex-col justify-evenly items-center ">
      <h1 className=" h-[60px] w-[80%] text-yellow-400 text-xs text-center ">
      Already have an account ? you only need 
connect your wallet to signin
      </h1>
      <div className="h-[35px] w-[160px] flex justify-center items-center p-[2px] rounded-[10px] bg-gradient-to-r from-[#0057FF] via-[#14D3DB] to-[#14D3DB]">
        <div className="h-full w-full rounded-[8px] bg-[#000000] flex justify-evenly items-center shadow inset-full shadow-white ">
          <img className="h-[20px] w-[20px]" src="/wallet2.svg" alt="" />
          <h1 className="text-sm bg-gradient-to-r from-[#0576F6] via-[#14D3DB] to-[#14D3DB] bg-clip-text text-transparent " >Connect Wallet</h1>
        </div>
      </div>
     </div>


      </div>
      
    </div>
  );
}

export default Signup;
