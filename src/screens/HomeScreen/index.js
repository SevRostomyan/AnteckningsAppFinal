import React, {useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import ListItem from '../../components/ListItem';
import ModalInput from '../../components/ModalInput';

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
      <Button
        title="Lägg till anteckning"
        onPress={() => setModalVisibility(true)}
      />
      <ModalInput
        isVisible={isModalVisible}
        onClose={() => setModalVisibility(false)}
        onSubmit={text => setNotes([...notes, {text}])}
      />
    </View>
  );
};

export default HomeScreen;



