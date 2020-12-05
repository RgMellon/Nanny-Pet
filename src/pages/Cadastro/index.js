import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import Header from "../../components/Header";

import api from "../../services/api";

const Cadastro = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [load, setLoad] = useState(false);

  async function handleRegister() {
    setLoad(true);

    const response = await api.post("/user", {
      name,
      email,
      password,
    });

    setLoad(false);

    console.log(response.data);
  }

  return (
    <S.Container>
      <Header />

      <S.Detail />

      <S.Content>
        <S.Title> Fazer Cadastro </S.Title>

        <S.TextInput
          placeholder={"Seu nome"}
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <S.TextInput
          placeholder={"Seu email"}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <S.TextInput
          placeholder={"Sua senha"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <S.ButtonNext onPress={handleRegister}>
          {load && <ActivityIndicator />}
          {!load && <S.ButtonNextText>Cadastrar</S.ButtonNextText>}
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
