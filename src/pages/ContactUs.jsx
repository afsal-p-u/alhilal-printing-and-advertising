import React from "react";
import { CgMail } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="px-[100px] py-10 bg-[#111827]">
      <h3 className="font-semibold text-center text-2xl mb-10 text-white">
        Contact Us
      </h3>

      <div className="grid grid-cols-3 gap-5">
        <div className="cursor-pointer flex items-center gap-2 px-5 py-4 rounded-md dark:bg-gray-800 border border-gray-700 shadow-sm">
          <IoLogoWhatsapp className="text-2xl text-green-500" />
          <p className="text-white">+382932842389</p>
        </div>
        <div className="cursor-pointer flex items-center gap-2 px-5 py-4 rounded-md dark:bg-gray-800 border border-gray-700 shadow-sm">
          <CgMail className="text-2xl text-red-500" />
          <p className="text-white">afsal@gmail.com</p>
        </div>
        <div className="cursor-pointer flex items-center gap-2 px-5 py-4 rounded-md dark:bg-gray-800 border border-gray-700 shadow-sm">
          <FaInstagram className="text-2xl text-red-500" />
          <p className="text-white">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
