import { getCharacterPictures } from "@/lib/fetcher.characters";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const pictures = await getCharacterPictures(id);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {pictures.map((picture) => (
        <div
          key={picture.jpg.image_url}
          className="w-[300px] h-[500px] relative rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={picture.jpg.image_url}
            layout="fill"
            objectFit="cover"
            alt="picture"
          />
        </div>
      ))}
    </div>
  );
};

export default page;
