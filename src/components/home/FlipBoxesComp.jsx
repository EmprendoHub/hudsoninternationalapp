import React from "react";
import ThreeDFlipBoxComp from "../boxes/ThreeDFlipBoxComp";
import { flip_box_data } from "@/backend/data/constants";

const FlipBoxesComp = ({ flipBoxes }) => {
  return (
    <section className="min-h-full">
      <div className=" mx-auto flex ">
        <div className="w-full min-h-full flex flex-row maxsm:flex-col items-center maxsm:items-start justify-center maxlg:justify-between place-content-center">
          <ThreeDFlipBoxComp
            data={flipBoxes[2]}
            className={`w-full h-full object-cover absolute bg-blue-500 shadow-md shadow-black `}
            classNameBack={
              "w-full h-full object-cover absolute bg-blue-500  shadow-md shadow-black "
            }
          />
          <ThreeDFlipBoxComp
            data={flipBoxes[0]}
            className={`w-full h-full object-cover absolute  bg-amber-700  shadow-md shadow-black`}
            classNameBack={
              "w-full h-full object-cover absolute bg-amber-700 shadow-md shadow-black "
            }
          />
          <ThreeDFlipBoxComp
            data={flipBoxes[1]}
            className={`w-full h-full object-cover absolute  bg-slate-700 shadow-md shadow-black `}
            classNameBack={
              "w-full h-full object-cover absolute bg-slate-700 shadow-md shadow-black "
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FlipBoxesComp;
