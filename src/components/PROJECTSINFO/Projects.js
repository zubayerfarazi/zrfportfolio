import React from "react";

const ProjectsInfo = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-y-4 text-white md:flex shrink justify-around pb-10 animate__animated animate__fadeInLeft">
      <div className="flex flex-row gap-3 items-center ">
        <h1 className="text-6xl font-mono font-bold">2</h1>
        <p className="text-sm md:text-xl">
          Years of <br /> experience
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">8</h1>
        <p className="text-sm md:text-xl">
          Projects <br /> completed
        </p>
      </div>
      {/* <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">8</h1>
        <p className="text-sm md:text-xl">
          Technologies <br /> mastered
        </p>
      </div> */}
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">12</h1>
        <p className="text-sm md:text-xl">
          Code <br /> commits
        </p>
      </div>
    </div>
  );
};

export default ProjectsInfo;
