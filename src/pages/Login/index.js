import React from "react";

import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import Header from "../../components/Header";

const Login = () => {
  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate("HomeTabNavigator");
  }

  function handleRedirectToRegister() {
    navigation.navigate("Cadastro");
  }

  return (
    <S.Container>
      <Header />

      <S.Detail />
      <S.Title> Fazer Login</S.Title>

      <S.TextInput placeholder="E-mail" />

      <S.TextInput placeholder="Sua senha" secureTextEntry={true} />

      <S.ButtonLogin onPress={handleNext}>
        <S.ButtonLoginText> Login </S.ButtonLoginText>
      </S.ButtonLogin>
      <S.Content>
        <S.Text> Ainda não tem conta ?</S.Text>
        <S.Cadastre onPress={handleRedirectToRegister}>
          <S.CadastreText> Cadastre-se </S.CadastreText>
        </S.Cadastre>
      </S.Content>
    </S.Container>
  );
};

export default Login;
