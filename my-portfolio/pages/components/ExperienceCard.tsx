import React, { Fragment } from "react";
import { motion } from "framer-motion";
import rosehip from "public/pics/experiencePics/rosehip.jpeg";
import generalSymbol from "public/pics/experiencePics/genSymbol.jpeg";

import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <Fragment>
      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-7xl 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
      >
        <motion.div
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
        />
        <Image
          src={rosehip}
          alt=""
          height={250}
          width={250}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
       object-center"
        />
        <div className="pt-20 md:pt-20 px-0 md:px-10">
          <h4 className="text-4xl font-light">Rosehip</h4>
          <p className="font-bold text-2xl mt-1">Software Engineer</p>
          <div className="flex space-x-2 my-2">
            {/* {.technologies.map(() => (
            <Image className="h-10 w-10 rounded-full" src="" alt=""/>
          ))} */}
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">
          {"Oct 2021"}
          {" - "}
          {"Feb 2022"}
        </p>
        <ul
          className="list-disc space-y-4 ml-5 text-lg max-h-75 overflow-scroll scrollbar-thin
     pr-10 scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
        >
          <li>
            Produced and designed multiple dynamic browser compatible pages
            using React and JQuery.
          </li>
          <li>Created and designed components with paginated mapped cards </li>
          <li>
            Created component for the Questions entity that allowed users to ask
            and revise their questions
          </li>
        </ul>
      </article>

      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-7xl 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
      >
        <motion.div
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
        />
        <Image
          src={generalSymbol}
          alt=""
          height={250}
          width={250}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
       object-center"
        />
        <div className="pt-20 md:pt-20 px-0 md:px-10">
          <h4 className="text-4xl font-light">General Symbol</h4>
          <p className="font-bold text-2xl mt-1">Software Engineer</p>
          <div className="flex space-x-2 my-2">
            {/* {.technologies.map(() => (
            <Image className="h-10 w-10 rounded-full" src="" alt=""/>
          ))} */}
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">
          {"Feb 2022"}
          {" - "}
          {"Jul 2022"}
        </p>
        <ul 
          className="list-disc sm:list-disc md:list-disc lg:list-disc space-y-4 ml-5 text-lg max-h-75 overflow-scroll scrollbar-thin
     pr-10 scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
        >
          <li>
            Collaborated with Agile development team to generate working
            software and operational solutions
          </li>
          <li>
            Inspected and performed troubleshooting using web tools on web
            application to solve code errors{" "}
          </li>
          <li>
            Implemented new responsive user-facing features throughout web
            application
          </li>
        </ul>
      </article>
    </Fragment>
  );
}

export default ExperienceCard;
