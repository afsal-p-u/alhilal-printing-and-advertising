// import React from "react";
// import img1 from "../assets/img1.jpg";

// const AboutUs = () => {
//   return (
//     <div className="px-[100px] py-10 bg-[#111827]">
//       <h3 className="font-semibold text-center text-2xl mb-10 text-white">
//         About Us
//       </h3>
//       <div className="grid grid-cols-2 gap-10">
//         <div className="">
//             <img src={img1} alt="" />
//         </div>
//         <div className="flex items-center ">
//           <p className="text-gray-400 font-medium">
//             The BURJ CEO Awards a.k.a. “The Oscars” of the business world, is an
//             esteemed annual global business award ceremony hosted in different
//             countries that acknowledges remarkable achievements and
//             contributions in business and entrepreneurship. The business award
//             Gala was first launched in 2016 in Washington, D.C., and since then,
//             it has been held in London, Shenzhen, Mauritius, and Dubai. Discover
//             the art of precision with our team of expert model makers in Dubai.
//             Specializing in 3D printing services, we bring your visions to life
//             with impeccable detail. As a leading trophy shop in Dubai, we craft
//             awards and models that symbolize excellence and innovation.
//             Experience craftsmanship at its finest.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id='about'>
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          About Us
        </h2>

        {/* About Us Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          We are a leading company in the field of printing and advertising. 
          With years of experience, we provide high-quality printing services and 
          creative advertising solutions to help your business stand out.
        </p>

        {/* Our Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l7 7 7-7M3 4l7 7 7-7" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our mission is to provide exceptional printing services that empower businesses to communicate their message effectively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v14l12-7-12-7z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We envision being the preferred choice for printing and advertising services, delivering unparalleled results to clients.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14l9-7-9-7z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We value quality, creativity, and customer satisfaction. Our services are designed to exceed expectations and provide lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
