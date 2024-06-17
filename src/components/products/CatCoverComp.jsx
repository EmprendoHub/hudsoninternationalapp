"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import coverImage0 from "../../../public/images/cat_cover_productos_hudson_international.webp";
import coverChiles from "../../../public/images/chiles_cat_cover.webp";
import coverNuts from "../../../public/images/dried_fruits_and_nuts_cat_cover.webp";
import coverFlowers from "../../../public/images/flores_cat_cover.webp";
import coverGrains from "../../../public/images/grains_and_seeds_cat_cover.webp";
import coverHerbs from "../../../public/images/herbs_cat_cover.webp";
import coverSpices from "../../../public/images/spices_cat_cover.webp";

const CatCoverComp = ({ searchParams, lang, productDic }) => {
  const keyword = searchParams?.keyword;
  const [coverImage, setCoverImage] = useState(coverImage0);
  const [coverTitle, setCoverTitle] = useState(productDic.title);
  const [coverTitleTwo, setCoverTitleTwo] = useState(productDic.titleTwo);
  const [coverPreTitle, setCoverPreTitle] = useState(productDic.preTitle);
  useEffect(() => {
    if (keyword) {
      if (
        keyword.toLowerCase() === "condiments" ||
        keyword.toLowerCase() === "condimentos" ||
        keyword.toLowerCase() === "especias" ||
        keyword.toLowerCase() === "spices"
      ) {
        setCoverImage(coverSpices);
        if (lang === "es") {
          setCoverTitle("Especias");
          setCoverTitleTwo(" & Condimentos");
        }
        if (lang === "en") {
          setCoverTitle("Spices");
          setCoverTitleTwo(" & Condiments");
        }
      } else if (
        keyword.toLowerCase() === "chiles" ||
        keyword.toLowerCase() === "chilies"
      ) {
        setCoverImage(coverChiles);
        if (lang === "es") {
          setCoverTitle("Chiles");
          setCoverTitleTwo("");
        }
        if (lang === "en") {
          setCoverTitle("Chilies");
          setCoverTitleTwo("");
        }
      } else if (
        keyword.toLowerCase() === "flores" ||
        keyword.toLowerCase() === "flowers"
      ) {
        setCoverImage(coverFlowers);
        if (lang === "es") {
          setCoverTitle("Flores");
          setCoverTitleTwo("");
        }
        if (lang === "en") {
          setCoverTitle("Flowers");
          setCoverTitleTwo("");
        }
      } else if (
        keyword.toLowerCase() === "dried fruits and nuts" ||
        keyword.toLowerCase() === "frutos secos y nueces"
      ) {
        setCoverImage(coverNuts);
        if (lang === "es") {
          setCoverTitle("Frutos secos");
          setCoverTitleTwo(" y nueces");
        }
        if (lang === "en") {
          setCoverTitle("Dried fruits");
          setCoverTitleTwo(" and nuts");
        }
      } else if (
        keyword.toLowerCase() === "grains and seeds" ||
        keyword.toLowerCase() === "granos y semillas"
      ) {
        setCoverImage(coverGrains);
        if (lang === "es") {
          setCoverTitle("Granos");
          setCoverTitleTwo(" y semillas");
        }
        if (lang === "en") {
          setCoverTitle("Grains");
          setCoverTitleTwo(" and seeds");
        }
      } else if (
        keyword.toLowerCase() === "hierbas" ||
        keyword.toLowerCase() === "herbs"
      ) {
        setCoverImage(coverHerbs);
        if (lang === "es") {
          setCoverTitle("Hierbas");
          setCoverTitleTwo("");
        }
        if (lang === "en") {
          setCoverTitle("Herbs");
          setCoverTitleTwo("");
        }
      }
    } else {
      setCoverImage(coverImage0);
      setCoverTitle(productDic.title);
      setCoverTitleTwo(productDic.titleTwo);
    }
  }, [keyword]);

  return (
    <div className="w-full h-[300px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
      <div className="absolute bg-primary bg-opacity-40 w-full h-full z-0" />
      <Image
        src={coverImage}
        width={1920}
        height={400}
        priority
        loading="eager"
        alt="contact cover image"
        className="object-cover h-full w-full"
      />
      <div className="absolute z-10 text-white text-4xl maxsm:text-3xl  font-primary w-[80%] text-center">
        <p className="uppercase text-xs tracking-widest font-secondary">
          {coverPreTitle}
        </p>
        <h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="  font-primary mb-4"
        >
          <span className="text-white">{coverTitle} </span>
          <span className=" text-secondary">{coverTitleTwo}</span>
        </h2>
      </div>
    </div>
  );
};

export default CatCoverComp;
