import React, {useState} from 'react';
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
    //UPDATE: po opakowaniu listy wyświetlanych celów każdy nowy cel wrzucam do obiektu, ponieważ renderowane elementy
    //muszą mieć key/id, a we FlatList tablica danych powinna mieć taka postać, ponieważ flatList nie wspiera stringów,
    //więc najlepiej opakować to w obiekt i przy okazji dodać id/key
    //Math.random nie jest dobrym rozwiązaniem bo id/key może się wtedy powtórzyć, ale do potrzeb tego projektu wystarczy
    const handleAddGoal = () => {
        setAllGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}])
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
            {/*flatList jest w celu opakowywania list które mogą być bardzo długie i żeby nie renderowały
            się wszystkie jej elementy, nawet te niewidoczne to wykorzystuję FL - zwiększa wydajnośc aplikacji i jest
            lepszym rozwiązaniem niż Scrollview - dobre do krótkich list. Właściwośc data musi
            wskazywac na tablicę, którą chcę opakować, w tym przypadku to tablica wszystkich celów.
            Druga właściwośc to renderItem, która przyjmuje funkcję renderującą elementy, tutaj zamiast
            allGoals.map*/}
            {/*<Text> ma ograniczoną możliwośc stylowania, więc dlatego opakowuję go w kolejne View.
            itemData.item.value jest po prostu wprowadzonym przez usera celem w postaci stringa.*/}
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={allGoals}
                renderItem={itemData => (
                    <View style={styles.listItem}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
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
