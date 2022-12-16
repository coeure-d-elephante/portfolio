/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Experience, PageInfo, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { HomeModernIcon } from "@heroicons/react/24/solid";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Javi's Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* <section id="projects" className="snap-center">
        <Projects />
      </section> */}

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeModernIcon className="text-[#F7AB0A] h-10 w-10 animate-pulse hover:animate-bounce" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
    },
  };
};
