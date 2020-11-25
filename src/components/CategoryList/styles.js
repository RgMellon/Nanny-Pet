import styled from "styled-components/native";

export const Container = styled.View`
  width: 170px;
  height: 70px;
  border: 1px solid #fafafa;
  border-radius: 8px;
  padding: 10px 20px;
  margin-right: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImageCategory = styled.View`
  width: 45px;
  height: 45px;
  background: #ffc249;
  border-radius: 45px;

  justify-content: center;
  align-items: center;
`;

export const ImageCategory = styled.Image`
  width: 35px;
  height: 35px;
`;

export const Title = styled.Text`
  color: #333;
`;

export const CatergoryList = styled.FlatList``;

export const CategoryTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
`;
