import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ListProvider = styled.FlatList``;

export const ListProviderTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  width: 100%;
  /* height: 100px; */
  padding: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  margin-top: 15px;

  flex-direction: row;
`;

export const ImageProfile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const ContentCard = styled.View`
  margin-left: 20px;
`;

export const Name = styled.Text`
  /* font-weight: bold; */
  font-size: 15px;
`;

export const ContentServices = styled.View`
  flex-direction: row;
  margin-left: 5px;
`;

export const Service = styled.Text`
  color: #999;
  font-size: 12px;
  margin-right: 10px;
  margin-top: 5px;
`;

export const ContentStars = styled.View`
  margin-top: 10px;
  flex-direction: row;
  margin-right: 10px;
`;
