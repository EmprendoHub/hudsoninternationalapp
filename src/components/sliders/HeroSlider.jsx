"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroSliderPush.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MainSliderItems from "./MainSliderItems";
import MainSliderItemsText from "./MainSliderItemsText";

const HeroSlider = ({ homeDic }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % homeDic.sliders.length);
      }, 5000);
    } else if (isPaused && index === 0) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % homeDic.sliders.length);
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <div
        className="relative h-full justify-center flex items-center maxmd:flex-col w-full px-40 maxxlg:px-20 maxmd:px-5 maxsm:pl-2 py-20 maxsm:pt-10 bg-white dark:bg-primary  overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`relative  h-[420px]  maxmd:h-[350px] w-1/3 maxmd:w-full ${styles.textSlider}`}
        >
          {homeDic.sliders.map((item, idx) => (
            <div
              key={item.title}
              className={`${styles.slide} ${
                idx === index ? styles.active : ""
              } ${styles.fromLeft}`}
            >
              <MainSliderItemsText item={item} index={idx} />
            </div>
          ))}
        </div>
        <div className="relative flex h-[720px] max2xl:h-[500px] maxxlg:h-[400px]  maxsm:h-[300px] w-2/3 maxmd:w-full">
          {/* Right Images */}
          <div className={`${styles.imageSlider} w-full h-full`}>
            {homeDic.sliders.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.slide} ${
                  idx === index ? styles.active : ""
                } ${styles.fromRight}`}
              >
                <MainSliderItems item={item} index={idx} />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="leftArrow"
          className={`${styles.arrowLeft} right-[220px] bottom-[80px] maxxlg:right-[130px]`}
          onClick={() =>
            setIndex(
              (index - 1 + homeDic.sliders.length) % homeDic.sliders.length
            )
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsChevronLeft className=" text-4xl" />
        </button>
        <button
          aria-label="rightArrow"
          className={`${styles.arrowRight} right-[170px] bottom-[80px] maxxlg:right-[80px]`}
          onClick={() => setIndex((index + 1) % homeDic.sliders.length)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsChevronRight className=" text-4xl" />
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
