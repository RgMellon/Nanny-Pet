import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 20px;

  align-items: center;
  /* justify-content: space-around; */
`;

export const ContentImage = styled.View`
  background: #c6d3d5;
  width: 100%;
  height: 200px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 160px;
`;

export const Content = styled.View`
  margin-top: 100px;
  padding: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #759542;
  font-weight: bold;
  font-size: 25px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: #333333;
  margin-top: 25px;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #ffc249;

  margin-top: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonNextText = styled.Text`
  font-size: 14px;
  color: #759542;
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
