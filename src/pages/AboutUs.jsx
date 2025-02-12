import React from "react";
import img1 from "../assets/img1.jpg";

const AboutUs = () => {
  return (
    <div className="px-[100px] py-10 bg-[#111827]">
      <h3 className="font-semibold text-center text-2xl mb-10 text-white">
        About Us
      </h3>
      <div className="grid grid-cols-2 gap-10">
        <div className="">
            <img src={img1} alt="" />
        </div>
        <div className="flex items-center ">
          <p className="text-gray-400 font-medium">
            The BURJ CEO Awards a.k.a. “The Oscars” of the business world, is an
            esteemed annual global business award ceremony hosted in different
            countries that acknowledges remarkable achievements and
            contributions in business and entrepreneurship. The business award
            Gala was first launched in 2016 in Washington, D.C., and since then,
            it has been held in London, Shenzhen, Mauritius, and Dubai. Discover
            the art of precision with our team of expert model makers in Dubai.
            Specializing in 3D printing services, we bring your visions to life
            with impeccable detail. As a leading trophy shop in Dubai, we craft
            awards and models that symbolize excellence and innovation.
            Experience craftsmanship at its finest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
