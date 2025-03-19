import Image from "next/image";
import { getAnimeById, getAnimeCharactersById } from "@/lib/anime";

export default async function Page({ params }) {
  const { id } = await params;

  const anime = await getAnimeById(id);
  const characters = await getAnimeCharactersById(id);

  return (
    <div>
      <div className="flex">
        <Image
          src={anime.images.webp.image_url}
          width={250}
          height={100}
          layout="intrinsic"
          alt={`Anime - ${anime.titles[0].title}`}
        />
        <div>
          <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
            {anime.titles[0].title}
          </h3>
          <p>Rating: {anime.rating}</p>
          <p>Score: {anime.score}</p>
          <p>Rank: {anime.rank}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {characters.slice(0, 15).map((character, index) => (
          <div key={character.character.mal_id}>
            <p className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
              {character.character.name}
            </p>
            <Image
              src={character.character.images.webp.image_url}
              width={100}
              height={50}
              layout="intrinsic"
              alt={character.character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
