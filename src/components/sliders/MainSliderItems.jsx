import Image from "next/image";
import React from "react";

const MainSliderItems = ({ item, index }) => {
  return (
    <div className="relative w-[500px] h-[340px]">
      <Image
        src={item.imgPath}
        alt="cover imagen"
        priority
        loading={`eager`}
        width={500}
        height={340}
      />
    </div>
  );
};

export default MainSliderItems;
