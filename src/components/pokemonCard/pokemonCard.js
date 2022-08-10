import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator, Pressable} from 'react-native';
import Badge from '../badge';
import colors, {darkenColor} from '../../util/colors';
import styles from './pokemonCard.styles';

const PokemonCard = ({item, onPress}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.pokemon, {backgroundColor: colors[item.types[0]]}]}>
        <View style={styles.pokemonHeader}>
          <Text style={styles.pokemonName}>
            {item.name[0].toUpperCase() + item.name.substring(1)}
          </Text>
          <View style={styles.mainPokemonType}>
            <Badge
              color={darkenColor(colors[item.types[0]], 0.9)}
              text={item.types[0]}
            />
          </View>
          <Text style={styles.pokemonHP}>
            <Text style={styles.pokemonHPLabel}>HP</Text>
            {item.stats.hp.base_stat}
          </Text>
        </View>
        {imageLoading && (
          <ActivityIndicator
            size="large"
            color={colors.grey}
            style={[{position: 'absolute', left: '50%', top: '50%'}]}
          />
        )}
        <Image
          source={{uri: item.image}}
          style={[styles.pokemonImage]}
          onLoadEnd={() => {
            setImageLoading(false);
          }}
        />
      </View>
    </Pressable>
  );
};

export default PokemonCard;
