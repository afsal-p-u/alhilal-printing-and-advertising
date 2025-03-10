import aboutUs from "../assets/about-us/about-us.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id="about">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1: Image */}
          <div className="flex justify-center items-center h-[70vh] md:h-[85vh] sm:h-[75vh]">
            <img
              src={aboutUs}
              alt="About Us"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Column 2: Description */}
          <div className="text-left flex flex-col  justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              With over 25 years of experience, *Al Hilal Printing & Advertising* is
              a trusted leader in the printing and branding industry. We specialize
              in *offset printing*, **digital printing**, and **large-format printing**,
              delivering high-quality results for both small and large-scale
              projects.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              In addition to printing, we offer custom-branded *corporate
              gifts* and *uniforms*, helping businesses strengthen their brand
              identity. Our focus is on providing personalized service and top-notch
              quality, ensuring that every project is completed to your
              satisfaction.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              At *Al Hilal*, we are committed to helping businesses
              stand out with professional and innovative printing solutions, backed
              by years of expertise and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
