import React,{useState,useEffect,useContext} from 'react'
import { View, Text ,Image,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import {FAB} from 'react-native-paper'
import { AuthContext } from '../utils/AuthProvider'

const MessagesScreen = ({navigation}) => {
     console.log(user)
    const [users,setUsers] = useState(null)
    const {user, logout} = useContext(AuthContext);
    const getUsers = async ()=>{
             const querySanp = await firestore().collection('users').where('uid','!=', user.uid).get()
             const allusers = querySanp.docs.map(docSnap=>docSnap.data())
            //  console.log(allusers)
            setUsers(allusers)
    }

    useEffect(()=>{
        getUsers()
    },[])

    const RenderCard = ({item})=>{
          return (
              <TouchableOpacity onPress={()=>navigation.navigate('CHAT',{name:item.name,uid:item.uid,
                
            })}>
              <View style={styles.mycard}>
                  <Image source={{uri:item.userImg}} style={styles.img}/>
                  <View>
                      <Text style={styles.text}>
                          {item.name}
                      </Text>
                      <Text style={styles.text}>
                          {item.email}
                      </Text>
                  </View>
              </View>
              </TouchableOpacity>
          )
    }
    return (
        <View style={{flex:1}}>
            <FlatList 
              data={users}
              renderItem={({item})=> {return <RenderCard item={item} /> }}
              keyExtractor={(item)=>item.uid}
            />
             <FAB
                style={styles.fab}
                icon="face-profile"
                color="black"
                onPress={() => navigation.navigate('Home')}
            />
            
        </View>
    )
}
export default MessagesScreen;

const styles = StyleSheet.create({
   img:{width:60,height:60,borderRadius:30,backgroundColor:"white"},
   text:{
       fontSize:18,
       marginLeft:15,
   },
   mycard:{
       flexDirection:"row",
       margin:3,
       padding:4,
       backgroundColor:"white",
       borderBottomWidth:1,
       borderBottomColor:'grey'
   },
   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:"white"
  },
 });