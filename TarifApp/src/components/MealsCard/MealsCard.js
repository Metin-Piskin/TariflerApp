import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./MealsCard.style";

const MealsCard = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.meals.strMealThumb }} />
                <View style={styles.title_container}>
                </View>
                <Text style={styles.title} numberOfLines={1}>{props.meals.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default MealsCard;