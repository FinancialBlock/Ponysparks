import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScreenList() {


    return (
        <View style={styles.container}>
                <View style={styles.buttonContainer}>

                        <Text >Flip Camera</Text>

                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',

    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
});