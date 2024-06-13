"use client";
import Brain from "@/components/motions/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import coverImage from "../../../public/images/hudson_about_cover.webp";
import { FaEye } from "react-icons/fa6";
import portfolioImage01 from "../../../public/images/team-image-1.webp";
import portfolioImage02 from "../../../public/images/team-image-2.webp";
import portfolioImage03 from "../../../public/images/team-image-3.webp";
import portfolioImage04 from "../../../public/images/team-image-4.webp";
import portfolioImage05 from "../../../public/images/team-image-5.webp";
import portfolioImage06 from "../../../public/images/team-image-6.webp";
import TalkToTeam from "../home/TalkToTeam";
import ImageToSideText from "../home/ImageToSideText";
import InfiniteLogoSlider from "../motions/InfiniteLogoSlider";
import DoubleSideToSide from "../home/DoubleSideToSide";

const WORKS = [
  {
    image: portfolioImage01,
    preTitle: "Programador/Fundador",
    title: "Salvador Sandoval Sanchez",
    link: "/",
  },
  {
    image: portfolioImage02,
    preTitle: "Manager",
    title: "Goldie Locks",
    link: "/",
  },
  {
    image: portfolioImage03,
    preTitle: "Administrador de Ventas",
    title: "Martin Oviedo",
    link: "/",
  },
  {
    image: portfolioImage04,
    preTitle: "Especialista en Marketing",
    title: "Adriana Martinez",
    link: "/",
  },
  {
    image: portfolioImage05,
    preTitle: "SEO/Redes",
    title: "Sergio Orsela",
    link: "/",
  },
  {
    image: portfolioImage06,
    preTitle: "Fotógrafo",
    title: "Octavio Bravo",
    link: "/",
  },
];

const AboutUsTwo = ({ aboutDic, homeDic }) => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-primary bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={400}
          priority
          loading="eager"
          alt="about us cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white text-5xl maxsm:text-3xl  font-primary w-[50%] maxsm:w-[80%] text-center">
          <p className="uppercase text-xs tracking-widest font-secondary">
            {aboutDic.hero.title}
          </p>
          <h3>{aboutDic.hero.subtitle}</h3>
        </div>
      </div>
      <DoubleSideToSide homeDic={homeDic} />
      <ImageToSideText homeDic={homeDic} />
    </div>
  );
};

export default AboutUsTwo;
