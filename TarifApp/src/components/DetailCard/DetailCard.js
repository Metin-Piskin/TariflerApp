import React from "react";
import { Text, View, Image, TouchableOpacity, Linking, ScrollView } from "react-native";
import styles from "./DetailCard.style";

const DetailCard = (props) => {
    return (

        <ScrollView style={styles.container}>
            <View style={styles.image_container} >
                <Image source={{ uri: props.meals.strMealThumb }} style={styles.image} />
            </View>
            <View style={styles.body_container}>
                <Text style={styles.title}>{props.meals.strMeal}</Text>
                <Text style={styles.area}>{props.meals.strArea}</Text>
                <View style={{ borderColor: "#808e9b", borderWidth: 1 }}></View>
                <Text style={styles.instructions}>{props.meals.strInstructions}</Text>
                <TouchableOpacity style={styles.youtube} onPress={() => Linking.openURL(props.meals.strYoutube)}>
                    <Text style={styles.youtube_text}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}
export default DetailCard;
