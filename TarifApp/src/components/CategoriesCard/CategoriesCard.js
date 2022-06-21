import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./CategoriesCard.style";

const Categories = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: props.category.strCategoryThumb }} style={styles.image} />
                <Text style={styles.title}>{props.category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Categories;