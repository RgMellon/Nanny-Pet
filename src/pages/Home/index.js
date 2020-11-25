import React from "react";

import * as S from "./styles";
import dog from "../../assets/dog.png";

import CatergoryList from "../../components/CategoryList";
import ServiceProviderList from "../../components/ServiceProviderList";

const Home = () => {
  return (
    <S.Container>
      <S.HeaderHome>
        <S.Image source={dog} />

        <S.Message> Encontre o melhor serviço para seu pet ! </S.Message>
      </S.HeaderHome>

      <S.Content>
        <CatergoryList />

        <ServiceProviderList />
      </S.Content>
    </S.Container>
  );
};

export default Home;
