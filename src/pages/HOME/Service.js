import React from "react";
import Card from "../../components/CARD/Card";

import webDevelopment from "../../assets/webDevelopment.png";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import database from "../../assets/database (1).png";
import software from "../../assets/software.png";
import graphics from "../../assets/graphics.png";

const Service = () => {
  return (
    <div className="w-full bg-gray-900 dark:bg-gray-900 text-black dark:text-white pt-10 pb-10">
      <h1 className="text-center tracking-widest text-sky-200">
        Explore my Services
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center pb-5 text-white">
        My Services
      </h1>
      <p className="py-2 px-10 text-sm md:text-lg text-justify md:px-10 2xl:text-center text-white">
        I offer a range of services to help you achieve your digital goals. From
        web development to technical support, I provide high-quality solutions
        tailored to your needs. Explore the service below to see how I can
        assist you.
      </p>
      <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 m-6 px-4 md:px-10 scrollbar-hide">
        {/* Web Development Card */}
        <Card
          img={webDevelopment}
          title="Web Development"
          paragraph="Bring your vision to life with responsive, user-friendly websites. Specializing in HTML, CSS, Bootstrap, and JavaScript to create dynamic and engaging web experiences."
        />

        {/* Frontend Development Card */}
        <Card
          img={frontend}
          title="Frontend Development"
          paragraph="Crafting visually appealing and interactive user interfaces with a focus on usability and performance. I use modern frontend technologies like ReactJS to build seamless and efficient user experiences."
        />

        {/* Backend Development Card */}
        <Card
          img={backend}
          title="Backend Development"
          paragraph="Building robust and scalable backend systems using PHP and MySQL. I develop secure and efficient server-side logic, manage databases, and integrate APIs."
        />

        {/* Database Development Card */}
        <Card
          img={database}
          title="Database Management"
          paragraph="Designing, managing, and optimizing databases to ensure data integrity, security, and performance. With experience in MySQL and database design."
        />

        {/* Software Development Card */}
        <Card
          img={software}
          title="Software Development"
          paragraph="Developing custom software solutions tailored to your specific needs. With proficiency in Java and other programming languages, I create reliable and high-quality software."
        />

        {/* Graphics Design Card */}
        <Card
          img={graphics}
          title="Graphics Design"
          paragraph="Creating visually stunning and impactful designs using tools like Adobe Photoshop and Adobe Premiere Pro. I design logos, marketing materials, social media graphics, and more."
        />
      </div>
    </div>
  );
};

export default Service;
