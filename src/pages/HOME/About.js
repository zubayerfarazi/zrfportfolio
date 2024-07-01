import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImage from "../../assets/profile-pic (3).png";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("education");

  return (
    <div className="w-full bg-gray-800 dark:bg-gray-800 text-black dark:text-white pt-10 pb-10">
      <div className="flex flex-col md:flex-row justify-around items-center px-5 md:px-10 space-y-2 md:space-y-0 md:space-x-10">
        <div>
          <img
            src={aboutImage}
            alt="Profile"
            className="w-48 md:w-64 lg:w-80 animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="text-lg  text-justify md:text-xl leading-8 max-w-4xl md:max-w-5xl">
          <h1 className="text-3xl text-white md:text-5xl font-bold border-b leading-relaxed text-center md:text-left animate__animated animate__fadeInRight">
            About Me
          </h1>
          <h1 className="py-2 text-white text-2xl text-center md:text-left animate__animated animate__fadeInRight">
            Developer and Designer
          </h1>
          <p className="py-4 text-sm md:text-2xl text-white animate__animated animate__fadeInRight">
            I am a front-end web Developer. I can provide clean code and
            pixel-perfect design. I also make the website more and more
            interactive with web animations. A responsive design makes your
            website accessible to all users, regardless of their device.
          </p>
          <div className="hidden sm:flex justify-around text-xs sm:text-xl pt-5 animate__animated animate__fadeInDown">
            <div className="flex flex-col sm:flex-row justify-start pt-5 gap-8">
              <div>
                <h1
                  className="font-bold cursor-pointer text-white"
                  onClick={() => setVisibleSection("skills")}
                >
                  Skills
                </h1>
                {visibleSection === "skills" && (
                  <ul className="pt-4 space-y-4">
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> UI/UX
                    </li>
                    <p className="text-white">Designing Web</p>
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> Web Development
                    </li>
                    <p className="text-white">Web App Development</p>
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> Programming Languages
                    </li>
                    <p className="text-white">C, Java, JavaScript, React</p>
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> Databases
                    </li>
                    <p className="text-white">SQL, MongoDB</p>
                  </ul>
                )}
              </div>
              <div>
                <h1
                  className="font-bold cursor-pointer text-white"
                  onClick={() => setVisibleSection("experience")}
                >
                  Experience
                </h1>
                {visibleSection === "experience" && (
                  <ul className="pt-4 space-y-4">
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> Internship at
                    </li>
                    <p className="text-white">TechnoArt Software (TAS)</p>
                  </ul>
                )}
              </div>
              <div>
                <h1
                  className="font-bold cursor-pointer text-white"
                  onClick={() => setVisibleSection("education")}
                >
                  Education
                </h1>
                {visibleSection === "education" && (
                  <ul className="pt-4 space-y-4">
                    <li className="font-semibold text-sky-600 inline-flex items-center gap-2">
                      <FaArrowRight /> B.Sc in CSE
                    </li>
                    <p className="text-white">
                      Notre Dame University Bangladesh
                    </p>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* small device heading */}
          <div className="flex flex-col pt-4 space-y-5 sm:hidden">
            <div className="bg-gray-900 dark:bg-gray-900 rounded-lg">
              <h1 className="text-2xl text-center p-3 text-white">Skills</h1>
              <ul className=" flex flex-wrap justify-around ">
                <div className="pb-5">
                  <li className="font-semibold text-center text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                    UI/UX
                  </li>
                  <p className="text-white">Designing Web</p>
                </div>
                <div className="pb-5">
                  <li className="font-semibold text-center text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                    Web Development
                  </li>
                  <p className="text-white">Web App Development</p>
                </div>
                <div className="pb-5">
                  <li className="font-semibold text-center px-2 text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                    Programming Language
                  </li>
                  <p className="text-white">C, JavaScript, Java</p>
                </div>
                <div className="pb-5">
                  <li className="font-semibold text-center text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                    Databases
                  </li>
                  <p className="text-white">SQL, MongoDB</p>
                </div>
              </ul>
            </div>
            <div className="bg-gray-900 dark:bg-gray-900 rounded-lg">
              <h1 className="text-2xl text-center p-3 text-white">
                Experience
              </h1>
              <div className="px-10">
                <h1 className="font-semibold text-center pl-3 text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                  Internship at
                </h1>
                <h1 className="text-center text-white">
                  TechnoArt Software (TAS)
                </h1>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-gray-900 rounded-lg">
              <h1 className="text-2xl text-center p-3 text-white">Education</h1>
              <div className="px-10">
                <h1 className="font-semibold text-center pl-3 text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                  B.Sc in CSE
                </h1>
                <h1 className="text-center text-white">
                  Notre Dame University Bangladesh (NDUB)
                </h1>
              </div>
            </div>
          </div>
          {/* small device heading */}
        </div>
      </div>
    </div>
  );
};

export default About;
