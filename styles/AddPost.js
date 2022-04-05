import styled from 'styled-components';

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
`;

export const Boundary = styled.View`
    borderWidth:1;
    borderColor: #fff;
    borderBottomColor:#999;
    justify-content: center;
    align-items: center;
    width:90%;
    height:30;
`;

export const InputTitle = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-align: center;
    width:90%;
    margin: 15px;

`;

export const InputFieldDiary = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-align: center;
    width:90%;
    margin-bottom: 15px;
`;

export const DiaryBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #FFA500;
    padding: 10px 25px;

    /*    margin:10px;
    width:100;
    border-radius: 5px;
    height:40;*/

`;

export const DiaryBtnText = styled.Text`
    font-size: 15px;
    color: #fff;
`;

export const InputField = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
    width:90%;
    margin-bottom: 15px;
`;

export const AddImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-bottom: 15px;
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
    font-size: 18px;
    font-family: 'Lato-Bold';
    font-weight: bold;
    color: #2e64e5;
`;