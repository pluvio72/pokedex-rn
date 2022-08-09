import {StyleSheet} from 'react-native';
import colors from '../../util/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  pokemon: {
    borderWidth: 3,
    borderColor: colors.black,
    backgroundColor: colors.grey,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    flex: 1,
  },
  pokemonName: {
    fontWeight: '600',
  },
});

export default styles;
