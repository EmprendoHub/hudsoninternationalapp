import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import styles from "./layout.module.scss";
import Image from "next/image";
import ContactUsComponent from "../contact/ContactUsComponent";

const ContactComponent = ({ contactDic }) => {
  return (
    <div className="bg-white dark:bg-primary py-12 px-40 maxxlg:px-20 maxlg:px-5 h-full overflow-x-hidden ">
      {/* Title */}
      <div className="w-full flex h-full gap-x-5 maxmd:flex-col justify-center items-center mb-2">
        <div className="w-1/2 maxmd:w-full pr-10 maxmd:px-1 maxmd:mt-10  ">
          <p className="uppercase font-secondary tracking-widest text-xs text-gray-500 maxmd:text-center">
            {contactDic.contactInfo.pretitle}
          </p>
          <h3 className="maxmd:text-center text-3xl maxsm:text-3xl font-primary mb-1">
            <span>{contactDic.contactInfo.title} </span>
            <span className="text-dark">{contactDic.contactInfo.titleTwo}</span>
          </h3>
          <p className="maxmd:text-center font-secondary italic maxlg:text-sm">
            {contactDic.contactInfo.subtitle}
          </p>
        </div>
        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  ">
          {/* contact links */}
          <div className=" flex items-center justify-end flex-col mt-5 gap-3">
            {/* Social media */}
            <div className="w-1/2">
              <p className="text-[12px] text-center uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.social}
              </p>
              <div className="relative flex items-center justify-center w-full">
                {/* Facebook */}
                <Link
                  aria-label="Facebook"
                  target="_blank"
                  href={
                    "https://www.facebook.com/Hudson-International-Market-100649958963881"
                  }
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
                {/* LinkedIn */}
                <Link
                  aria-label="LinkedIn"
                  target="_blank"
                  href={
                    "https://www.linkedin.com/company/hudson-international-market"
                  }
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
                  <FaLinkedin className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
                </Link>
                {/* WhatsApp */}
                <Link
                  aria-label="WhatsApp"
                  target="_blank"
                  href={"https://wa.me/12069799807"}
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
                  <FaWhatsapp className="absolute text-xs group-hover:text-dark ease-in-out duration-700 z-0" />
                </Link>
              </div>
            </div>
            <div className="w-1/2 ">
              <p className="text-[12px] text-center uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.questions}
              </p>
              <Link href={"mailto:hudsoninternationalmarket01@gmail.com"}>
                <p className="maxmd:text-center text-base font-primary hover:text-secondary ease-in-out duration-700">
                  hudsoninternationalmarket01@gmail.com
                </p>
              </Link>
            </div>
          </div>
          {/* Email */}
        </div>
      </div>
      {/* Address One */}
      <div className="w-full flex h-full gap-x-5 maxmd:flex-col-reverse justify-end items-center">
        {/*  Map */}
        <div className="w-1/2 maxmd:w-full pr-10 maxmd:px-1 maxmd:mt-10  ">
          <div className="w-full h-auto flex justify-end maxmd:justify-center items-center">
            <ContactUsComponent contactDic={contactDic} />
          </div>
        </div>
        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  flex items-center justify-end flex-col">
          <p className="uppercase font-secondary tracking-widest text-xs text-gray-500">
            {contactDic.addressTwo.ubicacion}
          </p>
          <h3 className="text-3xl maxsm:text-3xl font-primary mb-1 maxmd:text-center">
            <span>{contactDic.addressTwo.addressOne} </span>
            <span className="text-dark">{contactDic.addressTwo.city}</span>
          </h3>

          <div className="text-xl maxsm:text-xl font-primary mb-1">
            <span>{contactDic.addressTwo.state}, </span>
            <span className="text-dark">{contactDic.addressTwo.country}</span>
          </div>
          <div className="text-2xl maxsm:text-2xl font-primary mb-1">
            <Link
              aria-label="WhatsApp"
              target="_blank"
              href={"https://wa.me/12069799807"}
              className="relative flex items-center justify-center group"
            >
              <span className="text-dark flex items-center justify-center gap-2">
                <FaWhatsapp /> {contactDic.addressTwo.phone}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
