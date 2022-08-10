import {StyleSheet} from 'react-native';
import colors from '../../util/colors';

const styles = StyleSheet.create({
  pokemon: {
    borderWidth: 3,
    borderColor: colors.black,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    flex: 1,
  },
  pokemonName: {
    fontWeight: '600',
    marginLeft: 10,
    fontSize: 20,
    flexGrow: 1,
    flex: 1,
  },
  pokemonImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 164,
    height: 164,
  },
  pokemonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pokemonHP: {
    fontWeight: '600',
    fontSize: 22,
    flexGrow: 1,
    textAlign: 'right',
    flex: 1,
  },
  pokemonHPLabel: {
    fontSize: 12,
  },
  mainPokemonType: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default styles;
