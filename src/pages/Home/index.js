import React from "react";

import Header from "../../components/Header";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <Header />

      <S.CategoryCard>
        <S.ContentImageCategory>
          <S.ImageCategory />
        </S.ContentImageCategory>

        <S.Title></S.Title>
      </S.CategoryCard>
    </S.Container>
  );
};

export default Home;
