import React,{useState} from 'react';
import { View,FlatList, Text,TouchableOpacity,StyleSheet,TextInput,} from 'react-native';
import { Button } from 'react-native-paper';

export default function AddComment({submitHandler}){

    const[text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);

    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='방명록 작성하기'
            onChangeText={changeHandler}
            />
            <TouchableOpacity onPress={()=> submitHandler(text)} style={styles.button}>
                <Text style={styles.buttonText}>작성하기</Text>
            </TouchableOpacity>
        </View>
    )

};
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingvertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    button:{
        marginLeft:270,
        width:100,
        backgroundColor:'orange',
        height:35,
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:18,
    }
});