import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import styles from './select.styles';
import downArrow from '../../assets/icons/down20.png';
import upArrow from '../../assets/icons/up20.png';

const Select = ({options, onSelect, defaultOption}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(defaultOption ?? options[0]);

  const selectOption = item => {
    setSelected(item);
    setShowOptions(false);
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowOptions(!showOptions)}>
        <View
          style={[
            styles.input,
            showOptions
              ? {borderBottomRightRadius: 0, borderBottomLeftRadius: 0}
              : {},
          ]}>
          <Text>{selected ? selected.name : ''}</Text>
          {showOptions ? (
            <Image style={styles.arrow} source={upArrow} />
          ) : (
            <Image style={styles.arrow} source={downArrow} />
          )}
        </View>
      </Pressable>
      {showOptions && (
        <ScrollView
          style={styles.options}
          bounces={false}
          contentInset={{bottom: 12}}>
          {options.map(option => (
            <Pressable onPress={() => selectOption(option)} key={option.name}>
              <Text style={styles.option}>{option.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Select;
