import Image from "next/image";
import React from "react";
import ProjectCards from "./ProjectCards";

type Props = {};

function Projects({}: Props) {
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80"
      >
        <div
          className="scrollbar-thin scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80"
        >
          <ProjectCards />
        </div>
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
      -skew-y-12"
      />
    </div>
  );
}

export default Projects;
