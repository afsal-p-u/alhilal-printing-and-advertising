import React, { useState } from "react";

import image1 from '../assets/bag.jpg'
import offsetPrinting1 from '../assets/Offset Printing/1.jpg'

const Works = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("Offset Printing");

  const categories = [
    {
      label: "Offset Printing",
    },
    {
      label: "Digital Printing",
    },
    {
      label: "Large Format Printing",
    },
    {
      label: "Corporate Printing",
    },
    {
      label: "Acrylic & Metal Engraving",
    },
    {
      label: "Foam Board & Forex Board",
    },
    {
      label: "Crystals, Trophies & Mementos",
    },
  ];

  // Array of images for each category
  const images = {
    "Offset Printing": [
      offsetPrinting1,
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    ],
    "Digital Printing": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    ],
    "Large Format Printing": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    ],
    "Corporate Printing": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    ],
    "Acrylic & Metal Engraving": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    ],
    "Foam Board & Forex Board": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    ],
    "Crystals, Trophies & Mementos": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    ],
  };

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id="works">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Recent Works
        </h2>

        {/* Category Buttons */}
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleCategoryChange(category.label)}
              className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full
                ${selectedCategory === category.label
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-900 hover:bg-blue-700 hover:text-white"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {images[selectedCategory].map((imageUrl, index) => (
            <div key={index} className="h-[350px] w-full">
              <img
                className="h-full max-w-full w-full rounded-lg object-cover"
                src={imageUrl}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
