import React from 'react';
import {View, Text} from 'react-native';

const NotesScreen = ({route}) => {
    const {note} = route.params;

    return (
        <View style={{flex: 1, padding: 15}}>
            <Text style={{fontSize: 24, marginBottom: 10}}> Text: {note.text}</Text>
            <Text style={{fontSize: 20}}> Number: {String(note.number)}</Text>
        </View>
    );
};

export default NotesScreen;
