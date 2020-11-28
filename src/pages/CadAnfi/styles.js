import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Wrapper = styled.View`
  padding: 20px;
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
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #759542;
  font-weight: bold;
  font-size: 25px;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  margin-top: 50px;

  padding: 10px;
  border-width: 1px;
  border-color: #d6d6d6;
`;

export const ContainerButton = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;

  align-items: center;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #ffc249;
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

export const ButtonPhoto = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 100px;
  margin-top: 20px;
`;

export const TextSobre = styled.TextInput`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  margin-top: 50px;
  padding: 10px;
  border-width: 1px;
  border-color: #d6d6d6;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const ContainerMenu = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Text = styled.Text`
  color: #999999;
  margin-top: 20px;
  font-weight: bold;
`;

export const TextItem = styled.Text`
  font-size: 17px;
  margin-left: 10px;
`;

export const Hr = styled.View`
  height: 0.5px;
  width: 100%;
  background: #707070;
  margin-top: 30px;
`;

export const IconSercive = styled.Image`
  width: 30px;
  height: 40px;
`;

export const Service = styled.TouchableOpacity`
  width: 46%;
  border-radius: 6px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #d6d6d6;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ffbd10;

  justify-content: center;
  align-items: center;
`;
