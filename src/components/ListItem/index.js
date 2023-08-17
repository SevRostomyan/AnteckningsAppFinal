import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

const ListItem = ({item, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={{padding: 15, borderBottomColor: 'grey', borderBottomWidth: 1}}>
      <Text>{item.text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default ListItem;
