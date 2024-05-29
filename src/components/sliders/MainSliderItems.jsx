import Image from "next/image";
import React from "react";

const MainSliderItems = ({ item, index }) => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={item.imgPath}
        alt="cover imagen"
        priority
        loading={`eager`}
        width={1920}
        height={1920}
      />
    </div>
  );
};

export default MainSliderItems;
