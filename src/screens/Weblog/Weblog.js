import { View,FlatList, Text,TouchableOpacity,StyleSheet,TextInput,SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import Header from '../../components/weblog/header';
import CommentItem from '../../components/weblog/CommentItem';
import AddComment from '../../components/weblog/addcomment';

const Weblog = () => {
  const [contents,setContents] = useState([
    {text: '안농 ^0^',key:'1'},
    {text:'다덜..하이루..^^..',key:'2'} 
  ]); 
  const pressHandler = (key)=>{
    setContents((prevContents)=>{
      return prevContents.filter(contents=> contents.key!= key); 
    })};

  const submitHandler= (text)=>{
    setContents((prevContents)=>{
      return [
        {text: text, key:Math.random().toString() },
        ...prevContents
      ];
    })
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
        <Header/>
        </View> 
        <View style={styles.guestbook}>
        <AddComment submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={contents}
          renderItem={({item})=> (
            <CommentItem item={item} pressHandler={pressHandler}/>
          )}
          >
          </FlatList>
        </View>
        </View> 

      </SafeAreaView>
    );
};

export default Weblog;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // 혹은 'column'
      backgroundColor: '#fff',
      width:'100%',
      alignItems: 'center',
    },
    list:{
      marginTop:20,
    },
    input: {
      borderWidth:1,
      width:330,
      borderBottomColor:'gray',

    },
    titleText:{
      flex: 1,
      fontSize:20,
      color:'#fff',
    },
    title:{
      height:50,
      backgroundColor: 'orange',
      justifyContent: "center",
      flexDirection: 'row',
      alignItems: "center",
     
    },
    guestbook:{
      width:'100%',
      padding:20,
    },
    post : {
      height:500,
      
    },

  });
