import AnimeCard from "@/components/AnimeCard";
import { getTopAnime } from "@/lib/fetcher.anime";

export default async function Page() {
  const animeList = await getTopAnime();

  return (
    <div className="flex flex-wrap gap-4 justify-center items-start">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} animeDetails={anime} />
      ))}
    </div>
  );
}
