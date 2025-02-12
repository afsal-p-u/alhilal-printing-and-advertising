import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const InfoMenu = () => {
  return (
    <div className='px-[100px] py-3 flex justify-between items-center bg-[#374151] border border-gray-500'>
      <p className='font-medium text-sm text-white'>Al Hilal Printing & Advertising</p>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
            <CgMail className='text-xl text-red-500' />
            <p className='text-sm text-white'>user@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
            <IoLogoWhatsapp className='text-lg text-green-500' />
            <p className='text-xs text-white'>050 169 7888</p>
        </div>
        <div className="flex items-center gap-2">
            <IoLocationOutline className='text-lg text-blue-500' />
            <p className='text-xs text-white'>UAE</p>
        </div>
      </div>
    </div>
  )
}

export default InfoMenu
