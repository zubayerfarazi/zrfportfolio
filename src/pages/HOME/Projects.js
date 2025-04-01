import React from "react";
import Slider from "../../components/SLIDER/Slider";
import website from "../../assets/website.png"; 
import TravelAgency from "../../assets/ACE.png";
import machine from "../../assets/machine.png"; 

const Projects = () => {
  const projectData = [
    {
      id: 1,
      number: "01",
      title: "University Website Enhancement Project",
      description:
        "Redesigned and enhanced the university website using HTML, CSS, Bootstrap, and PHP. Created an engaging frontend with sections for notices, news updates, and university facilities.",
      languages: "[HTML, CSS, JS, PHP]",
      liveLink: "#",
      githubLink: "https://github.com/zubayerfarazi/university-website",
      image: website,
    },
    {
      id: 2,
      number: "02",
      title: "Travel Agency Management System",
      description:
        "Developed a Travel Agency Management System using Java on NetBeans. The system includes features such as Sign In/Sign-Up, Booking Dashboard, Employee Dashboard, and more.",
      languages: "[Java]",
      liveLink: "#",
      githubLink: "https://github.com/zubayerfarazi/travel-agency-project",
      image: TravelAgency,
    },
    {
      id: 3,
      number: "03",
      title: "Crop Yield Prediction",
      description:
        "Developed a machine learning project aimed at predicting crop yields based on various environmental and agricultural factors.",
      languages: "[Python]",
      liveLink: "#",
      githubLink:
        "https://github.com/zubayerfarazi/Crop-Recommendation-using-Machine-Learning",
      image: machine,
    },
  ];

  return (
    <div className="bg-gray-800 dark:bg-gray-800 text-black dark:text-white p-10">
      <h1 className="text-center tracking-widest text-white">
        Explore Recent Projects
      </h1>
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center pb-4 md:pb-0">
        My Projects
      </h1>
      {<Slider projectData={projectData}></Slider>}
    </div>
  );
};

export default Projects;
