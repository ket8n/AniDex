import Image from "next/image";
import React from "react";

const MediaCard = ({ item }) => {
  return (
    <div className="w-[200px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-[280px] relative">
        <Image
          src={item.images.webp.image_url}
          layout="fill"
          objectFit="cover"
          alt={item.title}
        />
      </div>

      <div className="p-2">
        <p className="text-sm font-semibold text-center text-gray-800">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;
