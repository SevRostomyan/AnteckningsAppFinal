import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';

const ListItem = ({item, onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={{
            padding: 15,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image source={require('../../../assets/images/noteIcon.png')}
                   style={{width: 30, height: 30, marginRight: 10}}
            />
            <View style={{flexDirection: 'column'}}>
                <Text>{item.text}</Text>
                <Text>{String(item.number)}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
);

export default ListItem;
