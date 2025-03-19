export function sortCharacterByFavorites(character, limit = null) {
  character.sort((a, b) => b.favorites - a.favorites);
  if (limit) return character.slice(0, limit);
  return character;
}
