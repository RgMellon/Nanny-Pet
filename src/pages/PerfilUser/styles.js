import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    background: #fff;
    margin-right: 20px;
    
`;

export const ContentImage = styled.View`
    width: 100%;
    height: 200px;
    background: #c6d3d5;

    justify-content: center;
    align-items: center;
`;

export const CircleImage = styled.View`
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 60px;
    margin-top: 15px;
`;

export const TextNome = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const Detail = styled.View`
    width: 100%;
    height: 20px;
    background: #fff;
    margin-top: -15px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;

export const TextInput = styled.TouchableOpacity`
    width: 320px;
    height: 50px;

    border-radius: 8px;
    border-bottom-width: 1px;
    margin-top: 40px;
    padding-left: 10px;

`;

export const Text = styled.Text`
    margin-top: 10px;

`;