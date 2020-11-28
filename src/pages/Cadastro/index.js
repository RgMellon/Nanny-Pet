import React from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import Header from "../../components/Header";

const Cadastro = () => {
  const navigation = useNavigation();

  function handleNext() {
    Alert.alert("Cadastrado");
  }

  return (
    <S.Container>
      <Header />

      <S.Detail />

      <S.Content>
        <S.Title> Fazer Cadastro </S.Title>

        <S.TextInput placeholder={"Seu nome"} />
        <S.TextInput placeholder={"Seu email"} />
        <S.TextInput placeholder={"Sua senha"} secureTextEntry={true} />

        <S.ButtonNext onPress={handleNext}>
          <S.ButtonNextText> Cadastrar </S.ButtonNextText>
        </S.ButtonNext>

        <S.ButtonGoBack
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <S.ButtonGoBackText> Voltar para login </S.ButtonGoBackText>
        </S.ButtonGoBack>
      </S.Content>
    </S.Container>
  );
};

export default Cadastro;
