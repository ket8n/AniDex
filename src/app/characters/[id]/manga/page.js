import { getCharacterMangas } from "@/lib/fetcher.characters";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const mangas = await getCharacterMangas(id);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {mangas.map((currentAnime) => (
        <div
          key={currentAnime.manga.mal_id}
          className="w-[200px] bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="w-full h-[280px] relative">
            <Image
              src={currentAnime.manga.images.webp.image_url}
              layout="fill"
              objectFit="cover"
              alt={currentAnime.manga.title}
            />
          </div>

          <div className="p-2">
            <p className="text-sm font-semibold text-center text-gray-800">
              {currentAnime.manga.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
