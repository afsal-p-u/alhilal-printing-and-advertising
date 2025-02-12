import React from "react";
import { InfoMenu, Navbar } from "../components";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Home = () => {
  return (
    <div>
      {/* <InfoMenu /> */}
      <Navbar />

      <div className="bg-[#111827] min-h-[50vh] flex items-center justify-center flex-col">
        <div className="w-full h-full">
          <img src={img2} alt="" className="w-full h-full" />
        </div>

        <div className="absolute">
          <p className="text-center text-3xl mb-2 text-white uppercase font-semibold">
            Al Hilal Printing & Advertising
          </p>
          <p className="text-center text-sm text-gray-500">
            CREATIVE & PRINTING SOLUTIONS ON DEMAND FOR YOUR BUSINESS
          </p>
          <p className="text-sm font-medium text-center mt-2 text-white">Delivery Across UAE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
