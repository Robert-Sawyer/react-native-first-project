import React from 'react'
import {Text, View, StyleSheet} from "react-native";

const GoalItem = props => {
    return (
        // <Text> ma ograniczoną możliwośc stylowania, więc dlatego opakowuję go w kolejne View.
        // itemData.item.value jest po prostu wprowadzonym przez usera celem w postaci stringa.
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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
