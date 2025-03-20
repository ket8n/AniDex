import { getCharacterAnimes } from "@/lib/fetcher.characters";
import MediaCard from "@/components/MediaCard";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const animes = await getCharacterAnimes(id);
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {animes.map((currentAnime) => (
        <MediaCard key={currentAnime.anime.mal_id} item={currentAnime.anime} />
      ))}
    </div>
  );
};

export default page;
