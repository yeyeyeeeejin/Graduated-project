import { View, Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


const dataList=[{key:'내사진'},{key:'친구들사진'},{key:'HELLO'},{key:'추억..'}]
const Album = () => {
  renderItem=({item,index})=> {
    return(
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    )
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.title}>앨범</Text>
      </View>

      <FlatList
      data= {dataList}
      renderItem={this.renderItem}
      keyExtractor={(Item,index)=> index.toString()}
      numColumns={2}
      />
      </SafeAreaView>
    
  );
};

export default Album;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    item:{
      backgroundColor:'#e7e9eb',
      alignItems:'center',
      justifyContent:'center',
      height:100,
      flex:1,
      margin:1,
    }, 
    itemText:{
      
    },
  });
