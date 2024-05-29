import React from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import FlipBoxesComp from "./FlipBoxesComp";

const SingleSideToSide = ({ homeDic }) => {
  return (
    <div className="w-full pt-10 maxmd:pt-0 dark:bg-dark bg-white px-40 maxxlg:px-20 maxmd:px-5 ">
      {/* underhero */}

      <section className=" py-8">
        <div className=" mx-auto m-8">
          <div className="flex maxmd:flex-wrap items-center justify-center">
            {/* Text */}
            <div className="w-1/3 maxmd:w-full p-6 maxmd:px-0">
              <h2 className="text-3xl  font-primary leading-none mb-3">
                <span className="dark:text-white text-dark">
                  {homeDic.singlesides.boxOne.title}{" "}
                </span>
                <span className="text-primary">
                  {homeDic.singlesides.boxOne.titleTwo}
                </span>
              </h2>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-3  maxmd:text-sm flex flex-col gap-3">
                <p className=" text-primary flex items-center gap-2">
                  {homeDic.singlesides.boxOne.text}
                </p>
              </div>
              <button
                aria-label="Contactar"
                className="bg-primary px-10 py-3 text-white flex items-center justify-center uppercase text-xs tracking-widest"
              >
                {homeDic.singlesides.boxOne.btnText}
              </button>
            </div>
            {/* Image */}
            <div className="relative w-2/3 maxmd:w-full">
              <FlipBoxesComp />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleSideToSide;
