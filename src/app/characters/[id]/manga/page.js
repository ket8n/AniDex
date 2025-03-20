import { getCharacterMangas } from "@/lib/fetcher.characters";
import MediaCard from "@/components/MediaCard";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const mangas = await getCharacterMangas(id);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {mangas.map((currentManga) => (
        <MediaCard key={currentManga.manga.mal_id} item={currentManga.manga} />
      ))}
    </div>
  );
};

export default page;
