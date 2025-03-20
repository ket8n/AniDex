import { getCharacterAnimes } from "@/lib/fetcher.characters";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const animes = await getCharacterAnimes(id);
  console.log(animes);
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {animes.map((currentAnime) => (
        <div
          key={currentAnime.anime.mal_id}
          className="w-[200px] bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="w-full h-[280px] relative">
            <Image
              src={currentAnime.anime.images.webp.image_url}
              layout="fill"
              objectFit="cover"
              alt={currentAnime.anime.title}
            />
          </div>

          <div className="p-2">
            <p className="text-sm font-semibold text-center text-gray-800">
              {currentAnime.anime.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
