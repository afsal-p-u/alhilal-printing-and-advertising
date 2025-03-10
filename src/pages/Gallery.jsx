import React, { useState } from "react";

// all
import i1 from "../assets/gallery/all/1.jpg";
import i2 from "../assets/gallery/all/2.jpg";
import i3 from "../assets/gallery/all/3.jpg";
import i4 from "../assets/gallery/all/4.jpg";
import i5 from "../assets/gallery/all/5.jpg";
import i6 from "../assets/gallery/all/6.jpg";
import i7 from "../assets/gallery/all/7.jpg";
import i8 from "../assets/gallery/all/8.jpg";
import i9 from "../assets/gallery/all/9.jpg";
import i10 from "../assets/gallery/all/10.jpg";
import i11 from "../assets/gallery/all/11.jpg";
import i12 from "../assets/gallery/all/12.jpg";

import i13 from "../assets/gallery/all/13.jpg";
import i14 from "../assets/gallery/all/14.jpg";
import i15 from "../assets/gallery/all/15.jpg";
import i16 from "../assets/gallery/all/16.jpg";
import i17 from "../assets/gallery/all/17.jpg";
import i18 from "../assets/gallery/all/18.jpg";
import i19 from "../assets/gallery/all/19.jpg";
import i20 from "../assets/gallery/all/20.jpg";
import i21 from "../assets/gallery/all/21.jpg";
import i22 from "../assets/gallery/all/22.jpg";
import i23 from "../assets/gallery/all/23.jpg";
import i24 from "../assets/gallery/all/24.jpg";

const Gallery = () => {
  const [moreImages, setMoreImages] = useState(false)
  // State to track the selected category
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const categories = [
  //   {
  //     label: "All",
  //   },
  //   {
  //     label: "Offset Printing",
  //   },
  //   {
  //     label: "Digital Printing",
  //   },
  //   // {
  //   //   label: "Large Format Printing",
  //   // },
  //   {
  //     label: "Corporate Printing",
  //   },
  //   // {
  //   //   label: "Acrylic & Metal Engraving",
  //   // },
  //   // {
  //   //   label: "Foam Board & Forex Board",
  //   // },
  //   // {
  //   //   label: "Crystals, Trophies & Mementos",
  //   // },
  // ];

  // Array of images for each category
  // const images = {
  //   "All": [
  //     offsetPrinting1, gift1, branding1, cp1, dg1, op2, gift2, cp2,
  //   ],
  //   "Offset Printing": [
  //     offsetPrinting1, op2,
  //   ],
  //   "Digital Printing": [
  //     dg1,
  //   ],
  //   // "Large Format Printing": [
  //   // ],
  //   "Corporate Printing": [
  //     cp1, cp2,
  //   ],
  //   // "Acrylic & Metal Engraving": [
  //   // ],
  //   // "Foam Board & Forex Board": [
  //   // ],
  //   // "Crystals, Trophies & Mementos": [
  //   // ],
  // };

  const imagesMain = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12
  ];

  const exploreMore = [
    i13,
    i14,
    i15,
    i16,
    i17,
    i18,
    i19,
    i20,
    i21,
    i22,
    i23,
    i24
  ];

  const handleMoreImage = () => {
    setMoreImages(true);
  }

  // Function to handle category change
  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id="gallery">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Gallery
        </h2>

        {/* Category Buttons */}
        {/* <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {imagesMain.map((item, index) => (
            <button
              key={index}
              type="button"
              // onClick={() => handleCategoryChange(item.label)}
              className={`text-base font-medium px-5 py-2.5 text-center me-3 mb-3 rounded-full
                ${selectedCategory === category.label
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-900 hover:bg-blue-700 hover:text-white"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div> */}

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5">
          {imagesMain?.map((image, index) => (
            <div
              key={index}
              className="h-[200px] sm:h-[300px] overflow-hidden"
            >
              <img
                className="h-full w-full rounded-lg object-cover"
                src={image}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>

        {!moreImages && (
          <div className="flex justify-center mt-5 w-full">
            <button 
              className="text-sm font-medium dark:text-gray-400 underline cursor-pointer"
              onClick={handleMoreImage}
            >
              Explore more...
            </button>
          </div>
        )}

        {moreImages && (
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-5">
            {exploreMore?.map((image, index) => (
              <div
                key={index}
                className="h-[200px] sm:h-[300px] w-full overflow-hidden"
              >
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={image}
                  alt={`image-${index}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
