"use client";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { NAV_LINKS } from "@/backend/data/constants";
import styles from "./_navbar.module.scss";
import DarkLightLogo from "../logos/DarkLightLogo";
import ThemeToggle from "../layout/ThemeToggle";

const MobileMenuComponent = ({ className, lang, localeHeader }) => {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 1, 0.39, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className={`${className}`}>
      <nav className="flex flex-row items-center justify-center gap-x-2">
        {/*Mobile Navigation*/}
        <div
          onClick={toggleMobileMenu}
          className="relative flex flex-row items-center justify-end gap-x-2  cursor-pointer text-sm"
        >
          <div className="p-2 bg-fourth drop-shadow-md rounded-full hover:rotate-180 ease-linear duration-300">
            <AiOutlineMenu className="text-xl" />
          </div>
        </div>
        <ThemeToggle className={"mr-4"} />
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" fixed flex items-center justify-center flex-col left-0 top-0 w-full min-h-screen bg-light dark:bg-dark px-10 pt-2  origin-top"
          >
            <p
              onClick={toggleMobileMenu}
              className="cursor-pointer text-md  absolute right-4 top-4"
            >
              <AiOutlineClose />
            </p>
            <div className="relative flex h-full flex-col mb-5">
              <DarkLightLogo className={"mb-5"} lang={lang} />
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-[50vh] justify-between font-primary font-light tracking-wider items-center gap-4 maxmd:gap-2"
              >
                {localeHeader?.menu?.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden ">
                      <MobileNavLink
                        title={link.title}
                        href={`/${lang}${link.url}`}
                        toggleMobileMenu={toggleMobileMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
            {/** Logout Button */}
            {isLoggedIn ? (
              <div
                onClick={() => signOut()}
                className="pt-10 cursor-pointer flex justify-center items-center gap-x-1 "
              >
                Cerrar Session
                <AiOutlineLogout className="text-xl flex" />
                {/* <p className='text-sm font-semibold'>Logout</p> */}
              </div>
            ) : (
              <Link
                href={`/${lang}/iniciar`}
                onClick={() => setOpen((prevOpen) => !prevOpen)}
                className="pt-5 cursor-pointer font-primary font-light flex justify-center items-center gap-x-1 text-base"
              >
                Iniciar Session
                <AiOutlineLogin className="  hover:scale-110 ease-in-out duration-300" />
              </Link>
            )}
            {/* Contact Links */}
            <div className="flex flex-col items-center justify-center gap-x-4 pt-10">
              <Link
                href={"tel:3532464146"}
                className=" flex flex-row justify-between items-center gap-x-2 cursor-pointer mb-3"
              >
                <span className="text-sm">353-246-4146</span>
              </Link>
              <div className="flex items-center gap-x-4">
                <motion.a
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/hudsoninternationalmarket/"
                  target="_blank"
                >
                  <span className="socialLink">
                    <BsInstagram className="text-xl maxsm:text-base" />
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/hudsoninternationalmarket/"
                  target="_blank"
                >
                  <span className="socialLink">
                    <BsFacebook className="text-xl maxsm:text-base" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenuComponent;

const mobileNavLinksVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.35, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href, toggleMobileMenu }) => {
  return (
    <motion.div
      variants={mobileNavLinksVariants}
      className="text-xl lowercase "
    >
      <Link
        href={href}
        onClick={toggleMobileMenu}
        className="relative group flex items-center text-lg font-primary p-3 
          "
      >
        <span className={`${styles.bouncingBall}   hidden group-hover:block`} />
        <span>{title}</span>
      </Link>
    </motion.div>
  );
};
