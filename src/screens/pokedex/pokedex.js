import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Layout from '../../components/layout';
import {getPokemon, getPokemonByGeneration} from '../../services/pokemonAPI';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_POKEMON} from '../../redux/actions';
import styles from './pokedex.styles';

const selectPokemon = state => state.pokemon;

const PokemonEntry = pokemonData => {
  return (
    <View style={styles.pokemon}>
      <Text>{pokemonData}</Text>
    </View>
  );
};

const Pokedex = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);

  useEffect(() => {
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
  }, []);

  return (
    <Layout>
      {Object.values(pokemon).length > 0 && (
        <FlatList
          style={styles.container}
          data={Object.values(pokemon)}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => {
            return (
              <View style={styles.pokemon}>
                <Text style={styles.pokemonName}>
                  {item.name.toUpperCase()}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </Layout>
  );
};

export default Pokedex;
