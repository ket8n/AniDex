import AnimeCard from "../components/AnimeCard";

export default async function Page() {
  // const [animeList, setAnimeList] = useState([]);

  // useEffect(() => {}, []);
  const data = await fetch("https://api.jikan.moe/v4/top/anime");
  const dataJSON = await data.json();
  const animeList = dataJSON.data || [];
  console.log(animeList);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-start">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} animeDetails={anime} />
      ))}
    </div>
  );
}
