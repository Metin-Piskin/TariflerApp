import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d2dae2",
    },
    body_container:{
        padding:10,
    },
    image_container:{},
    image:{
        width:deviceSize.width,
        height:deviceSize.height / 3 ,
        // resizeMode:"contain",
        backgroundColor:"#F7768F",
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"#ff0000"
    },
    area:{
        textAlign:"left",
        fontWeight:"bold",
        fontSize:20,
        color:"#ff0000",
    },
    instructions:{
        fontStyle:"italic",
        marginVertical:5,
        fontSize:18,
        color:"#eee",
        color:"black",
    },
    youtube:{
        marginVertical:10,
        padding:13,
        backgroundColor:"#ff0000",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
    },
    youtube_text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
    },
    
})