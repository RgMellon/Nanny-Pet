import React from "react";
import {Alert } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import * as S from "./styles";

const EditPerfil = () => {
    function handleNext() {
        Alert.alert("Salvo");
      }
    return(
        <S.Container>
            <S.ContentImage>
                <S.ButtonPhoto>
                    <MaterialIcons name="photo-camera" size={30} color="#FFC249" />
                </S.ButtonPhoto>
                <S.Name> Nome Usuario </S.Name>
            </S.ContentImage>

            <S.Detail />
            <S.Content>
                <S.TextInput placeholder={"Nome"} />
                <S.TextInput placeholder={"E-mail"} />
                <S.TextInput placeholder={"Senha antiga"} />
                <S.TextInput placeholder={"Senha nova"} />

            <S.ButtonNext onPress={handleNext}>
                <S.ButtonNextText> Salvar alteração</S.ButtonNextText>
            </S.ButtonNext>
            </S.Content>

        </S.Container>
    );
};

export default EditPerfil;