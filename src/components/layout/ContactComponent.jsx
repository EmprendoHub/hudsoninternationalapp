import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa6";
import styles from "./layout.module.scss";
import Image from "next/image";

const ContactComponent = ({ contactDic }) => {
  return (
    <div className=" py-12 px-40 maxxlg:px-20 maxlg:px-5 h-full overflow-x-hidden ">
      {/* Title */}
      <div className="w-full flex h-full gap-x-5 maxmd:flex-col justify-center items-center mb-10">
        <div className="w-1/2 maxmd:w-full pr-10 maxmd:px-1 maxmd:mt-10  ">
          <p className="uppercase font-secondary tracking-widest text-xs text-gray-500">
            {contactDic.contactInfo.pretitle}
          </p>
          <h3 className="text-3xl maxsm:text-3xl font-primary mb-1">
            <span>{contactDic.contactInfo.title} </span>
            <span className="text-secondary">
              {contactDic.contactInfo.titleTwo}
            </span>
          </h3>
          <p className="font-secondary italic maxlg:text-sm">
            {contactDic.contactInfo.subtitle}
          </p>
        </div>
        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  ">
          {/* contact links */}
          <div className="flex  items-start mt-5 gap-3">
            {/* Social media */}
            <div className="w-1/2">
              <p className="text-[12px] uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.social}
              </p>
              <div className="relative flex items-start justify-start w-full">
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
            <div className="w-1/2 ">
              <p className="text-[12px] uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.questions}
              </p>
              <p className="text-base font-primary ">
                hudsoninternationalmarket@gmail.com
              </p>
            </div>
          </div>
          {/* Email */}
        </div>
      </div>
      {/* Address One */}
      <div className="w-full flex h-full gap-x-5 maxmd:flex-col-reverse justify-center items-center">
        {/*  Map */}
        <div className="w-1/2 maxmd:w-full pr-10 maxmd:px-1 maxmd:mt-10  ">
          <div className="w-full h-auto flex justify-end maxmd:justify-start items-center">
            <Link href={contactDic.addressTwo.mapUrl} target="_blank">
              <Image
                alt="google maps"
                src={contactDic.addressTwo.mapImage}
                width={500}
                height={500}
                className="object-cover shadow-sm shadow-black"
              />
            </Link>
          </div>
        </div>
        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  ">
          <p className="uppercase font-secondary tracking-widest text-xs text-gray-500">
            {contactDic.addressTwo.ubicacion}
          </p>
          <h3 className="text-3xl maxsm:text-3xl font-primary mb-1">
            <span>{contactDic.addressTwo.addressOne}, </span>
            <span className="text-secondary">{contactDic.addressTwo.city}</span>
          </h3>

          <div className="text-xl maxsm:text-xl font-primary mb-1">
            <span>{contactDic.addressTwo.state}, </span>
            <span className="text-secondary">
              {contactDic.addressTwo.country}
            </span>
          </div>
          <div className="text-2xl maxsm:text-2xl font-primary mb-1">
            <span className="text-secondary">
              {contactDic.addressTwo.phone}
            </span>
          </div>
        </div>
      </div>
      {/* Address Two */}
      <div className="w-full mt-20 flex h-full gap-x-5 maxmd:flex-col justify-center items-center">
        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  ">
          <p className="uppercase font-secondary tracking-widest text-xs text-gray-500">
            {contactDic.address.ubicacion}
          </p>
          <h3 className="text-3xl maxsm:text-3xl font-primary mb-1">
            <span>{contactDic.address.addressOne}, </span>
            <span className="text-secondary">{contactDic.address.city}</span>
          </h3>

          <div className="text-xl maxsm:text-xl font-primary mb-1">
            <span>{contactDic.address.state}, </span>
            <span className="text-secondary">{contactDic.address.country}</span>
          </div>
          <div className="text-2xl maxsm:text-2xl font-primary mb-1">
            <span className="text-secondary">{contactDic.address.phone}</span>
          </div>
        </div>
        {/*  Map */}
        <div className="w-1/2 maxmd:w-full pr-10 maxmd:px-1 maxmd:mt-10  ">
          <div className="w-full h-auto flex justify-end maxmd:justify-start items-center">
            <Link href={contactDic.address.mapUrl} target="_blank">
              <Image
                alt="google maps"
                src={contactDic.address.mapImage}
                width={500}
                height={500}
                className="object-cover shadow-sm shadow-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
