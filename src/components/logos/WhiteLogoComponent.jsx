import Image from "next/image";
import Link from "next/link";

const WhiteLogoComponent = ({ className, lang }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Link aria-label="light-logo" href={`/${lang}/`}>
        <Image
          alt="image"
          src={"/images/new_emprendomex_logo_horizontal_white.png"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto`}
        />
      </Link>
    </div>
  );
};

export default WhiteLogoComponent;
