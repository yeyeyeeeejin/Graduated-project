
import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,Image} from 'react-native';
import React, { useState,useEffect } from 'react';
import {Agenda} from 'react-native-calendars';
import { Card } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const timeToString =(time)=> {
   const date =new Date(time);
  return date.toISOString().split('T')[0];
};



const Diary = () => {
  const navigation = useNavigation();

  const [items,setItems]=useState({
    '2022-04-04':[
      {name: 'test1', cookies:true},
    {name: 'test3', cookies:true}],
    '2022-04-05':[
      {name: 'test2', cookies:false},
    {name: 'test4', cookies:false}],
  }); 


  /*const loadItems=(day)=>{
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
}*/

//지우고 js파일 만들기 --> DiaryStyles.js
const renderItem = (item : Item )=>{
  return (
    <TouchableOpacity Style={styles.itemConstainer}>
    <Card>
    <Card.Content>
    <Image source={{uri: 'https://t1.daumcdn.net/cafeattach/MT4/648d42cb50cafc47f7d02fdfc380f91449afca84'}}
       style={{width:200, height: 150,marginTop:0}}/>
    <Text>{item.name}</Text>
    <Text>{item.cookies ? '🌮🥙🍕🍇':'🍤🍙🍔🍭'}</Text>
    </Card.Content>
    </Card>
    </TouchableOpacity>
  );
};

    return (
      <SafeAreaView style={{flex:1}}>
      <Agenda 
      markingType={'custom'}
      items={items}
      renderItem={renderItem}
      minDate={'2022-01-01'}
      maxDate={'2022-08-28'}
      pastScrollRange={5}
      futureScrollRange={5}
      theme={{
      todayTextColor: '#FFA500',
      selectedDayBackgroundColor: '#FFA500',
      }}
      />
        <ActionButton buttonColor="rgb(255, 165, 0)" title="다이어리작성" onPress={()=> navigation.navigate('AddDiary')}>
            <Icon name="createDiary" style={styles.actionButtonIcon} />

        </ActionButton>

      </SafeAreaView>
  );
};

export default Diary;

const styles = StyleSheet.create({
  itemConstainer:{
    marginRight:10,
    marginTop:17
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    selectedDay:{
      backgroundColor:'#FFCC64',
    }

  });
