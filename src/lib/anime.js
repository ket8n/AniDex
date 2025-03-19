export async function getTopAnime() {
  const data = await fetch("https://api.jikan.moe/v4/top/anime");
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getAnimeById(id) {
  const data = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const dataJSON = await data.json();
  return dataJSON.data || [];
}

export async function getAnimeCharactersById(id) {
  const data_characters = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/characters`
  );
  const data_characters_JSON = await data_characters.json();
  return data_characters_JSON.data || [];
}
