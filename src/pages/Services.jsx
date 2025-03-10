import React from "react";
import { ServicesItems } from "../utils/ServicesInfo";

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id='services'>
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Services
        </h2>

        {/* Our Values Cards */}
        <div className="py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ServicesItems?.map((item, i) => (
            <div
              className="min-w-[240px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 
              dark:border-gray-700"
              key={i}
            >
              <a href="#">
                <img className="rounded-t-lg h-48 w-full" src={item.image} alt="" />
              </a>
              <div className="p-5">
                <a href="http://wa.me/971509454953" target="_blank">
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.heading}
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
