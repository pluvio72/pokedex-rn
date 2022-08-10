import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getTextColor} from '../../util/colors';

const Badge = ({text, color}) => {
  return (
    <View style={[{backgroundColor: color}, styles.badge]}>
      <Text style={[{color: getTextColor(color)}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 3,
    marginLeft: 2,
    marginRight: 2,
  },
});

export default Badge;
