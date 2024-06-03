"use client";
import { useRef, useState } from "react";
import "./productstyles.css";
import FormattedPrice from "@/backend/helpers/FormattedPrice";
import { motion } from "framer-motion";
import { FaCircleXmark, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

const ProductDetailsComponent = ({ data, lang, setShowModal }) => {
  const product = data;
  const slideRef = useRef(null);

  const clickImage = (imageId) => {
    const lists = slideRef.current.children;

    // Find the clicked item using imageId
    const clickedItem = Array.from(lists).find((item) => {
      const itemId = item.getAttribute("data-image-id");
      return itemId === imageId;
    });

    if (clickedItem && lists.length > 1) {
      // Reorder the items in the list
      slideRef.current.insertBefore(clickedItem, slideRef.current.firstChild);
    }
  };

  return (
    <div className="container-class py-5 ">
      <main className="flex flex-col items-center justify-between w-full">
        <div className="w-[600px] maxmd:w-[400px] mx-auto wrapper-class gap-3 bg-slate-100 dark:bg-primary rounded-lg">
          <div className="flex flex-col items-start justify-start gap-x-5 ">
            {/* Left Panel */}

            <div className="relative image-class w-full flex flex-col items-center justify-center">
              <div
                onClick={() => setShowModal(false)}
                className=" absolute z-[888] top-0 right-2 my-2 px-1 py-1 text-center text-white bg-red-700 border border-transparent rounded-full hover:bg-red-800 w-auto flex flex-row items-center justify-center gap-1 cursor-pointer"
              >
                <FaCircleXmark className="text-xl" />
              </div>
              <div className="flex items-end gap-4 p-2 w-full relative h-full">
                <div className="relative rounded-full   " ref={slideRef}>
                  {product?.images.map((image, index) => (
                    <div
                      key={image._id}
                      className="ml-5 mt-5 relative rounded-full h-[250px] w-[250px] overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt="producto"
                        width={350}
                        height={350}
                        data-image-id={image._id}
                        onClick={() => clickImage(image._id)}
                        className={` object-cover`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-4xl font-semibold font-primary">
                    {product?.title[`${lang}`]}
                  </p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="grid maxxsm:grid-cols-1 maxmd:grid-cols-2 grid-cols-4 gap-4 mt-2">
                      <p>Packing:</p>
                      <p className="">{product?.packing[`${lang}`]}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="grid grid-cols-2 gap-4 mt-2 w-full">
                      <p>Weight:</p>
                      <p className=""> {product?.weight[`${lang}`]}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="grid grid-cols-2 gap-4 mt-2 w-full">
                      <p>Categoría:</p>
                      <p className="">{product?.category[`${lang}`]}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="grid grid-cols-2 gap-4 mt-2 w-full">
                      <p>Presentaciones:</p>
                      <p className="">{product?.presentations[0]?.value}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Right PAnel */}
            <div className="description-class w-1/2 maxsm:w-full h-full ml-5 mt-5 pb-5">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl font-semibold font-primary mb-3">
                  Orígenes:
                </p>
                <div className="text-xl font-normal s">
                  <div className="flex items-center gap-x-1">
                    <span className="text-xl">Table here</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsComponent;
