import React from "react";
import Button from "../BUTTON/Button";

const Card = ({ img, title, paragraph }) => {
  return (
    <div className="px-5 py-2 md:px-15">
      <div className="bg-gray-800 dark:bg-gray-800 max-w-sm lg:max-w-lg p-5 rounded-lg shadow-md ">
        <div className="flex justify-center items-center h-full">
          <img src={img} alt="" className="w-48" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center p-5 tracking-wider text-sky-600">
            {title}
          </h1>
          <p className="text-base text-white text-justify pb-5">{paragraph}</p>
        </div>
        <div className="flex items-center justify-center">
          <Button title={"Let's Talk"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
