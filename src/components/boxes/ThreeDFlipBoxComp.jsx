"use client";
import "./styles.scss";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const ThreeDFlipBoxComp = ({ data, className, classNameBack }) => {
  const IconComponent = FaIcons[data.icon];
  return (
    <div className="flip-card m-4 maxlg:mx-2 maxmd:mx-1 maxsm:my-2 ">
      <div className="flip-card-front  w-[240px] maxlg:w-[200px] maxsm:w-[340px] min-h-[340px] ">
        <div className="inner p-5 maxmd:p-3 flex flex-col justify-center items-center  text-white">
          {IconComponent && <IconComponent className="text-4xl " />}
          <h3 className="text-2xl">{data?.title}</h3>
          <p>{data?.text}</p>
        </div>
        <div className={className} />
      </div>
      <div className="flip-card-back w-[240px] maxlg:w-[200px] maxsm:w-[340px] min-h-[340px]  ">
        <div className="inner p-5 maxsm:p-5 flex flex-col justify-center items-center">
          {IconComponent && <IconComponent className="text-4xl text-white" />}
          <h3 className="text-white text-4xl">{data?.titleTwo}</h3>
          <p className="text-white ">{data?.textTwo}</p>
          <Link
            href={data?.btnLink}
            className="w-full flex items-center justify-center"
          >
            <div className="mt-4 text-xs bg-primary text-white w-5/6 p-3 cursor-pointer">
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
