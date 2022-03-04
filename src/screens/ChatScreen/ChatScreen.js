import React, { useState, useCallback, useEffect } from 'react'
import {StyleSheet, Text, View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
const ChatScreen= () => {
  const [messages, setMessages] = useState([]);
 useEffect(() => {
    setMessages([
         {
            _id: 0, 
            text: '부적절하거나 불쾌감을 줄 수 있는 대화는 삼가 부탁드립니다.', 
            createdAt: new Date().getTime(), 
            system: true, 
          },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  return (
    
    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
  />
    );
  };

export default ChatScreen;