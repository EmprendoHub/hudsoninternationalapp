import Image from "next/image";
import React from "react";

const MainSliderItems = ({ item, index }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={item.imgPath}
        alt="cover imagen"
        priority
        loading={`eager`}
        width={1920}
        height={1280}
      />
    </div>
  );
};

export default MainSliderItems;
