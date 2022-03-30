import { View,Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import { LongPressGestureHandler } from 'react-native-gesture-handler';


export default function CommentItem({item,pressHandler}) {

    
    return (

            <TouchableOpacity onPress={()=>pressHandler(item.key)} >
                <Text  style={styles.text}>{item.text}
                </Text>
            </TouchableOpacity>
    )
}
const styles=StyleSheet.create({

    text:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderRadius:10,
        fontSize:15,
        color:'#000'
    }
})