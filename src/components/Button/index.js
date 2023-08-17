import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={{padding: 10, backgroundColor: 'blue'}}>
        <Text style={{color: 'white'}}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
