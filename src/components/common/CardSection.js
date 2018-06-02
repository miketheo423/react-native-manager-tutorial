import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // use the container style first, but if there are inlines, use those styles instead
    // by wrapping the style object in an array and passing in both
    <View style={[styles.containerStyle, props.style]}>
       {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };