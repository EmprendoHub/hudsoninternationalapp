import Image from "next/image";
import React from "react";

const IconGridComp = ({ servicesDic }) => {
  return (
    <div className=" bg-dark text-white mx-auto py-12 px-10 maxlg:px-8 maxsm:px-6 ">
      <div className="mt-10">
        <div className="grid maxsm:grid-cols-1 grid-cols-3 gap-6">
          {servicesDic.services.map((service, index) => (
            <div
              key={index}
              className="flex maxmd:flex-col maxsm:flex-row items-start gap-3"
            >
              <Image
                src={service.icon}
                alt="Bespoke Website Design"
                width={500}
                height={300}
                className=" w-12 h-12 bg-white rounded-full"
              />
              <div>
                <h3 className="text-sm font-secondary font-bold mb-4">
                  {service.title}
                </h3>
                <p className="mt-2 font-secondary text-sm">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconGridComp;
