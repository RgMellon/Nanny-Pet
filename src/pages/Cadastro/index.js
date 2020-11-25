import React from "react";
import { Alert, TextInput } from "react-native";

import * as S from "./styles";

import dog from "../../assets/dog.png";

const Cadastro = () => {
  function handleNext() {
    Alert.aler("Cadastrado");
  }

  return (
    <S.Container>
      <S.ContentImage>
        <S.Image source={dog} />
      </S.ContentImage>

      <S.Detail />

      <S.Content>
        <S.Title> Fazer Cadastro </S.Title>

        <S.TextInput placeholder={"Seu nome"} />
        <S.TextInput placeholder={"Seu email"} />
        <S.TextInput placeholder={"Sua senha"} secureTextEntry={true} />

        <S.ButtonNext onPress={handleNext}>
          <S.ButtonNextText> Cadastrar </S.ButtonNextText>
        </S.ButtonNext>
      </S.Content>
    </S.Container>
  );
};

export default Cadastro;
