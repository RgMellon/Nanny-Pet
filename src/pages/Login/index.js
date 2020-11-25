import React from "react";

import * as S from "./styles";

import Header from "../../components/Header";

const Login = () => {
  function handleNext() {
    Alert.aler("oi");
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
        <S.Cadastre>
          <S.CadastreText> Cadastre-se </S.CadastreText>
        </S.Cadastre>
      </S.Content>
    </S.Container>
  );
};

export default Login;
