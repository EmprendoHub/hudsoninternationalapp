import React from "react";
import ThreeDFlipBoxComp from "../boxes/ThreeDFlipBoxComp";
import { flip_box_data } from "@/backend/data/constants";

const FlipBoxesComp = () => {
  return (
    <section className="bg-white border-b mt-20 min-h-full">
      <div className="w-full">
        <h2 className="w-full my-2 text-3xl maxmd:text-xl font-bold leading-tight text-center text-gray-800">
          Soluciones Tecnológicas a Medida
        </h2>
        <div className="h-1 mx-auto gradient w-[50%] maxmd:w-full text-center  mb-0  py-0 rounded-t text-sm">
          Descubre Cómo Nuestros Servicios Personalizados Pueden Impulsar Tu
          Negocio
        </div>
      </div>
      <div className=" mx-auto flex flex-wrap mt-20">
        <div className="w-full min-h-full flex flex-row maxlg:flex-wrap items-center justify-center place-content-center px-2">
          <ThreeDFlipBoxComp
            data={flip_box_data[0]}
            className={`w-full h-full object-cover absolute bg-gradient-to-r from-gray-200 to-gray-100 shadow-md shadow-black rounded-2xl`}
            classNameBack={
              "w-full h-full object-cover absolute bg-gradient-to-tr from-teal-600 bg-purple-50 to-sky-900 rounded-2xl"
            }
          />
          <ThreeDFlipBoxComp
            data={flip_box_data[2]}
            className={`w-full h-full object-cover absolute bg-gradient-to-r from-gray-200 to-gray-100 shadow-md shadow-black rounded-2xl`}
            classNameBack={
              "w-full h-full object-cover absolute bg-gradient-to-tr from-amber-600 to-orange-900 rounded-2xl"
            }
          />
          <ThreeDFlipBoxComp
            data={flip_box_data[1]}
            className={`w-full h-full object-cover absolute bg-gradient-to-r from-gray-200 to-gray-100 shadow-md shadow-black rounded-2xl`}
            classNameBack={
              "w-full h-full object-cover absolute bg-gradient-to-tr from-purple-800  to-sky-800 rounded-2xl"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FlipBoxesComp;
