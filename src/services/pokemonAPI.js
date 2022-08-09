import {formatPokemonBasicInfo, formatPokemonDetails} from '../util/format';

const POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const GEN_ENDPOINT = 'https://pokeapi.co/api/v2/generation/';

async function getPokemonByGeneration(_generation) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/generation/${_generation}`,
    );
    const json = await response.json();
    return json.pokemon_species;
  } catch (error) {
    console.log('Error fetching pokemon by generation.', error);
  }
}

async function getPokemonBasicInfo(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return formatPokemonBasicInfo(json);
  } catch (error) {
    console.log(`No basic info for: ${url}.`);
    return {};
  }
}

async function getPokemonDetails(name) {
  try {
    const response = await fetch(`${POKEMON_ENDPOINT}${name}`);
    const json = await response.json();
    return formatPokemonDetails(json);
  } catch (error) {
    console.log(`No details for pokemon: ${name}.`);
    return {};
  }
}

async function getPokemon(name, url) {
  const basicInfo = await getPokemonBasicInfo(url);
  const details = await getPokemonDetails(name);
  return Object.assign(basicInfo, details);
}

export {getPokemonByGeneration, getPokemon};
