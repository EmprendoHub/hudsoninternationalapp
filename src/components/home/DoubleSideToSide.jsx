"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DoubleSideToSide = ({ homeDic }) => {
  return (
    <div className="w-full my-10 bg-white dark:bg-primary">
      {/* underhero */}
      <section className=" py-8">
        {/* Top Side */}
        <div className="container max-w-5xl mx-auto m-8">
          <div className="flex maxmd:flex-wrap maxmd:flex-col-reverse items-center justify-center">
            {/* text and image */}
            <div className="w-6/12 maxmd:w-full p-6">
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className=" flex items-center gap-2"
                >
                  {homeDic.doublesides.boxTwo.text}
                </motion.p>
              </div>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                aria-label="Contactar"
                className="bg-primary dark:bg-dark px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
              >
                {homeDic.doublesides.boxTwo.btnText}
              </motion.button>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                className={`relative mt-10 `}
              >
                <Image
                  className="object-cover rounded-full w-[25rem] h-[25rem] maxmd:w-[20rem] maxmd:h-[20rem] z-50"
                  src="/images/importacion_de_condimentos.webp"
                  alt="Diseño Gráfico Profesional"
                  width={550}
                  height={550}
                  priority
                />
              </motion.div>
            </div>
            {/* Circles */}
            <div className="relative maxmd:ml-5  w-5/12 maxmd:w-full">
              <div className="relative flex flex-col w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="circle rounded-full h-40 w-40 bg-dark"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="circle-small my-20  maxmd:my-10 rounded-full h-14 w-14 dark:border-dark border-primary self-center border-[10px]"
                />
              </div>
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                className="text-5xl maxmd:text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 w-[90%] h-full"
              >
                <span>{homeDic.doublesides.boxTwo.title} </span>
                <span className="text-dark">
                  {homeDic.doublesides.boxTwo.titleTwo}
                </span>
              </motion.h2>
            </div>
          </div>
        </div>
        {/* Bottom Side */}
        <div className="container max-w-5xl mx-auto m-8 ">
          <div className="flex maxmd:flex-wrap h-[400px] items-center justify-center">
            {/* TExt */}
            <div className="w-5/12 maxmd:w-full p-6 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="circle mb-20 rounded-full h-20 w-20 bg-dark"
              />
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl  font-primary leading-none mb-3"
              >
                <span>{homeDic.doublesides.boxOne.title} </span>
                <span className="text-dark ">
                  {homeDic.doublesides.boxOne.titleTwo}
                </span>
              </motion.h2>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3 min-h-full">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className=" flex items-center gap-2"
                >
                  {homeDic.doublesides.boxOne.text}
                </motion.p>
              </div>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                }}
                aria-label="Contactar"
                className="bg-primary dark:bg-dark px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
              >
                {homeDic.doublesides.boxOne.btnText}
              </motion.button>
            </div>
            {/* Image */}
            <div className="relative w-6/12 maxmd:w-full h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.1,
                }}
                className="relative w-full h-full"
              >
                <Image
                  className="object-cover w-full h-full z-50"
                  src="/images/seeds_dry_fruits_nuts_2.webp"
                  alt="Diseño Gráfico Profesional"
                  width={850}
                  height={850}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoubleSideToSide;
