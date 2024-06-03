"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ModalProduct from "../modals/ModalProduct";
import { useState } from "react";

const ProductCard = ({ item, lang }) => {
  const [showModal, setShowModal] = useState(false);
  const clickForModal = async () => {
    setShowModal(true);
  };
  return (
    <>
      <ModalProduct
        showModal={showModal}
        setShowModal={setShowModal}
        data={item}
        lang={lang}
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="rounded-sm max-w-[170px] overflow-hidden relative flex flex-col gap-4 cursor-pointer"
        onClick={clickForModal}
      >
        <div className="w-full rounded-full h-[170px] group overflow-hidden relative">
          <Image
            src={item?.images[0].url}
            alt="product image"
            className="  ease-in-out duration-500 w-full h-full object-cover group-hover:scale-110 rounded-t-sm"
            width={350}
            height={350}
          />
        </div>
        <div className=" px-4 py-1 flex flex-col w-full rounded-b-sm">
          <div className="flex items-center justify-center gap-x-1">
            <p className=" tracking-wide text-center font-primary text-xl">
              {item?.title[`${lang}`]}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
