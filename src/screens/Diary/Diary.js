
import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,} from 'react-native';
import React, { useState,useEffect } from 'react';
import {Agenda} from 'react-native-calendars';
import { Card } from 'react-native-paper';

const timeToString =(time)=> {
   const date =new Date(time);
  return date.toISOString().split('T')[0];
};

const Diary = () => {

  const [items,setItems]=useState({
    '2022-04-01':[{name: 'test1', cookies:true}],
    '2022-04-02':[{name: 'test2', cookies:false}],
  });
  useEffect(() => {
    //run once
    const getData= async () =>{
      const response = await
      fetch('https://jsonplaceholder.typicode.com/posts');//짭 api
    const data  = await response.json();

    console.log(data);
  };
    getData();
  },[]);



  const loadItems=(day)=>{
    setTimeout(()=>{
      for(let i=-15; i<85; i++){
        const time =day.timestamp + i *24 *60*60*1000;
        const strTime =timeToString(time);
        if(!items[strTime]){
          items[strTime]=[];
          const numItems =Math.floor(Math.random()*3+1);
          for(let j=0;j<numItems;j++){
            items[strTime].push({
              name:'Itmea for' + strTime +'#'+j,
            height:Math.max(50,Math.floor(Math.random()*150)),
            });
          }
        }
      }
    const newItems ={};
    Object.keys(items).forEach((key)=>{newItems[key]=items[key];});
    setItems(newItems);
  },1000);
}
   
const renderItem = (item : Item )=>{
  return (
    <View Style={styles.itemConstainer}>
    <Card>
    <Card.Content>
    <Text>{item.name}</Text>
    <Text>{item.cookies ? '🌮🥙🍕🍇':'🍤🍙🍔🍭'}</Text>
    </Card.Content>
    </Card>
    </View>
  );
};

    return (
      <SafeAreaView style={{flex:1}}>
      <Agenda 
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2022-04-01'}
      renderItem={renderItem}
      //renderItem={this.renderItem.bind(this)}
      //renderEmptyDate={this.renderEmptyDate.bind(this)}
      //rowHasChanged={this.rowHasChanged.bind(this)}
      />
      </SafeAreaView>
  );
};

export default Diary;
const styles = StyleSheet.create({
  items:{
    marginRight:10,
    marginTop:17
  },
  memoCard:{
    flexDirection: 'row',
    justifyContent:'space-between', 
    alignItems:'center',
  },

  });
