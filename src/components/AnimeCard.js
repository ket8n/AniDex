import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ animeDetails: anime }) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className="border-2 w-60 min-h-[29rem] p-3 m-3 cursor-pointer">
        <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
          {anime.titles[0].title}
        </h3>
        <Image
          src={anime.images.webp.image_url}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt={`Anime - ${anime.titles[0].title}`}
        />
        <p>Rating: {anime.rating}</p>
        <p>Score: {anime.score}</p>
        <p>Rank: {anime.rank}</p>
      </div>
    </Link>
  );
}
