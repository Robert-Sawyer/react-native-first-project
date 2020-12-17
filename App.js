import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList} from 'react-native';

export default function App() {
    //dodaję stan - wprowadzony cel i funkcję któa go ustawia, oraz listę celów, która za pomocą .map będzie
    //potem wyświetlana pod inputem
    const [enteredGoal, setEnteredGoal] = useState('')
    const [allGoals, setAllGoals] = useState([])

    //w momencie wprowadzania nowego celu w inpucie zmienia się stan i dzięki hookom wpisany cel jest od razu
    //aktualizowany w stanie i podmieniany jako enteredText
    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    //obsługuję ustawianie celów do tablicy celów - funkcja wewnątrz set... kopiuje poprzednią listę celów,
    //tworzy nową tablicę, wprowadza do niej starą zawartość i dodaje na końcu świeżo wprowadzony cel
    const handleAddGoal = () => {
        setAllGoals(currentGoals => [...currentGoals, enteredGoal])
    }

    return (
        <View style={styles.screen}>
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
                <Button title="DODAJ" onPress={handleAddGoal}/>
            </View>
            {/*zwykłe View nie ma wbudowanej opcji scrollowania, dlatego w przypadku elementów które
            powinny dać się przewijać wykorzystuję Scrollview - posiada wiele opcji, np. scrollowanie
            horyzontalne, itp, wszystko w dokumentacji*/}
            <ScrollView>
                {/*<Text> ma ograniczoną możliwośc stylowania, więc dlatego opakowuję go w kolejne View,
                i dodaję key, ponieważ każdy mapowany element musi posiadać klucz*/}
                {allGoals.map(goal =>
                    <View key={goal} style={styles.listItem}>
                        <Text>{goal}</Text>
                    </View>
                )}
            </ScrollView>
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
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
});
