import {getPokemon, getPokemonByGeneration} from '../services/pokemonAPI';
import {ADD_POKEMON, POKEMON_LOADED} from './actions';

const initialAppState = {
  pokemon: {},
};

// could split up into slice
export async function fetchPokemon(dispatch, getState) {
  getPokemonByGeneration(1).then(pokemonList => {
    if (pokemonList) {
      for (let i = 0; i < pokemonList.length; i += 1) {
        getPokemon(pokemonList[i].name, pokemonList[i].url).then(
          pokemonData => {
            dispatch({
              type: ADD_POKEMON,
              payload: {
                [pokemonData.name]: pokemonData,
              },
            });
          },
        );
      }
    }
  });
}

export default function reducer(state = initialAppState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemon: {...state.pokemon, ...action.payload},
      };
    case POKEMON_LOADED:
      return {
        ...state,
        pokemon: {...action.payload},
      };
    default:
      return {
        ...state,
      };
  }
}
