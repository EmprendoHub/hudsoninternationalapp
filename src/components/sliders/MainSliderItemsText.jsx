import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const MainSliderItemsText = ({ item, index }) => {
  return (
    <div className="relative w-full h-full pr-10 maxmd:pr-0 overflow-x-hidden">
      {/* Text Column */}
      <div className="w-full h-full relative grid grid-cols-1 items-start ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-xs text-gray-600 tracking-widest"
        >
          {item.preTitle}
        </motion.p>
        <h2 className="font-primary text-7xl maxlg:text-5xl maxmd:text-4xl flex flex-wrap items-center gap-x-3">
          <motion.span
            initial={{ y: -50, x: -50, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {item.title}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-primary"
          >
            {item.titleTwo}
          </motion.span>
        </h2>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-secondary mt-2"
        >
          {item.text}
        </motion.p>
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-secondary my-4 gap-x-2 flex items-center"
        >
          {item.btnText} <FaArrowRightLong />
        </motion.button>
      </div>
    </div>
  );
};

export default MainSliderItemsText;
