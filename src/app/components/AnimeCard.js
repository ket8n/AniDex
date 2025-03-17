import Image from "next/image";

export default function AnimeCard({ animeDetails: anime }) {
  return (
    <div className="border-2 w-60 min-h-[29rem] p-3 m-3 flex flex-col">
      <h3>{anime.titles[0].title}</h3>
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
  );
}
