import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Contact Us
        </h2>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Contact on WhatsApp
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Reach us instantly on WhatsApp.
            </p>
            <a
              href="https://wa.me/11234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white 
              bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 
              dark:bg-green-600 dark:hover:bg-green-700"
            >
              Message Us on WhatsApp
            </a>
          </div>

          {/* Gmail */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail"
                className="w-10 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Email Us on Gmail
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Drop us an email and we’ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white 
              bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 
              dark:bg-red-600 dark:hover:bg-red-700"
            >
              Email Us
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3l18 18M9 4h6M9 8h6m-3 4h3m-3 4h3m-3 4h3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Call Us
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              Reach us by phone anytime.
            </p>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white 
              bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 
              dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
