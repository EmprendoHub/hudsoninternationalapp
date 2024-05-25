import React from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const DoubleSideToSide = ({ homeDic }) => {
  return (
    <div className="w-full my-10">
      {/* underhero */}

      <section className=" py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <div className="flex maxmd:flex-wrap items-center justify-center">
            {/* Image */}
            <div className="relative w-1/2 maxmd:w-full">
              <div className="relative w-full">
                <div className={`relative `}>
                  <Image
                    className="object-cover w-full h-full z-50"
                    src="/images/h1-img2.jpg"
                    alt="Diseño Gráfico Profesional"
                    width={550}
                    height={550}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 maxmd:w-full p-6">
              <p className="text-[13px] uppercase font-secondary text-gray-500">
                {homeDic.doublesides.boxOne.preTitle}
              </p>
              <h2 className="text-3xl  font-primary leading-none mb-3">
                <span>{homeDic.doublesides.boxOne.title} </span>
                <span className="text-primary">
                  {homeDic.doublesides.boxOne.titleTwo}
                </span>
              </h2>
              <p className="font-secondary italic text-sm font-medium mb-1">
                {homeDic.doublesides.boxOne.subtitle}
              </p>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3">
                <p className=" flex items-center gap-2">
                  {homeDic.doublesides.boxOne.text}
                </p>
              </div>
              <button
                aria-label="Contactar"
                className="bg-dark dark:bg-secondary px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
              >
                {homeDic.doublesides.boxOne.btnText}
              </button>
            </div>
          </div>
        </div>
        <div className="container max-w-5xl mx-auto m-8">
          <div className="flex maxmd:flex-wrap items-center justify-center">
            {/* text */}
            <div className="w-1/2 maxmd:w-full p-6">
              <p className="text-[13px] uppercase font-secondary text-gray-500">
                {homeDic.doublesides.boxTwo.preTitle}
              </p>
              <h2 className="text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3">
                <span>{homeDic.doublesides.boxTwo.title} </span>
                <span className="text-primary">
                  {homeDic.doublesides.boxTwo.titleTwo}
                </span>
              </h2>
              <p className="font-secondary italic text-sm font-medium mb-1">
                {homeDic.doublesides.boxTwo.subtitle}
              </p>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3">
                <p className=" flex items-center gap-2">
                  {homeDic.doublesides.boxTwo.text}
                </p>
              </div>
              <button
                aria-label="Contactar"
                className="bg-dark dark:bg-secondary px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
              >
                {homeDic.doublesides.boxTwo.btnText}
              </button>
            </div>
            {/* Image */}
            <div className="relative w-1/2 maxmd:w-full">
              <div className="relative w-full">
                <div className={`relative `}>
                  <Image
                    className="object-cover w-full h-full z-50"
                    src="/images/pexels-photo-3183197.jpeg"
                    alt="Diseño Gráfico Profesional"
                    width={550}
                    height={550}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoubleSideToSide;
