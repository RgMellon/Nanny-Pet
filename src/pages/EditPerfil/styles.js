import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const ContentImage = styled.View`
  background: #c6d3d5;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
export const ButtonPhoto = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 100px;
  margin-top: 10px;
`;
export const Image = styled.Image`
  width: 200px;
  height: 160px;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
export const Detail = styled.View`
  width: 100%;
  height: 20px;
  background: #fff;
  margin-top: -15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;
export const Content = styled.View`
  padding: 20px;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: #d6d6d6;
`;
export const ButtonNext = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #ffc249;

  margin-top: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonNextText = styled.Text`
  font-size: 14px;
  color: #759542;
  font-weight: bold;
`;