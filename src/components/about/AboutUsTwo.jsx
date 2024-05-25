"use client";
import Brain from "@/components/motions/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import coverImage from "../../../public/images/la_mejor_manera_de_tener_exito_con_tu_sitio_web.webp";
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
      <div className="w-full h-[600px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-dark bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={1080}
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
      <ImageToSideText homeDic={homeDic} />
      <TalkToTeam homeDic={homeDic} />
      <div className="px-5 my-20">
        <h2 className="text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none px-10">
          <span>{homeDic.sideText.title} </span>
          <span className="text-primary">{homeDic.sideText.titleTwo}</span>
        </h2>
        <section className="my-20 h-full w-full flex flex-wrap gap-5 items-center justify-center ">
          {WORKS.map((work, index) => (
            <div
              key={index}
              className="relative h-[300px] w-[300px] group cursor-pointer rounded-sm"
            >
              <Image
                src={work.image}
                width={800}
                height={800}
                alt="portfolio"
                loading="lazy"
                className="object-cover h-full w-full grayscale"
              />

              <div className="h-[0%] opacity-0 group-hover:h-[100%] group-hover:opacity-100 duration-300 flex flex-col justify-center items-start w-full absolute z-10 bottom-0 bg-white px-5">
                <FaEye className="text-black" />
                <p className="text-[12px] uppercase text-dark font-secondary">
                  {work.preTitle}
                </p>
                <h3 className="text-2xl font-primary text-dark hover:text-primary duration-300 ease-in-out">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </div>
      <InfiniteLogoSlider homeDic={homeDic} />
    </div>
  );
};

export default AboutUsTwo;
