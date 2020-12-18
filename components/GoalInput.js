import React, {useState} from 'react'
import {Button, TextInput, View, StyleSheet} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    //w momencie wprowadzania nowego celu w inpucie zmienia się stan i dzięki hookom wpisany cel jest od razu
    //aktualizowany w stanie i podmieniany jako enteredText
    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
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
            {/*używam funkcji bind aby przekazać do handlera w App.js wartośc wprowadzoną w inpucie (enteredGoal) ALE
            TYLKO WTEDY gdy funkcja zostanie rzeczywiście wykonana (w momencie wciśnięcia buttona)
            Pierwszyagument dotyczy tego do czego powinno odnosić się słowo kluczowe, a drugi to właściwy argument
            który ma zostać przekazany do danej funkcji*/}
            {/*zamiast bind mogę tez użuć zamiennie () => props.addGoal(enteredGoal)*/}
            <Button title="DODAJ" onPress={props.addGoal.bind(this, enteredGoal)}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInput
