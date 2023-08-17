import React from 'react';
import {Pressable, Text, View, StyleSheet } from 'react-native';

const Button = ({title, onPress}) => {
  return (
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.button]}>
          <View style={styles.buttonInner}>
              <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonInner: {
        backgroundColor: '#636e72',  // A soft gray color
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Button;
