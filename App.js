import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    //dodaję stan - listę celów, która za pomocą .map będzie potem wyświetlana pod inputem
    const [allGoals, setAllGoals] = useState([])

    //obsługuję ustawianie celów do tablicy celów - funkcja wewnątrz set... kopiuje poprzednią listę celów,
    //tworzy nową tablicę, wprowadza do niej starą zawartość i dodaje na końcu świeżo wprowadzony cel
    //UPDATE: po opakowaniu listy wyświetlanych celów każdy nowy cel wrzucam do obiektu, ponieważ renderowane elementy
    //muszą mieć key/id, a we FlatList tablica danych powinna mieć taka postać, ponieważ flatList nie wspiera stringów,
    //więc najlepiej opakować to w obiekt i przy okazji dodać id/key
    //Math.random nie jest dobrym rozwiązaniem bo id/key może się wtedy powtórzyć, ale do potrzeb tego projektu wystarczy
    const handleAddGoal = (goalTitle) => {
        setAllGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
    }

    return (
        <View style={styles.screen}>
            <GoalInput
                addGoal={handleAddGoal}
            />
            {/*flatList jest w celu opakowywania list które mogą być bardzo długie i żeby nie renderowały
            się wszystkie jej elementy, nawet te niewidoczne to wykorzystuję FL - zwiększa wydajnośc aplikacji i jest
            lepszym rozwiązaniem niż Scrollview - dobre do krótkich list. Właściwośc data musi
            wskazywac na tablicę, którą chcę opakować, w tym przypadku to tablica wszystkich celów.
            Druga właściwośc to renderItem, która przyjmuje funkcję renderującą elementy, tutaj zamiast
            allGoals.map*/}

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={allGoals}
                renderItem={itemData => (
                    <GoalItem title={itemData.item.value}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});
