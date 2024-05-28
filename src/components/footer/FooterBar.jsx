import Link from "next/link";
import DarkLightLogo from "../logos/DarkLightLogo";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
} from "react-icons/fa6";
import Image from "next/image";

const FooterBar = ({ localeFooter, lang }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-gray-500 pb-4 px-20 maxmd:px-5 text-[12px] text-center bg-dark dark:bg-gray-950 ">
      {/* <DarkLightLogo lang={lang} /> */}
      <p className="mt-3">
        {localeFooter.footerBar.copyright.pretitle} &copy;{" "}
        {localeFooter.footerBar.company} {new Date().getFullYear()}{" "}
        {localeFooter.footerBar.copyright.subtitle}
      </p>
      <p>{localeFooter.footerBar.copyright.disclosure}</p>
      <p>
        {localeFooter.footerBar.copyright.preOwner}{" "}
        {localeFooter.footerBar.copyright.owner},{" "}
        {localeFooter.footerBar.copyright.subOwner}{" "}
        {localeFooter.footerBar.addressOne} - {localeFooter.footerBar.city}{" "}
        {localeFooter.footerBar.state} {localeFooter.footerBar.zip},{" "}
        {localeFooter.footerBar.country}.
      </p>
      <div className="pt-5 flex flex-row flex-wrap items-center justify-start gap-x-4">
        <FaCcVisa className="text-2xl" />
        <FaCcStripe className="text-2xl" />
        <FaCcPaypal className="text-2xl" />
        <FaCcMastercard className="text-2xl" />
        <FaCcDiscover className="text-2xl" />
        <Image
          src={"/images/Oxxo_pay.webp"}
          alt={"oxxo"}
          width={150}
          height={150}
          className="w-16 h-auto grayscale"
        />
      </div>
      {/* <Link
        aria-label="hudsoninternationalmarket"
        target="_blank"
        href={localeFooter.footerBar.path}
        className="text-popPrimary hover:text-popSecondary hover:scale-105 ease-in-out duration-300"
      >
        {localeFooter.footerBar.developBy}
      </Link> */}
    </div>
  );
};

export default FooterBar;
