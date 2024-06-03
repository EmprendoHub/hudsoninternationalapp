"use client";
import Image from "next/image";
import FormattedPrice from "@/backend/helpers/FormattedPrice";
import { motion } from "framer-motion";
import Link from "next/link";
import { addToFavorites } from "@/redux/shoppingSlice";
import { useDispatch } from "react-redux";
import { IoMdHeart } from "react-icons/io";
import { calculatePercentage } from "@/backend/helpers";
import { FaWhatsapp } from "react-icons/fa6";

const ProductCard = ({ item, lang }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="rounded-sm max-w-[250px] maxmd:max-w-[200px] overflow-hidden relative"
    >
      <Link href={`/${lang}/producto/${item.slug}`}>
        <div className="w-full h-[200px] group overflow-hidden relative">
          <Image
            src={item?.images[0].url}
            alt="product image"
            className=" ease-in-out duration-500 w-full h-full object-cover group-hover:scale-110 rounded-t-sm"
            width={350}
            height={350}
          />

          {item?.sale_price && (
            <span className="absolute top-2 right-2  border-[1px] border-black font-medium text-xs py-1 px-3 rounded-sm bg-black text-slate-100 group-hover:bg-slate-100 group-hover:text-darkblack duration-200">
              Oferta
            </span>
          )}
          {item?.stock <= 0 && (
            <span className="absolute rotate-12 top-1/2 right-1/4  border-[1px] border-black font-medium text-xl py-1 px-3 rounded-sm bg-black text-slate-100 group-hover:bg-slate-100 group-hover:text-darkblack duration-200">
              SOLD OUT
            </span>
          )}
          {item?.sale_price ? (
            <div>
              <div className="absolute top-2 left-2  border-[1px] border-black w-fit py-1 px-4 rounded-sm text-xs bg-black text-slate-100 group-hover:bg-slate-100 group-hover:text-darkblack duration-200">
                <p>
                  {calculatePercentage(item?.price, item?.sale_price)}% menos
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <div className=" px-4 py-4 flex flex-col bg-gray-100 rounded-b-sm">
        <div className="flex items-center justify-between gap-x-1">
          <p className="text-black tracking-widest font-primary text-xl">
            {item?.title[`${lang}`]}
          </p>
          <div className="flex items-center justify-between my-5">
            {/* add to favorites button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className="bg-black h-7 w-7 text-sm flex flex-row rounded-full justify-center gap-x-2 items-center tracking-wide text-slate-100 hover:bg-black hover:text-darkwhite duration-500"
              onClick={() => dispatch(addToFavorites(item))}
            >
              <FaWhatsapp className="" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
