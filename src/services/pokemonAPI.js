import {formatPokemonBasicInfo, formatPokemonDetails} from '../util/format';

const POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const GEN_ENDPOINT = 'https://pokeapi.co/api/v2/generation/';

async function getPokemonByGeneration(_generation) {
  try {
    const response = await fetch(`${GEN_ENDPOINT}${_generation}`);
    const json = await response.json();
    return json.pokemon_species;
  } catch (error) {
    console.log('Error fetching pokemon by generation.', error);
  }
}

async function searchForPokemon(filter) {
  try {
    const response = await fetch(`${POKEMON_ENDPOINT}${filter}`);
    const json = await response.json();
    if (json.species) {
      const response2 = await fetch(json.species.url);
      const json2 = await response2.json();
      const returnVal = Object.assign(
        formatPokemonDetails(json),
        formatPokemonBasicInfo(json2),
      );
      console.log('Return Val:', returnVal);
      return returnVal;
    } else {
      return null;
    }
  } catch (error) {
    console.log('Pokemon not found:', filter);
    return null;
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
    return {
      base_experience: 'unknown???',
      height: 'unknown???',
      id: null,
      species_name: 'unknown???',
      weight: 'unknown???',
      generations: 'NA',
      forms: ['unknown???'],
      stats: {
        hp: {base_stat: 'NA'},
        attack: {base_stat: 'NA'},
        defense: {base_stat: 'NA'},
      },
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg',
      types: ['unknown???'],
    };
  }
}

async function getPokemon(name, url) {
  const basicInfo = await getPokemonBasicInfo(url);
  const details = await getPokemonDetails(name);
  return Object.assign(basicInfo, details);
}

export {getPokemonByGeneration, getPokemon, searchForPokemon};
