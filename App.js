import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.screen}>
            <View style={styles.row}>
                <TextInput
                    placeholder="Dodaj nowy cel"
                    style={styles.input}
                />
                <Button title="DODAJ"/>
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
});
