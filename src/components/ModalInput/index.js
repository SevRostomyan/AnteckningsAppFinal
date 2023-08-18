import React, {useState} from 'react';
import {Modal, TextInput, View, TouchableWithoutFeedback, Keyboard, Pressable, Text, StyleSheet} from 'react-native';

import buttonStyles from '../../Styles/buttonStyles';


const ModalInput = ({isVisible, onClose, onSubmit}) => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={text}
                            onChangeText={setText}
                            style={styles.input}
                            keyboardType="default"
                            placeholder="Skriv din anteckning här..."
                            placeholderTextColor="#888"
                        />

                        <TextInput
                            value={number}
                            onChangeText={setNumber}
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Skriv in ett nummer"
                            placeholderTextColor="#888"
                        />

                        <View style={styles.buttonsContainer}>
                            <Pressable style={buttonStyles.buttonContainer} onPress={() => {
                                onSubmit(text, number);
                                setText('');
                                setNumber('');
                                onClose();
                            }}>
                                <Text style={buttonStyles.buttonText}>Lägg till</Text>
                            </Pressable>

                            <Pressable style={buttonStyles.buttonContainer} onPress={() => {
                                setText('');
                                setNumber('');
                                onClose();
                            }}>
                                <Text style={buttonStyles.buttonText}>Avbryt</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
        fontSize: 18
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ModalInput;
