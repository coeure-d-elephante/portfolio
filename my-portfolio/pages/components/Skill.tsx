import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bootstrap from "../../pics/skills/bootstrap.png";
import css from "../../pics/skills/css.png";
import html from "../../pics/skills/html.png";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <Fragment>
      <div className="group relative flex cursor-pointer">
        <motion.div
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src={bootstrap}
            alt=""
            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <h4>
            <span>bootstrap</span>
          </h4>
          <br />
          <Image
            src={css}
            alt=""
            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <h4>
            <span>CSS3</span>
          </h4>
          <br />
          <Image
            src={html}
            alt=""
            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <h4>
            <span>HTML5</span>
          </h4>
        </motion.div>

        {/* <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
      rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
      </div>
    </Fragment>
  );
}

export default Skill;
