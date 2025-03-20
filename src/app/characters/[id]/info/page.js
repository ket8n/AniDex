import { getCharacterDetails } from "@/lib/fetcher.characters";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const characterDetails = await getCharacterDetails(id);
  console.log(characterDetails);
  return (
    <div>
      <div>{characterDetails.name}</div>
      <Image
        src={characterDetails.images.webp.image_url}
        width={200}
        height={200}
        alt={characterDetails.name}
      />
      <div className="border-2 my-1 p-2">
        {characterDetails.about.split("\n").map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default page;
