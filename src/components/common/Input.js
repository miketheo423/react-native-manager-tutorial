import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { textInputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle} >{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        autoCapitalize='none'
        onChangeText={onChangeText}
        style={textInputStyle} />
    </View>
  );
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInputStyle: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    flex: 3
  }
}

export { Input };