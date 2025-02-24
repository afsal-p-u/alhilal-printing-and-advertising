import React from "react";

const Location = () => {
  return (
    <div className="w-[100%] h-[80vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4642201522634!2d55.3885145!3d25.355753800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a33d0404dd1%3A0xdbb0a605822839c1!2sAL%20HILAL%20Stamps%2C%20Offset%2C%20Digital%20%26%20Advertising%20Services.!5e0!3m2!1sen!2sin!4v1740418231042!5m2!1sen!2sin"
        className="w-full h-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
