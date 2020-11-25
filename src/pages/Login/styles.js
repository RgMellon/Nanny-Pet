import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;

  align-items: center;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 200px;
  background: #c6d3d5;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 160px;
`;

export const Detail = styled.View`
  width: 100%;
  height: 20px;
  background: #fff;
  margin-top: -15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #759542;
  font-weight: bold;
  font-size: 25px;
  margin-top: 40px;
`;

export const TextInput = styled.TextInput`
  width: 320px;
  height: 50px;
  padding: 10px;

  border-radius: 8px;
  border-width: 1px;
  margin-top: 50px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #ffc249;

  margin-top: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonLoginText = styled.Text`
  font-size: 14px;
  color: #759542;
  font-weight: bold;
`;

export const Content = styled.View`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text``;

export const Cadastre = styled.TouchableOpacity``;

export const CadastreText = styled.Text`
  font-size: 14px;
  color: #759542;
  font-weight: bold;
`;
