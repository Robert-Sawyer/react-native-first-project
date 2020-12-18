import React, {useState} from 'react'
import {Button, TextInput, View, Modal, StyleSheet} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    //w momencie wprowadzania nowego celu w inpucie zmienia się stan i dzięki hookom wpisany cel jest od razu
    //aktualizowany w stanie i podmieniany jako enteredText
    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    //dodaję handler w którym pobieram funkcjonalność z komponentu rodzica - App.js, dostarczam w argumencie aktualny
    //stan enteredGoal i resetuję stan z powrotem na pusty string
    const handleAddGoal = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.row}>
                {/*handleGoalInput zostaje wywołany w momencie gdy user zaczyna coś wpisywać, a wartość
                    w inpucie zostaje pokazana jako bieżący stan enteredGoal, czyli aktualnie wprowadzany
                    tekst*/}
                <TextInput
                    placeholder="Dodaj nowy cel"
                    style={styles.input}
                    onChangeText={handleGoalInput}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ANULUJ' onPress={props.onCancel} color='red'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="DODAJ" onPress={handleAddGoal}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    },
})

export default GoalInput
