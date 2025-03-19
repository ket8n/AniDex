import { BASE_EXTERNAL_API_URL } from "@/utils/constants";

export async function getTopCharacters() {
  const data = await fetch(`${BASE_EXTERNAL_API_URL}/top/characters`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getCharacterDetails(id) {
  const data = await fetch(`${BASE_EXTERNAL_API_URL}/characters/${id}/full`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getCharacterAnimes(id) {
  const data = await fetch(`${BASE_EXTERNAL_API_URL}/characters/${id}/anime`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}
