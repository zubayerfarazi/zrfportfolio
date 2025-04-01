import React, { useState } from "react";
// import aboutImage from "../../assets/profile-pic (3).png";
import aboutImage from "../../assets/zrf1.png";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("education");

  return (
    <div className="w-full bg-gray-800 dark:bg-gray-800 text-black dark:text-white pt-10 pb-10">
      <div className="flex flex-col md:flex-row justify-around items-center px-5 md:px-10 space-y-2 md:space-y-0 md:space-x-10">
        <div className="flex-shrink-0">
          <img
            src={aboutImage}
            alt="Profile"
            className="w-32 h-32 border rounded-full xl:border-none xl:rounded-none xl:w-96 xl:h-auto md:hidden xl:block animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="text-lg  text-justify md:text-xl leading-8 max-w-4xl md:max-w-5xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center md:text-center xl:text-left animate__animated animate__fadeInRight">
            About Me
          </h1>
          <h1 className="py-2 text-white text-normal text-center md:text-center xl:text-left animate__animated animate__fadeInRight">
            Developer and Designer
          </h1>
          <p className="py-4 text-sm md:text-xl text-white animate__animated animate__fadeInRight">
            I am a passionate Full Stack Developer with a strong foundation
            in frontend and backend technologies. Specializing in React.js,
            Node.js, and MongoDB, I create scalable and dynamic web
            applications. I enjoy problem-solving, learning new technologies,
            and building innovative digital solutions. Always eager to
            collaborate and grow in a challenging environment.
          </p>
          {/* <div className="hidden sm:flex justify-around text-xs sm:text-xl pt-5 animate__animated animate__fadeInDown">
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
          </div> */}

          {/* small device heading */}
          {/* <div className="flex flex-col pt-4 space-y-5 sm:hidden">
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
          </div> */}
          {/* small device heading */}

          <div className="bg-gray-900 dark:bg-gray-900 rounded-lg">
            <h1 className="text-2xl text-center p-3 text-white">Skills</h1>
            <ul className=" flex flex-wrap justify-around gap-2">
              <div className="pb-5">
                <li className="font-semibold text-center text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                  Frontend
                </li>
                <p className="text-white pt-2">
                  {" "}
                  React.js, Next.js, TailwindCSS
                </p>
              </div>
              <div className="pb-5">
                <li className="font-semibold text-center text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                  Backend
                </li>
                <p className="text-white pt-2">Node.js, Express.js, MongoDB</p>
              </div>
              <div className="pb-5">
                <li className="font-semibold text-center px-2 text-sky-600 bg-gray-800 dark:bg-gray-800 rounded-lg">
                  Tools
                </li>
                <p className="text-white pt-2">
                  Git, Docker, Postman
                </p>
              </div>
            </ul>
          </div>

          <div className="flex gap-6 flex-wrap md:flex-nowrap pt-8">
            {/* experience */}
            <div>
              <p className="pb-4 pl-5 text-xl font-semibold">Experiences</p>
              <div className="relative border-l-2 pl-5 border-sky-900 h-fit">
                <div className="relative bg-gray-900 p-3 mb-4 rounded-md before:absolute before:-left-7 before:top-0 before:w-3 before:h-3 before:bg-sky-200 before:rounded-full">
                  <div className="relative bg-gray-800 p-4 rounded-lg shadow-md ">
                    {/* Job Duration */}
                    <p className="text-sky-400 text-sm font-mono">
                      Feb 2025 - Present
                    </p>

                    {/* Company Name */}
                    <a
                      href="https://qligence.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-lg font-bold text-white mt-1 font-mono hover:text-sky-300 transition-all ease-in-out duration-300"
                    >
                      Qligence Limited
                    </a>

                    {/* Job Title */}
                    <p className="text-xs text-gray-300 font-mono cursor-pointer hover:text-sky-300 transition-all ease-in-out duration-300">
                      Junior Software Engineer
                    </p>

                    {/* Description */}
                    <p className="text-sm mt-4 font-mono">
                      Crafting efficient and scalable software solutions while
                      collaborating with cross-functional teams. Focused on
                      clean code, best practices, and continuous learning.
                    </p>
                  </div>
                </div>

                <div className="relative bg-gray-900 p-3 mb-4 rounded-md before:absolute before:-left-7 before:top-0 before:w-3 before:h-3 before:bg-sky-200 before:rounded-full">
                  <div className="relative bg-gray-800 p-4 rounded-lg shadow-md">
                    {/* Internship Duration */}
                    <p className="text-sky-400 font-mono text-sm">
                      Feb 2024 - May 2024
                    </p>

                    {/* Internship Role */}
                    <p className="text-lg font-bold text-white mt-1 font-mono hover:text-sky-300 transition-all ease-in-out duration-300">
                      Software Development Intern
                    </p>

                    {/* Description */}
                    <p className="text-sm mt-4 font-mono">
                      Gained hands-on experience in software development,
                      working on real-world projects, improving coding
                      efficiency, and collaborating with teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* education */}
            <div>
              <p className="pb-4 pl-5 text-xl font-semibold">Education</p>
              <div className="relative border-l-2 pl-5 border-sky-900 h-fit">
                <div className="relative bg-gray-900 p-3 mb-4 rounded-md before:absolute before:-left-7 before:top-0 before:w-3 before:h-3 before:bg-sky-200 before:rounded-full">
                  <div className="relative bg-gray-800 p-4 rounded-lg shadow-md ">
                    {/* Education Duration */}
                    <p className="text-sky-400 font-mono text-sm">
                      Summer 2020 - Spring 2024
                    </p>

                    {/* University Name */}
                    <p className="text-lg font-bold font-mono text-white mt-1">
                      BSc in CSE
                    </p>

                    {/* Institution */}
                    <p className="text-sm font-mono text-gray-300">
                      Notre Dame University Bangladesh
                    </p>

                    {/* Description */}
                    <p className="text-sm mt-4 font-mono">
                      Focused on software development, algorithms, and
                      cybersecurity. Engaged in projects that enhanced
                      problem-solving and technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
