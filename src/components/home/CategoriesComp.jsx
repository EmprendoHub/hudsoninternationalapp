import SectionTitle from "../titles/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesComp = ({ homeDic, lang }) => {
  return (
    <div className="pt-5 px-40 maxxlg:px-20 maxlg:px-10 maxmd:px-5 maxmd:pt-1 mb-20">
      <div className="mx-auto">
        <SectionTitle
          className="pb-10 text-3xl maxmd:text-3xl text-center"
          title={"Especias, semillas y frutos secos de temporada"}
          subtitle={
            "Te invitamos a formar parte de esta experiencia, donde cada selección es un paso hacia la creación."
          }
        />
      </div>
      <div className="flex flex-row maxmd:flex-wrap items-center ">
        <div className="flex flex-row gap-5 maxmd:flex-wrap w-full">
          <Link
            href={`/${lang}/productos?keyword=chiles`}
            className="colone p cursor-pointer hover:scale-[105%] duration-300 ease-in-out w-full "
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={"/images/chiles.webp"}
                width={600}
                height={600}
                alt="Explora Chiles"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50 text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Chiles"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
          <Link
            href={`/${lang}/productos?keyword=condimentos`}
            className="coltwo cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full"
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={"/images/condimentos_2.webp"}
                width={600}
                height={600}
                alt="Explore Condimentos"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50 text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Condimentos"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
          <Link
            href={`/${lang}/productos?keyword=Spices`}
            className="colthree cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full"
          >
            <div className="box object-fit relative mx-auto items-center justify-center flex">
              <Image
                src={"/images/especias.webp"}
                width={600}
                height={600}
                alt="Explora Especias"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50 text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Especias"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
        </div>
      </div>
      {/* bottom cats */}
      <div className="flex flex-row maxmd:flex-wrap items-center mt-5">
        <div className="flex flex-row gap-5 maxmd:flex-wrap w-full">
          <Link
            href={`/${lang}/productos?keyword=flores`}
            className="colone p cursor-pointer hover:scale-[105%] duration-300 ease-in-out w-full "
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={"/images/flowers.webp"}
                width={600}
                height={600}
                alt="Explora flowers"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50 text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Flowers"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
          <Link
            href={`/${lang}/productos?keyword=grains`}
            className="coltwo cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full"
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={"/images/grains.webp"}
                width={600}
                height={600}
                alt="Explore Grains"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50 text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Grains"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
          <Link
            href={`/${lang}/productos?keyword=hierbas`}
            className="colthree cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full"
          >
            <div className="box object-fit relative mx-auto items-center justify-center flex">
              <Image
                src={"/images/hierbas.webp"}
                width={600}
                height={600}
                alt="Explora Hierbas"
                className="w-full h-[500px] maxxlg:h-[350px] object-cover "
              />
              <span className="absolute rounded-full z-50  text-white uppercase py-2 px-8  maxmd:text-xs top-1/2 font-primary tracking-wide">
                {"Hierbas"}
              </span>
              {/* overlay */}
              <div className="min-h-[100%] absolute z-[1] min-w-[100%] top-0 left-0 bg-black bg-opacity-40" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComp;
