import {createStore, applyMiddleware} from 'redux';
import reducer, {fetchPokemon} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

export default function () {
  const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  );
  const store = createStore(reducer, composedEnhancer);
  store.dispatch(fetchPokemon);
  return store;
}
