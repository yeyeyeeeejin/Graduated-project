import { View,Text,StyleSheet,TextInput,SafeAreaView} from 'react-native';
import React,{useState} from 'react';

export default function Header() {


    return (
      <View style={styles.header}>
      <Text style={styles.title}>방명록</Text>
      </View>



  );
};

const styles = StyleSheet.create({

    header:{
      height:50,
      width:'100%',
      backgroundColor: 'orange',
      justifyContent: "center",
      flexDirection: 'row',
      alignItems: "center",
      
    },
    title:{
      textAlign:'center',
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',

    },
  });
