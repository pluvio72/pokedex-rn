import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect, useSelector} from 'react-redux';
import Badge from '../../components/badge';
import Layout from '../../components/layout';
import Select from '../../components/select';
import colors, {darkenColor} from '../../util/colors';
import styles from './details.styles';

const selectPokemon = state => state.pokemon;

const Details = props => {
  const pokemon = props.pokemon;
  const [selectedPokemon, setSelectedPokemon] = useState(
    props.data ?? Object.values(props.pokemon)[0],
  );
  console.log('SELECTED:', selectedPokemon);

  // useEffect(() => {
  //   const listener = {
  //     componentDidAppear: () => {
  //       setSelectedPokemon();
  //     },
  //     componentDidDisappear: () => {
  //       console.log('RNN', 'componentDidDisappear');
  //     },
  //   };
  //   // Register the listener to all events related to our component
  //   const unsubscribe = Navigation.events().registerComponentListener(
  //     listener,
  //     props.componentId,
  //   );
  //   return () => {
  //     // Make sure to unregister the listener during cleanup
  //     unsubscribe.remove();
  //   };
  // }, []);

  return (
    <Layout>
      {selectedPokemon && (
        <View style={styles.container}>
          <Select
            options={Object.values(pokemon) ?? []}
            onSelect={newPokemon => {
              setSelectedPokemon(newPokemon);
            }}
            defaultOption={selectedPokemon ?? props.data}
          />
          <View
            style={[
              styles.pokemonCard,
              {backgroundColor: colors[selectedPokemon.types[0]]},
            ]}>
            <View style={styles.types}>
              {selectedPokemon.types.map(type => (
                <Badge
                  key={type}
                  text={type}
                  color={darkenColor(colors[type], 0.9)}
                  size="lg"
                />
              ))}
            </View>
            <Image
              source={{uri: selectedPokemon.image}}
              style={styles.pokemonImage}
            />
            <View style={styles.firstContainer}>
              <View style={[styles.stats]}>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>HP </Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats.hp.base_stat}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>DEF</Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats.defense.base_stat}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>ATK</Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats.attack.base_stat}
                  </Text>
                </View>
              </View>
              <View style={[styles.stats]}>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>SPD</Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats.speed.base_stat}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>SP. ATK</Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats['special-attack'].base_stat}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>SP. ATK</Text>
                  <Text style={styles.statValue}>
                    {selectedPokemon.stats['special-defense'].base_stat}
                  </Text>
                </View>
              </View>
              <Text style={styles.generationText}>
                Generation {selectedPokemon.generation}
              </Text>
              <View style={styles.row}>
                <Text style={{marginRight: 5}}>Species:</Text>
                <Text style={{fontWeight: '600'}}>
                  {selectedPokemon.species_name}
                </Text>
              </View>
              {selectedPokemon.forms && (
                <View style={styles.row}>
                  <Text style={{marginRight: 5}}>Forms:</Text>
                  <Text style={{fontWeight: '600'}}>
                    {selectedPokemon.species_name}
                  </Text>
                </View>
              )}
              <View />
            </View>
          </View>
        </View>
      )}
    </Layout>
  );
};

const mapStateToProps = state => {
  return {pokemon: state.pokemon};
};

export default connect(mapStateToProps)(Details);
