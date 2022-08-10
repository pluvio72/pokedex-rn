import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pokemonCard: {
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  pokemonImage: {
    width: 250,
    height: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  types: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
  },
  statValue: {
    fontSize: 20,
  },
  firstContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  generation: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  row: {flexDirection: 'row'},
  generationText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '600',
  },
});
export default styles;
