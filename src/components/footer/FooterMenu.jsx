"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkLightLogo from "../logos/DarkLightLogo";
import LocaleToggle from "../layout/LocaleToggle";
import WhiteLogoComponent from "../logos/WhiteLogoComponent";

const FooterMenu = ({ localeFooter, lang }) => {
  return (
    <div
      className={`relative overflow-x-hidden w-full flex flex-col items-center justify-start`}
    >
      <div className="flex maxlg:flex-col items-start gap-y-4 w-full">
        <div className="w-1/4 mr-5 maxmd:w-full gap-y-4 justify-start">
          <WhiteLogoComponent lang={lang} />
        </div>
        <div className="w-full ">
          <div className="w-full footer-class grid maxsm:grid-cols-1 grid-cols-3 gap-10 pb-10">
            <div>
              <p className="text-lg font-primary">
                {localeFooter.widgettwo.title}
              </p>
              <ul className="text-xs font-secondary  mt-2 flex flex-col gap-y-2">
                {localeFooter.widgettwo.links.map((link, index) => (
                  <motion.li
                    key={link.title}
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.15 }}
                    className="hover:text-secondary  cursor-pointer duration-200 "
                  >
                    <Link href={`/${lang}${link.url}`}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg font-primary">
                {localeFooter.widgetthree.title}
              </p>
              <ul className="font-secondary text-xs mt-2 flex flex-col gap-y-2">
                {localeFooter.widgetthree.links.map((link, index) => (
                  <motion.li
                    key={link.title}
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.15 }}
                    className="hover:text-secondary  cursor-pointer duration-200 "
                  >
                    <Link href={`/${lang}${link.url}`}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg  font-primary mb-2">
                {" "}
                {localeFooter.widgetfour.title}
              </p>
              <ul className="font-secondary text-xs mt-2 flex flex-col gap-y-2">
                {localeFooter.widgetfour.links.map((link, index) => (
                  <motion.li
                    key={link.title}
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 1 }}
                    transition={{ duration: 0.15 }}
                    className="hover:text-secondary  cursor-pointer duration-200"
                  >
                    <Link href={`/${lang}${link.url}`}>{link.title}</Link>
                  </motion.li>
                ))}
              </ul>
              <LocaleToggle />
            </div>
          </div>
          <div className="w-full footer-class grid maxsm:grid-cols-1 grid-cols-3 gap-10 border-t pt-10 border-t-gray-400 border-opacity-20">
            <div>
              <h2 className="text-base font-primary mb-2">
                Ubicaciones Emprendomex
              </h2>
            </div>
            <div>
              <div className="font-secondary text-xs">
                <p className=" mt-2">{localeFooter.addressTwo.ubicacion}</p>
                <p className=" mt-2">{localeFooter.addressTwo.addressOne}</p>
                <p className="">
                  {localeFooter.addressTwo.city}, {localeFooter.addressTwo.hood}
                </p>
                <p className=" mb-3">
                  {localeFooter.addressTwo.state}, {localeFooter.addressTwo.zip}
                </p>
                <p className=" mb-3">{localeFooter.addressTwo.phone}</p>
              </div>
            </div>
            <div>
              <div className="font-secondary text-xs">
                <p className="mt-2">{localeFooter.address.ubicacion}</p>
                <p className="mt-2">{localeFooter.address.addressOne}</p>
                <p className="">
                  {localeFooter.address.city}, {localeFooter.address.hood}
                </p>
                <p className="mb-3">
                  {localeFooter.address.state}, {localeFooter.address.zip}
                </p>
                <p className="mb-3">{localeFooter.address.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
