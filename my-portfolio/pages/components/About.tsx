/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import aboutMe from "../../pics/aboutMe.jpeg";

function About({}) {
  return (
    <div
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 py-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="pt-40">
        <Image
          src={aboutMe}
          alt=""
          height={500}
          width={500}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
      </div>

      <div className="space-y-10 pt-40 px-0 md:px-10">
        <h3 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50"> About Me </span>{" "}
        </h3>
        <p className="text-2xl">
          <ol>
            <li className="py-2">
              1. When I was 13, I immigrated from the Philippines to the U.S. with my family.
            </li>
            <li className="py-2">
              2. I served in the United States Navy fixing fighter jets.
            </li>
            <li className="py-2">
              3. I first learnt to code when I took my first Computer Science
              class at Harvard University.
            </li>
            <li className="py-2">
              4. Im currently studying Computer Science at Harvard University
              Extension School.
            </li>
            <li className="py-2">
              5. I speak multiple languages namely: English, Tagalog, Spanish,
              conversational French, and basic Korean
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default About;
