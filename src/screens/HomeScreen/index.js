import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import ModalInput from '../../components/ModalInput';
import buttonStyles from '../../Styles/buttonStyles';

const HomeScreen = ({navigation}) => {
    const [notes, setNotes] = useState([]);
    const [isModalVisible, setModalVisibility] = useState(false);

    return (
        <View style={{flex: 1, padding: 15}}>
            <Text style={{fontSize: 24, marginBottom: 20}}>Anteckningar</Text>
            <FlatList
                data={notes}
                renderItem={({item}) => (
                    <ListItem
                        item={item}
                        onPress={() => navigation.navigate('NotesScreen', {note: item})}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={{...buttonStyles.buttonContainer, marginTop: 20}}>
                <Text style={buttonStyles.buttonText} onPress={() => setModalVisibility(true)}>
                    Lägg till anteckning
                </Text>
            </View>
            <ModalInput
                isVisible={isModalVisible}
                onClose={() => setModalVisibility(false)}
                onSubmit={(text, number) => setNotes([...notes, {text, number}])}
            />
        </View>
    );
};

export default HomeScreen;



