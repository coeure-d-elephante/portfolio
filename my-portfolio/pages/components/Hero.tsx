import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, the name's Javi",
      "Coffee-lover.tsx",
      "<CoderExtraordinaire/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      {/* <Image 
      className="relative rounded-full mx-auto object-left-bottom"
      /> */}
      <Image
        src="https://cdn.sanity.io/images/85zm3n1g/production/478d94033af9c23259c9fcf645288d2213174ddd-3088x2319.jpg"
        alt=""
        height={175}
        width={175}
        className="relative rounded-full mx-auto object-cover object-left-bottom"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          {/* <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
