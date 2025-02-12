import React from "react";
import img1 from "../assets/img1.jpg";
import { ServicesItems } from "../utils/ServicesInfo";

const Services = () => {
  return (
    <div className="px-[100px] py-10 bg-[#111827]">
      <h3 className="font-semibold text-center text-2xl mb-10 text-white">
        Services
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {ServicesItems?.map((item, i) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
        dark:bg-gray-800 dark:border-gray-700"
        key={i}
        >
          <a href="#">
            <img class="rounded-t-lg" src={img1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {item.heading}
              </h5>
            </a>
            <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            {/* <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
               dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a> */}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
