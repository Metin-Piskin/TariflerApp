import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: 'orange',
        flex: 1
    },
    image: {
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').height / 4,
        borderRadius: 12
    },
    title_container: {
        pacity: 0.7,
        width: Dimensions.get('screen').width / 1.1,
        height: 60,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#2d3436',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        opacity: 0.5,
    },
    title: {
        fontSize: 30,
        position: 'absolute',
        bottom: 10,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
});