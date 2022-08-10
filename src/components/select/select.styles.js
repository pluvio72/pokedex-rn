import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 8,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: 'auto',
  },
  options: {
    backgroundColor: 'black',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 12,
    maxHeight: 400,
  },
  option: {
    marginLeft: 8,
    marginBottom: 14,
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
