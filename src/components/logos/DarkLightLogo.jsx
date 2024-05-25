import Image from "next/image";
import Link from "next/link";

const DarkLightLogo = ({ className, lang }) => {
  return (
    <div className={`relative ${className}`}>
      <Link aria-label="dark-light-logo" href={`/${lang}`}>
        <Image
          alt="image"
          src={"/images/new_emprendomex_logo_horizontal.png"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto dark:hidden`}
        />
        <Image
          alt="image"
          src={"/images/new_emprendomex_logo_horizontal_white.png"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto hidden dark:block`}
        />
      </Link>
    </div>
  );
};

export default DarkLightLogo;
