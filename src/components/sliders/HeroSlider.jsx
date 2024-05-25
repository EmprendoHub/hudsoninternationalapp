"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroSliderPush.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MainSliderItems from "./MainSliderItems";
import MainSliderItemsText from "./MainSliderItemsText";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <link rel="preload" as="image" href={homeDic.sliders[index].imgPath} />
      </Head>
      <div
        className="relative h-[420px] maxmd:h-full grid grid-cols-2 maxmd:grid-cols-1 w-full px-10 maxmd:px-5 maxsm:pl-2 pt-20 maxsm:pt-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`maxmd:h-[250px] ${styles.textSlider}`}>
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
        <div className="relative flex maxmd:h-[200px]">
          {/* Right Images */}
          <div className={`${styles.imageSlider} `}>
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
          {/* Social media */}
          <div className="relative flex flex-col items-start justify-start -right-3 maxmd:right-0 maxmd:-top-2 w-[40px]">
            {/* Facebook */}
            <Link
              aria-label="Facebook"
              href={"/"}
              className="relative flex items-center justify-center group"
            >
              <svg className={`${styles.circle}`}>
                <g>
                  <ellipse
                    className={`${styles.background}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                  <ellipse
                    className={`${styles.foreground}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <FaFacebookF className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
            </Link>
            {/* YouTube */}
            <Link
              aria-label="YouTube"
              href={"/"}
              className="relative flex items-center justify-center group"
            >
              <svg className={`${styles.circle}`}>
                <g>
                  <ellipse
                    className={`${styles.background}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                  <ellipse
                    className={`${styles.foreground}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <FaYoutube className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
            </Link>
            {/* TikTok */}
            <Link
              aria-label="TikTok"
              href={"/"}
              className="relative flex items-center justify-center group"
            >
              <svg className={`${styles.circle}`}>
                <g>
                  <ellipse
                    className={`${styles.background}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                  <ellipse
                    className={`${styles.foreground}`}
                    ry="20"
                    rx="20"
                    cy="30"
                    cx="30"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <FaTiktok className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
            </Link>
          </div>
        </div>

        <button
          aria-label="leftArrow"
          className={styles.arrowLeft}
          onClick={() =>
            setIndex(
              (index - 1 + homeDic.sliders.length) % homeDic.sliders.length
            )
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsChevronLeft className="text-secondary text-4xl" />
        </button>
        <button
          aria-label="rightArrow"
          className={styles.arrowRight}
          onClick={() => setIndex((index + 1) % homeDic.sliders.length)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsChevronRight className="text-secondary text-4xl" />
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
