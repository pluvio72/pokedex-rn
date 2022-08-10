import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Badge from '../../components/badge';
import Layout from '../../components/layout';
import Select from '../../components/select';
import colors, {darkenColor} from '../../util/colors';
import styles from './details.styles';

const Details = props => {
  const pokemon = useSelector(state => state.pokemon);
  const [selectedPokemon, setSelectedPokemon] = useState(
    props.data ?? pokemon[Object.keys(pokemon)[0]],
  );

  return (
    <Layout>
      {pokemon && (
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

export default Details;
