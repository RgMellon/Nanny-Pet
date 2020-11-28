import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HeaderHome = styled.View`
  width: 100%;
  background: #c6d3d5;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 110px;
  height: 110px;
  margin-top: 10px;
  border-radius: 60px;
`;

export const Nome = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 2px;
`;

export const Content = styled.View`
  padding: 20px;
  background: #fff;
`;

export const Text = styled.Text`
  margin-top: 60px;
`;
export const Descricao = styled.Text`
  margin-top: 30px;
`;
export const Detail = styled.View`
  width: 100%;
  height: 20px;
  background: #fff;
  margin-top: -15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;
export const Servicos = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const Contato = styled.TouchableOpacity`
  background: #659029;
  margin-top: 40px;

  align-items: center;
  border-radius: 8px;
  width: 100%;
  /* height: 50px; */
  padding: 15px;

  /* justify-content: space-around; */
  flex-direction: row;
`;

export const Contato2 = styled.TouchableOpacity`
  background: #ffbd10;
  margin-top: 20px;
  padding: 15px;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  height: 50px;

  /* justify-content: space-around; */
  flex-direction: row;
`;

export const ContatoText = styled.Text`
  color: #fff;
  margin-left: 20px;
`;
