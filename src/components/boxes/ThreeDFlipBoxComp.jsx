"use client";
import "./styles.scss";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const ThreeDFlipBoxComp = ({ data, className, classNameBack }) => {
  const IconComponent = FaIcons[data.icon];
  return (
    <div className="flip-card rounded-lg">
      <div className="flip-card-front  w-[280px]  min-h-[540px] rounded-2xl">
        <div className="inner p-5 maxmd:p-5 flex flex-col justify-center items-center rounded-2xl">
          <p>{data?.preTitle}</p>
          {IconComponent && (
            <IconComponent className="text-4xl text-slate-800" />
          )}
          <h3 className="text-2xl">{data?.title}</h3>
          <p>{data?.text}</p>
        </div>
        <div className={className} />
      </div>
      <div className="flip-card-back w-[280px] min-h-[540px]  rounded-2xl">
        <div className="inner p-5 maxsm:p-5 flex flex-col justify-center items-center">
          {IconComponent && <IconComponent className="text-4xl text-white" />}
          <p className="text-white text-2xl">{data?.titleTwo}</p>
          <p className="text-white ">{data?.textTwo}</p>
          <Link
            href={data?.btnLink}
            className="w-full flex items-center justify-center"
          >
            <div className="mt-4 text-xs bg-orange-800 text-white w-5/6 p-3 rounded-full cursor-pointer">
              Contactar
            </div>
          </Link>
        </div>
        <div className={classNameBack} />
      </div>
    </div>
  );
};

export default ThreeDFlipBoxComp;
