import React from "react";
import LeftSlider from "../LEFTSLIDER/LeftSlider";

const Footer = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-800 text-black dark:text-white pt-10 pb-10">
      <h1 className="text-3xl text-white font-semibold text-center">
        Developed and Designed By
      </h1>
      <h1 className="text-5xl text-center font-bold">
        <span className="text-white">Zubayer</span>{" "}
        <span className="text-sky-600">Farazi</span>
      </h1>
      <LeftSlider></LeftSlider>
    </div>
  );
};

export default Footer;
