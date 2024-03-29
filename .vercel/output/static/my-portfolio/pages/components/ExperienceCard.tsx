import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-7xl 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
    >
      (
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
       object-center"
        src=""
      />
      )
      <div className="pt-20 md:pt-20 px-0 md:px-10">
        <h4 className="text-4xl font-light"></h4>
        <p className="font-bold text-2xl mt-1"></p>
        <div className="flex space-x-2 my-2">
          {/* {.technologies.map(() => (
            <Image className="h-10 w-10 rounded-full" src="" alt=""/>
          ))} */}
        </div>
      </div>
      <p className="uppercase py-5 text-gray-300">
        {"July 2022"}
        {" - "}
        {"Aug 2022"}
      </p>
      <ul
        className="list-disc space-y-4 ml-5 text-lg max-h-75 overflow-scroll scrollbar-thin
     pr-10 scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
      ></ul>
    </article>
  );
}

export default ExperienceCard;
