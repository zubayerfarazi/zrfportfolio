import React from "react";
import Button from "../BUTTON/Button";

const Card = ({ img, title, paragraph }) => {
  return (
    <div className="min-w-[90%] md:min-w-[45%] lg:min-w-78 bg-gray-800 rounded-2xl">
      <div className="bg-gray-700 flex justify-center items-center p-4 rounded-t-2xl">
        <img src={img} alt={title} className="w-24 md:w-32 lg:w-40 object-cover" />
      </div>
      <div className="p-4">
        <h1 className="text-lg md:text-xl font-bold text-center text-sky-500 pb-2">
          {title}
        </h1>
        <p className="text-sm md:text-base text-white text-justify leading-relaxed pb-3">
          {paragraph}
        </p>
        <div className="flex items-center justify-center pb-3">
          <Button title="Let's Talk" />
        </div>
      </div>
    </div>
  );
};

export default Card;
