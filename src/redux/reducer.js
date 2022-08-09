import {ADD_POKEMON, GET_POKEMON} from './actions';

const initialAppState = {
  pokemon: {},
};

export default function reducer(state = initialAppState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemon: {...state.pokemon, ...action.payload},
      };
    default:
      return {
        ...state,
      };
  }
}
