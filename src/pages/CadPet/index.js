import React from "react";
import { Alert, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

const CadPet = () => {
    function handleNext() {
      Alert.alert("Salvo");
    }
  
    return (
      <S.Container>
        <S.ContentImage>
          <S.ButtonPhoto>
            <MaterialIcons name="photo-camera" size={30} color="#FFC249" />
          </S.ButtonPhoto>
          <S.Name> Adiciona foto </S.Name>
        </S.ContentImage>
  
        <S.Detail />
  
        <S.Content>
          <S.TextInput placeholder={"Nome"} />
          <S.TextInput placeholder={"Idade"} />
          <S.TextInput placeholder={"Porte"} />

          <S.ButtonNext onPress={handleNext}>
            <S.ButtonNextText> Salvar </S.ButtonNextText>
          </S.ButtonNext>
        </S.Content>
      </S.Container>
    );
  };
  
  export default CadPet;