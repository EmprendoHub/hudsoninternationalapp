import React from "react";
import coverImage from "../../../public/images/new_hero_image_shadow_dark.webp";
import Image from "next/image";

const ImageHero = ({ homeDic }) => {
  return (
    <div className="bg-dark dark:bg-primary">
      <div className="w-full h-[800px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        {/* overlay */}
        <div className="absolute bg-black bg-opacity-10 dark:bg-opacity-20 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={1080}
          priority
          loading="eager"
          alt="portfolio image"
          className="object-cover h-full w-full"
        />
        <div className="absolute top-20 right-20 maxlg:right-5 z-10 text-white text-7xl maxlg:text-5xl font-primary w-[50%] maxsm:w-[80%] ">
          <h2 className="font-primary leading-none mb-3">
            <span className="text-primary dark:text-white">
              {homeDic.imageHero.title}{" "}
            </span>
            <span className="text-white dark:text-dark">
              {homeDic.imageHero.titleTwo}
            </span>
          </h2>
          <p className="font-secondary text-lg font-medium mb-1 text-gray-800 dark:text-white">
            {homeDic.imageHero.pretitle}
          </p>
          <p className="font-secondary text-sm mb-1">
            {homeDic.imageHero.subtitle}
          </p>
          <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3">
            <p className=" flex items-center gap-2">{homeDic.imageHero.text}</p>
          </div>
          <button
            aria-label="Contactar"
            className="bg-dark dark:bg-secondary px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
          >
            {homeDic.imageHero.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
