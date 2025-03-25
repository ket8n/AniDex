import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character }) {
  return (
    <Link href={`/characters/${character.mal_id}/info`}>
      <div className="border-2 w-60 min-h-[30rem] p-3 m-3 cursor-pointer">
        <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
          {character.name}
        </h3>
        <Image
          src={character.images.webp.image_url}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt={`Anime - ${character.name}`}
        />
        <p>favorites: {character.favorites}</p>
        <p>Also know as: {character.nicknames.slice(0, 3).join(", ")}</p>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          Original Name: {character.name_kanji}
        </p>
      </div>
    </Link>
  );
}
