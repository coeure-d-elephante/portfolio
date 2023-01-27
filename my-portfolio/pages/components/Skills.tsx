import React, { Fragment } from "react";
import { motion } from "framer-motion";
import BlankCanvas from "./BlankCanvas";

type Props = {};

function Skills({}: Props) {
 
  return (
    <Fragment>

    <motion.div
      className="flex relative h-screen text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
     
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <BlankCanvas/>
      <div className="absolute ml-15">
        <ul className="list-disc text-xl text-gray-200">
          <li className="py-1">HTML5</li>
          <li className="py-1">CSS3</li>
          <li className="py-1">React</li>
          <li className="py-1">Next.js</li>
          <li className="py-1">Php/Laravel</li>
          <li className="py-1">Python/Django</li>
          <li className="py-1">CMS:
                  Sanity
          </li>
        </ul>
      
        
        {/* <Skill />
        <SkillTwo/>
        <SkillThree/> */}
      </div>
    </motion.div>
    </Fragment>
  
  );
}

export default Skills;
