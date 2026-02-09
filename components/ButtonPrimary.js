import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonPrimary = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2634BA', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF', 
    fontFamily: 'RethinkSans',
    fontSize: 17,
  },
});

export default ButtonPrimary;
