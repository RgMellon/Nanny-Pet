import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 200px;
  background: #c6d3d5;

  justify-content: center;
  align-items: center;
`;

export const CircleImage = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 60px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const TextNome = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  margin-top: 8px;
`;

export const Detail = styled.View`
  width: 100%;
  height: 20px;
  background: #fff;
  margin-top: -15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const MenuItem = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 0.5px;
  border-color: #999999;
  margin-top: 40px;
  padding-left: 10px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Text = styled.Text`
  margin-top: 10px;
  font-size: 17px;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 10px;
  padding: 20px;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 10px;
  margin-left: -2px;
`;

export const Info = styled.View`
  margin-left: -50px;
  width: 200px;
`;
