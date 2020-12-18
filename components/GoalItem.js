import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        // <Text> ma ograniczoną możliwośc stylowania, więc dlatego opakowuję go w kolejne View.
        // itemData.item.value jest po prostu wprowadzonym przez usera celem w postaci stringa.
        //TouchablOpacity oznacza specjalny komponent do opakowywania innych komponentów, dzięki któremu staja się
        //'dotykalne' i posiada wbudowane właściwości które definiują rodzaj dotknięcia
        //inne komponenty touchable to m.in TouchableHighlight - mrugające tło, albo TouchableNativeFeedback - wszystko
        //można konfigurować - efekty wizualne, itp (dokumentacja)
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        listItem: {
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#ccc',
            borderColor: 'black',
            borderWidth: 1,
        }
    }
)

export default GoalItem
