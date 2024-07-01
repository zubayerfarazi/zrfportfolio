import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftSlider = () => {
  return (
    <div className="static sm:fixed left-0 bottom-0 px-2">
      <div className="flex flex-col items-center">
        <div className="flex flex-row pt-10 sm:flex-col gap-3">
          <Link to="https://www.linkedin.com/in/zubayerfarazi" target="_blank">
            <FaLinkedin className="text-gray-600 text-2xl cursor-pointer hover:text-white" />
          </Link>
          <Link to="https://www.facebook.com/zubayer.forazi" target="_blank">
            <FaFacebook className="text-gray-600 text-2xl cursor-pointer hover:text-white" />
          </Link>
          <Link to="https://github.com/zubayerfarazi" target="_blank">
            <FaGithubSquare className="text-gray-600 text-2xl cursor-pointer hover:text-white" />
          </Link>
          <Link to="https://x.com/FaraziZubayer" target="_blank">
            <FaSquareXTwitter className="text-gray-600 text-2xl cursor-pointer hover:text-white" />
          </Link>
        </div>
        <div className=" w-[1px] h-32 bg-[#125f63] hidden sm:block"></div>
      </div>
    </div>
  );
};

export default LeftSlider;
