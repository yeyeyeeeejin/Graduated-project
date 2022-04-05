import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,Button} from 'react-native';
import React, { useState,useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { InputFieldDiary, InputTitle, InputWrapper,Boundary, SubmitBtn, SubmitBtnText, DiaryBtn, DiaryBtnText, DiaryBtnWapper } from '../../../styles/AddPost';
import { fonts } from 'react-native-elements/dist/config';
import DatePicker from '../../components/DatePicker/DatePicker';
import ImagePicker from 'react-native-image-crop-picker';

const AddDiary = () =>{
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
    

    return(
        <SafeAreaView style= {styles.container}>
            <InputWrapper >
            <View style= {styles.Wapper}>
            <DatePicker/>
            <DiaryBtn onPress={takePhotoFromCamera}>
                    <DiaryBtnText>카메라</DiaryBtnText>
                </DiaryBtn>
                <DiaryBtn onPress={choosePhotoFromLibrary}>
                    <DiaryBtnText>갤러리</DiaryBtnText>
                </DiaryBtn>
            </View>

            <InputTitle
                placeholder="제목입력.."
            />
            <Boundary/>
            <View style= {styles.Wapper}>
                <DiaryBtn>
                    <DiaryBtnText>굵게</DiaryBtnText>
                </DiaryBtn>
                <DiaryBtn>
                    <DiaryBtnText>밑줄</DiaryBtnText>
                </DiaryBtn>
                <DiaryBtn>
                    <DiaryBtnText>기울기</DiaryBtnText>
                </DiaryBtn>
                <DiaryBtn>
                    <DiaryBtnText>글자크기</DiaryBtnText>
                </DiaryBtn>
            </View>
            <InputFieldDiary
            placeholder="내용입력.."
            multiline
            numberOfLines={10}
            />

                <DiaryBtn>
                    <DiaryBtnText>저장</DiaryBtnText>
                </DiaryBtn>
            </InputWrapper>
        </SafeAreaView>
    );

};

export default AddDiary;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',

    },
    Wapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        margin:10,
    }

})
