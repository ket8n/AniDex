import { BASE_EXTERNAL_API_URL } from "@/utils/constants";

export async function getTopAnime() {
  const data = await fetch(`${BASE_EXTERNAL_API_URL}/top/anime`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getAnimeById(id) {
  const data = await fetch(`${BASE_EXTERNAL_API_URL}/anime/${id}`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getAnimeCharactersById(id) {
  const data_characters = await fetch(
    `${BASE_EXTERNAL_API_URL}/anime/${id}/characters`
  );
  const data_characters_JSON = await data_characters.json();
  return data_characters_JSON.data || [];
}
