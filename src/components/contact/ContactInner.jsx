import SubscribeForm from "@/components/forms/SubscribeForm";
import ContactComponent from "@/components/layout/ContactComponent";
import Image from "next/image";
import React from "react";
import coverImage from "../../../public/images/hudson_contact_cover.webp";
import ContactUsComponent from "./ContactUsComponent";

const ContactInner = ({ homeDic, contactDic }) => {
  return (
    <div className="relative h-full  overflow-x-hidden">
      <div className="w-full h-[300px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-primary bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={400}
          priority
          loading="eager"
          alt="contact cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white text-5xl maxsm:text-3xl  font-primary w-[50%] maxsm:w-[80%] text-center">
          <p className="uppercase text-xs tracking-widest font-secondary">
            {contactDic.hero.pretitle}
          </p>
          <h3>{contactDic.hero.title}</h3>
        </div>
      </div>
      <ContactComponent contactDic={contactDic} />
      <ContactUsComponent
        contactDic={contactDic}
        contactTitle={"Mándanos un breve mensaje"}
        contactSubTitle={
          "En breve uno de nuestros representantes se comunicara."
        }
      />
    </div>
  );
};

export default ContactInner;
