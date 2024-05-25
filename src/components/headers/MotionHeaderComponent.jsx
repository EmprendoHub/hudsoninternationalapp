"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenuComponent from "./MobileMenuComponent";
import { useSession } from "next-auth/react";
import Link from "next/link";
import DarkLogoComponent from "../logos/DarkLogoComponent";
import styles from "./_navbar.module.scss";
import ThemeToggle from "../layout/ThemeToggle";
import WhiteLogoComponent from "../logos/WhiteLogoComponent";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import DarkLightLogo from "../logos/DarkLightLogo";
import TopBar from "./TopBar";

const MotionHeaderComponent = ({ localeHeader, lang }) => {
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();
  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);
  const params = useSearchParams();
  const dispatch = useDispatch();
  const referralSuccess = params.get("alink");
  if (referralSuccess) {
    dispatch(addAffiliate(referralSuccess));
  }

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <>
      {isLoggedIn && session?.user?.role !== "manager" ? (
        <motion.nav
          variants={{ hidden: { y: 0 }, visible: { y: "-110%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`print:hidden flex flex-row items-center justify-between  header-class  from bg-white dark:bg-dark dark:text-white text-black text-xl sticky top-0 z-[50]  w-full mx-auto py-3  border-b shadow-lg pl-4 h-[80px]`}
        >
          <DarkLightLogo lang={lang} />
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex w-8/12 flex-row items-center justify-between font-lato tracking-widest gap-x-3 maxlg:hidden "
          >
            {localeHeader.menu?.map((link, index) => {
              return (
                <div key={index} className="">
                  <MobileNavLink title={link.title} href={link.url} />
                </div>
              );
            })}
            <span className="pr-4 text-sm">
              <ThemeToggle />
            </span>
          </motion.div>

          <MobileMenuComponent className={"minlg:hidden"} lang={lang} />
        </motion.nav>
      ) : !isLoggedIn ? (
        <motion.nav
          variants={{ hidden: { y: 0 }, visible: { y: "-110%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`print:hidden flex flex-row items-center justify-between  header-class  from bg-white dark:bg-dark dark:text-white text-black text-xl sticky top-0 z-[50]  w-full mx-auto py-3  border-b shadow-lg pl-4 h-[80px]`}
        >
          <DarkLightLogo lang={lang} />
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex w-8/12 flex-row items-center justify-between font-lato tracking-widest gap-x-3 maxlg:hidden "
          >
            {localeHeader.menu?.map((link, index) => {
              return (
                <div key={index} className="">
                  <MobileNavLink
                    title={link.title}
                    href={link.url}
                    lang={lang}
                  />
                </div>
              );
            })}
            <span className="pr-4 text-sm">
              <ThemeToggle />
            </span>
          </motion.div>

          <MobileMenuComponent
            className={"minlg:hidden"}
            lang={lang}
            localeHeader={localeHeader}
          />
        </motion.nav>
      ) : (
        <TopBar session={session} lang={lang} />
      )}
    </>
  );
};

export default MotionHeaderComponent;

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

const MobileNavLink = ({ title, href, lang }) => {
  return (
    <motion.div
      variants={mobileNavLinksVariants}
      className="tracking-widest text-xs lowercase "
    >
      <Link
        href={`/${lang}${href}`}
        className={`relative group flex items-center text-sm font-primary p-3`}
      >
        <span className={`${styles.bouncingBall} hidden group-hover:block`} />
        <span>{title}</span>
      </Link>
    </motion.div>
  );
};
