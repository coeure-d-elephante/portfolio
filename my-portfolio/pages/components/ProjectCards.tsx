import React, { Fragment } from "react";

type Props = {};

function ProjectCards({}: Props) {
  return (
    <Fragment>
      <div
        className="relative w-full flex overlow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-10"
      >
        <article>
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
        items-center justify-center p-20 md:p-44 h-screen"
          >
            {/* Embed Video here */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JYVi__7WBfU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project:
                </span>{" "}
                Coding Portfolio
              </h4>

              <p className="text-lg text-center md:text-left">
                Yello! The name's Javi. I'm a junior dev, figuring out the world
                of web dev one step at a time. In this video I share my solution
                with TailwindCSS properties not working. Thanks for stopping by!
              </p>
            </div>
          </div>
        </article>
      </div>
    </Fragment>
  );
}

export default ProjectCards;
