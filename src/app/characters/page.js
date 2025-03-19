import CharacterCard from "@/components/CharacterCard";
import { getTopCharacters } from "@/lib/fetcher.characters";

export default async function Page() {
  const characters = await getTopCharacters();

  return (
    <div className="flex flex-wrap gap-4 justify-center items-start">
      {characters.map((character) => (
        <CharacterCard key={character.mal_id} character={character} />
      ))}
    </div>
  );
}
