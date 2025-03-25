import Image from "next/image";
import { getAnimeById, getAnimeCharactersById } from "@/lib/fetcher.anime";
import { sortCharacterByFavorites } from "@/utils/helper";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;

  const anime = await getAnimeById(id);
  const characters = await getAnimeCharactersById(id);

  const charactersFiltered = sortCharacterByFavorites(characters, 20);

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
        {charactersFiltered.map((character, index) => (
          <div key={character.character.mal_id}>
            <p className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
              {character.character.name}
            </p>
            <Link href={`/characters/${character.character.mal_id}/info`}>
              <Image
                src={character.character.images.webp.image_url}
                width={100}
                height={50}
                layout="intrinsic"
                alt={character.character.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
