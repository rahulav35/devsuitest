import Jobrole from '@/component/Jobrole'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select';

function UploadInfo() {
    
    
        const [age, setAge] = React.useState('');
      
        const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value as string);
        };
      


   

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
      <h1 className="text-3xl tracking-tight font-averia text-white my-5 -ml-64">
          Upload Info
        </h1>
        <div className="h-[150px] w-[400px] bg-[#141414]  rounded-[6px] flex-col flex justify-center items-center relative mb-10">
       
        <div className="h-[40px] w-[40px] rounded-full  bg-[#2C2C2C] flex justify-center items-center ">
          <img className="h-[20px] w-[20px]" src="galleryadd.svg" alt="" />
        </div>
       
        <h3 className="text-[13px] text-[#ffffff79]">upload cover image </h3>
        <div className="h-[100px] w-[100px] rounded-full flex items-center justify-center bg-[#000000] absolute -bottom-[50px] left-[20px]">
        <div className='h-[90px] w-[90px] rounded-full flex justify-center items-center bg-[#141414]'>
            <h1 className="w-[90%] text-[11px] text-center text-[#ffffff79]">upload <br /> profile image</h1>
        </div>
      </div>
      </div>


      <div className='min-h-[40px] min-w-[100px]  flex-col flex items-start justify-evenly -mt-9 -ml-14 '>
        <h1 className="text-[15px] font-medium text-white ">Athul vishnu</h1>
        <h1 className="text-xs bg-gradient-to-r from-[#0057FF] to-[#14D3DB] bg-clip-text text-transparent">@vichu20</h1>
      </div>

      

      <textarea   style={{ resize: "none" }} className='bg-[#141414] h-[75px] w-[400px] rounded-[6px] border-[2px] border-[#ffffff07] focus:outline-none text-xs text-white p-2 box-border my-8 ' name="bio" id="" cols={30} rows={5} placeholder='Add Bio' ></textarea>

<div className="h-[50px] w-[400px] flex items-center justify-between">


<FormControl sx={{  minWidth: 100, minHeight:30  }}>
        <Select className='h-[50px] w-[190px] text-white rounded-lg border-[2px] border-[#ffffff11] focus:outline-none bg-[#141414]'
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem className='text-sm' value="">
            <em className='text-sm text-[#ffffff79]'>Select your role</em>
          </MenuItem>
          <MenuItem className='text-sm' value={10}> Developer</MenuItem>
          <MenuItem className='text-sm' value={20}>Designer</MenuItem>
          <MenuItem className='text-sm' value={30}>Both</MenuItem>
        </Select>
       
      </FormControl>
      <input className='h-[50px] w-[190px] rounded-lg bg-[#141414] border-[2px] border-[#ffffff11] text-[#ffffff79] text-sm p-2 box-border' type="date" />

</div>
<input className='h-[50px] w-[400px] rounded-lg text-xs text-white p-2 box-border bg-[#141414] border-[2px] border-[#ffffff11] my-8 focus:outline-none' type="text" placeholder='Job Position' />
<button className='h-[45px] w-[130px] flex items-center justify-center bg-gradient-to-r from-[#14D3DB] via-[#4179e9] to-[#0057FF] rounded-lg mb-10 text-[15px] text-white font-medium '> Upload </button>
    </div>
    </div>
  )
}

export default UploadInfo


