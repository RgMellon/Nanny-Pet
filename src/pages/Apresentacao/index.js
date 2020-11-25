import React from "react";
import { Alert } from "react-native";

import * as S from "./style";

import dog from "../../assets/dog.png";

const Apresentacao = () => {
  function handleNext() {
    Alert.alert("oi");
  }

  return (
    <S.Container>
      <S.ContentImage>
        <S.Image source={dog} />
      </S.ContentImage>

      <S.Detail />

      <S.Content>
        <S.Title> Hospede seu pet</S.Title>
        <S.SubTitle>
          Procurando um hotel para seu amiguinho? Chegou ao lugar certo!{" "}
        </S.SubTitle>
      </S.Content>

      <S.ButtonNext onPress={handleNext}>
        <S.ButtonNextText> Conhecer Nanny Pet</S.ButtonNextText>
      </S.ButtonNext>
    </S.Container>
  );
};

export default Apresentacao;
