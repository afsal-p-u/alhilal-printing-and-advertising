import React, { useState } from "react";

// all
// gift
import gift1 from '../assets/works/all/gift1.jpg'
import gift2 from '../assets/works/all/gift2.jpg'

// branding
import branding1 from '../assets/works/all/branding1.jpg'

// separate
// digital printing
import dg1 from '../assets/works/digital-printing/dg1.jpg'

// corporate printing
import cp1 from '../assets/works/corporate-printing/cp1.jpg'
import cp2 from '../assets/works/corporate-printing/cp2.jpg'

// offset-printing 
import offsetPrinting1 from '../assets/works/offset-printing/1.jpg'
import op2 from '../assets/works/offset-printing/op2.jpg'

const Works = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    {
      label: "All",
    },
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
    "All": [
      offsetPrinting1, gift1, branding1, cp1, dg1, op2, gift2, cp2,
    ],
    "Offset Printing": [
      offsetPrinting1, op2,
    ],
    "Digital Printing": [
      dg1,
    ],
    "Large Format Printing": [
    ],
    "Corporate Printing": [
      cp1, cp2,
    ],
    "Acrylic & Metal Engraving": [
    ],
    "Foam Board & Forex Board": [
    ],
    "Crystals, Trophies & Mementos": [
      
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
        {/* <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Recent Works
        </h2> */}

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
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 ">
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
