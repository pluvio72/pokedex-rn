import {StyleSheet} from 'react-native';
import colors from '../../util/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },
  inputParent: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 6,
    backgroundColor: colors.grey,
  },
});

export default styles;
