import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import Layout from '../../components/layout';
import {
  getPokemon,
  getPokemonByGeneration,
  searchForPokemon,
} from '../../services/pokemonAPI';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_POKEMON} from '../../redux/actions';
import styles from './pokedex.styles';
import PokemonCard from '../../components/pokemonCard';
import {Navigation} from 'react-native-navigation';
import {DETAILS_SCREEN} from '../../navigation/screens';

const selectPokemon = state => state.pokemon;

const Pokedex = props => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);

  const [filter, setFilter] = useState('');

  // GET POKEMON FROM FIRST GENERATION AND DISPATCH
  // ACTION TO SAVE THEM TO STORE
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

  const navigateToPokemonDetails = (name, data) => {
    Navigation.push(props.componentId, {
      component: {
        name: DETAILS_SCREEN,
        passProps: {
          name,
          data,
        },
      },
    });
  };

  useEffect(() => {
    searchForPokemon(filter.toLowerCase()).then(result => {
      if (result !== null) {
        dispatch({
          type: ADD_POKEMON,
          payload: {
            [filter]: result,
          },
        });
      }
    });
  }, [filter]);

  return (
    <Layout>
      <View style={styles.inputParent}>
        <TextInput
          value={filter}
          onChangeText={setFilter}
          placeholder="Search for pokemon..."
          autoCapitalize={'none'}
          autoComplete={'off'}
        />
      </View>
      {Object.values(pokemon).length > 0 && (
        <FlatList
          style={styles.container}
          data={Object.values(pokemon).filter(
            e => e.name.toLowerCase().indexOf(filter.toLowerCase()) > -1,
          )}
          numColumns={1}
          horizontal={false}
          renderItem={({item}) => {
            return (
              <PokemonCard
                item={item}
                onPress={() => navigateToPokemonDetails(item.name, item)}
              />
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </Layout>
  );
};

export default Pokedex;
