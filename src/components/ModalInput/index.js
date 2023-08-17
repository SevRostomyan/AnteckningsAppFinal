import React, { useState } from 'react';
import { Modal, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../Button';

const ModalInput = ({ isVisible, onClose, onSubmit }) => {
    const [text, setText] = useState('');

    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', padding: 20, backgroundColor: 'white' }}>
                        <TextInput
                            value={text}
                            onChangeText={setText}
                            style={{ borderBottomWidth: 1, marginBottom: 15 }}
                            keyboardType="default"
                        />
                        <Button
                            title="Lägg till"
                            onPress={() => {
                                onSubmit(text);
                                setText('');
                                onClose();
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ModalInput;
