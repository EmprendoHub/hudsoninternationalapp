"use client";
import Brain from "@/components/motions/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import coverImage from "../../../public/images/la_mejor_manera_de_tener_exito_con_tu_sitio_web.webp";

const AboutUs = ({ aboutDic }) => {
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
      {/* CONTAINER */}
      <div className="mt-10  min-h-[200vh] grid grid-cols-3">
        {/* TEXT CONTAINER */}
        <div className="p-10 maxmd:p-5 flex flex-col gap-24 maxmd:w-full relative col-span-2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-6 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/icons/Sal_Profile_Team_Pic_Round.png"
              alt="biografia"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl font-primary">
              {aboutDic.founder.position}
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-base maxmd:text-sm font-secondary">
              {aboutDic.founder.text}
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic font-secondary maxmd:text-sm">
              {aboutDic.founder.quote}
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end font-primary">{aboutDic.founder.name}</div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#4EA4B2"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#4EA4B2" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#4EA4B2"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold font-primary text-2xl uppercase"
            >
              {aboutDic.skills.title}
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 maxmd:gap-2 flex-wrap text-sm font-secondary maxmd:text-[12px]"
            >
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                JavaScript
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                TypeScript
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                React.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Next.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                SCSS
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Tailwind CSS
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                MongoDB
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                PostgreSQL
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Node.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Nest.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Express.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Spring Boot
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                GraphQL
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Apollo
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Redux
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Framer Motion
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Three.js
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                WebGL
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Webpack
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Vite
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Docker
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                AWS
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Firebase
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Git
              </div>
              <div className="rounded  p-2  cursor-pointer bg-dark text-white hover:bg-white hover:text-dark">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#4EA4B2"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#4EA4B2" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#4EA4B2"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl font-primary"
            >
              {aboutDic.experience.title}
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" p-3 maxmd:px-0 font-semibold rounded-b-lg rounded-s-lg  maxmd:text-sm  font-primary">
                    {aboutDic.experience.jobOne.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 maxmd:p-0 text-sm maxmd:text-xs italic font-secondary">
                    {aboutDic.experience.jobOne.text}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sky-700 text-sm maxmd:text-[10px] font-semibold maxmd:p-0 font-secondary">
                    {aboutDic.experience.jobOne.years}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded  text-sm maxmd:text-xs font-semibold w-fit  font-primary">
                    {aboutDic.experience.jobOne.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" p-3 maxmd:px-0 font-semibold rounded-b-lg rounded-s-lg  maxmd:text-sm font-primary">
                    {aboutDic.experience.jobTwo.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 maxmd:p-0 text-sm maxmd:text-xs italic font-secondary">
                    {aboutDic.experience.jobTwo.text}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sky-700 text-sm maxmd:text-[10px] font-semibold maxmd:p-0 font-secondary">
                    {aboutDic.experience.jobTwo.years}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded text-sm maxmd:text-xs font-semibold w-fit font-primary">
                    {aboutDic.experience.jobTwo.company}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" p-3 maxmd:px-0 font-semibold rounded-b-lg rounded-s-lg  maxmd:text-sm font-primary">
                    {aboutDic.experience.jobThree.title}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 maxmd:p-0 text-sm maxmd:text-xs italic font-secondary">
                    {aboutDic.experience.jobThree.text}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sky-700 text-sm maxmd:text-[10px] font-semibold maxmd:p-0 font-secondary">
                    {aboutDic.experience.jobThree.years}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded  text-sm maxmd:text-xs font-semibold w-fit font-primary">
                    {aboutDic.experience.jobThree.company}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="flex justify-end sticky top-0 right-0 z-10 w-full h-[800px] ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
