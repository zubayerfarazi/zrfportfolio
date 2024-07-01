import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import profile from "../../assets/profile-pic.png";
import CV1 from "../../assets/CV/ZRF CV.pdf";
import CV2 from "../../assets/CV/Zubayer Farazi.pdf";
import ProjectsInfo from "../../components/PROJECTSINFO/Projects";

// Set the app element for accessibility purposes
Modal.setAppElement("#root");

const Intro = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="pt-14 md:pt-20 px-5 md:px-10 text-center md:text-justify flex flex-col-reverse items-center justify-around md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <div className="leading-10 py-10">
          <h1 className="text-xl animate__animated animate__fadeInLeft text-white">
            As-salamu Alaikum
          </h1>
          <h1 className="text-3xl md:text-7xl animate__animated animate__fadeInLeft text-white">
            Hello, I'm
          </h1>
          <h1 className="text-4xl md:text-8xl text-sky-600 font-bold animate__animated animate__fadeInLeft">
            Zubayer Farazi
          </h1>
          <p className="text-lg max-w-2xl md:text-2xl pt-10 tracking-wide font-playwrite animate__animated animate__fadeInLeft text-white">
            Welcome to my portfolio! I'm a passionate computer science student
            with a solid foundation in front-end development and a keen interest
            in creating innovative software solutions. Explore my projects,
            skills, and experiences as I journey through the world of
            technology, striving to make a meaningful impact.
          </p>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-10 items-center pt-10 animate__animated animate__zoomIn">
            <button
              onClick={openModal}
              className="border-2 px-4 py-2 rounded-md border-sky-600 hover:bg-sky-600 hover:text-white transition-all ease-in-out delay-150 flex items-center gap-2 uppercase tracking-wider text-sky-600"
            >
              Download CV
              <span>
                <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
              </span>
            </button>
            <div className="flex space-x-5">
              <Link
                to="https://github.com/zubayerfarazi"
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/zubayerfarazi"
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://www.facebook.com/zubayer.forazi"
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://x.com/FaraziZubayer"
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <img
          src={profile}
          alt="Profile"
          className="rounded-full w-48 md:w-64 lg:w-80 animate__animated animate__fadeInRight"
        />
      </div>
      <ProjectsInfo></ProjectsInfo>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Download CV Modal"
        className="flex flex-col items-center justify-center p-5 bg-gray-900 rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-2xl mb-4 text-white">Choose a CV to download:</h2>
        <div className="flex space-x-5">
          <a
            href={CV2}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 px-4 py-2 rounded-md border-sky-600 hover:bg-sky-600 hover:text-white transition-all ease-in-out delay-150 flex items-center gap-2 uppercase tracking-wider text-sky-600 font-mono text-2xl"
            download
          >
            Download CV 1
            <span>
              <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
            </span>
          </a>
          <a
            href={CV1}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 px-4 py-2 rounded-md border-sky-600 hover:bg-sky-600 hover:text-white transition-all ease-in-out delay-150 flex items-center gap-2 uppercase tracking-wider text-sky-600 font-mono text-2xl"
            download
          >
            Download CV 2
            <span>
              <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
            </span>
          </a>
        </div>
        <button
          onClick={closeModal}
          className="mt-5 text-red-600 text-2xl hover:text-red-800"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Intro;
