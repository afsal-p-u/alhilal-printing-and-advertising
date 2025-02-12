import React from "react";

const Location = () => {
  return (
    <div className="w-[100%] h-[80vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230817.59022900075!2d55.38146198757921!3d25.320163437407416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1738602544116!5m2!1sen!2sin"
        //   width="600"
        //   height="450"
          className="w-full h-full"
        //   style="border:0;"
        //   allowfullscreen=""
        //   loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default Location;
