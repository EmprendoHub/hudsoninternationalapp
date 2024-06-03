"use client";
import { useRef, useState } from "react";
import "./productstyles.css";
import ProductCard from "./ProductCard";
import FormattedPrice from "@/backend/helpers/FormattedPrice";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const ProductDetailsComponent = ({ data, lang }) => {
  const product = JSON.parse(data.product);
  const trendingProducts = JSON.parse(data?.trendingProducts);
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
    <div className="container-class py-14 maxsm:py-8 ">
      <main className="bg-gray-100 flex flex-col items-center justify-between">
        <div className="w-full mx-auto wrapper-class gap-3 bg-slate-100 text-black bg-opacity-80 rounded-lg">
          <div className="flex flex-row maxsm:flex-col items-start justify-start gap-x-5 px-20 py-8 maxmd:py-4  maxmd:px-3">
            {/* Left Panel */}
            <div className=" image-class w-1/2 maxsm:w-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="p-2 w-full relative h-full"
              >
                <div className="relative h-[600px] body  " ref={slideRef}>
                  {product?.images.map((image, index) => (
                    <div
                      key={image._id}
                      data-image-id={image._id}
                      onClick={() => clickImage(image._id)}
                      className={`item ${index === 0 && "active"}`}
                      style={{
                        backgroundImage: `url('${image.url}')`,
                      }}
                    ></div>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Right PAnel */}
            <div className="description-class w-1/2 maxsm:w-full h-full ">
              <div className="flex flex-col items-start justify-start pt-1 maxsm:pt-2 gap-y-3 w-[90%] maxmd:w-full p-5 pb-10">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-7xl font-semibold font-primary mb-3">
                    {product?.presentations[0].value}
                  </p>
                  <div className="text-xl font-normal s">
                    <div className="flex items-center gap-x-1">
                      <span className="font-base text-xl">
                        {product?.title[`${lang}`]}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-4xl text-black font-bodyFont">
                      {product?.price > 0 ? (
                        <FormattedPrice amount={product?.price} />
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-slate-600 description-class tracking-wider"
                >
                  {product?.description[`${lang}`]
                    ? product?.description[`${lang}`]
                    : ""}
                </motion.div>
                <span>
                  Existencias:{" "}
                  <span className=" font-bodyFont">
                    <b>{product?.stock}</b>
                  </span>
                </span>
                {product?.stock <= 0 ? (
                  ""
                ) : (
                  <div className="flex items-start gap-6">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      className="text-sm text-lightText flex flex-col"
                    >
                      <div className="grid maxxsm:grid-cols-1 maxmd:grid-cols-2 grid-cols-4 gap-4 mt-2">
                        <p>Packing:</p>
                        <p className="text-black">
                          {product?.packing[`${lang}`]}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )}

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center group"
                >
                  <FaWhatsapp />
                </motion.div>
                <div className="flex flex-col">
                  <span>
                    Categoría:{" "}
                    <span className="t font-bodyFont">
                      <b>{product?.category[`${lang}`]}</b>
                    </span>
                  </span>
                  <span>
                    Weight:{" "}
                    <span className="t font-bodyFont">
                      {product?.weight[`${lang}`]}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" maxsm:px-4 mb-10 mt-10 w-[90%] mx-auto h-full">
          <p className="text-5xl maxsm:text-4xl font-primary pb-5 font-semibold">
            {"Productos destacados"}
          </p>
          <div className="grid maxxsm:grid-cols-1 maxmd:grid-cols-2 grid-cols-4 gap-4 mt-2">
            {trendingProducts?.map((product) => (
              <ProductCard key={product._id} item={product} lang={lang} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsComponent;
