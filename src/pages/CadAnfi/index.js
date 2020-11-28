import React from "react";
import { Alert, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import trela from "../../assets/trela.png";
import cao from "../../assets/cao.png";
import canil from "../../assets/canil.png";

const CadAnfi = () => {
  function handleNext() {
    Alert.alert("Salvo");
  }

  return (
    <ScrollView>
      <S.Container>
        <S.ContentImage>
          <S.ButtonPhoto>
            <MaterialIcons name="photo-camera" size={30} color="#FFC249" />
          </S.ButtonPhoto>
          <S.Name> Moana da Silva </S.Name>
        </S.ContentImage>

        <S.Detail />

        <S.Wrapper>
          <S.Content>
            <S.TextInput placeholder={"Sua Cidade"} />
            <S.TextInput placeholder={"Seu email"} />
            <S.TextInput placeholder={"Seu Telefone"} />
            <S.TextSobre
              multiline={true}
              numberOfLines={8}
              placeholder={"Um pouco sobre você"}
            />
          </S.Content>

          <S.Hr />
          <S.Text>Escolha o serviço a oferecer</S.Text>

          <S.ContainerMenu>
            <S.Service>
              <S.BackgroundImage>
                <S.IconSercive source={trela} />
              </S.BackgroundImage>
              <S.TextItem>Passeio</S.TextItem>
            </S.Service>

            <S.Service>
              <S.BackgroundImage>
                <S.IconSercive source={canil} />
              </S.BackgroundImage>
              <S.TextItem>Passeio</S.TextItem>
            </S.Service>

            <S.Service>
              <S.BackgroundImage>
                <S.IconSercive source={cao} />
              </S.BackgroundImage>
              <S.TextItem>Passeio</S.TextItem>
            </S.Service>
          </S.ContainerMenu>

          <S.ContainerButton>
            <S.ButtonNext onPress={handleNext}>
              <S.ButtonNextText> Salvar </S.ButtonNextText>
            </S.ButtonNext>
          </S.ContainerButton>
        </S.Wrapper>
      </S.Container>
    </ScrollView>
  );
};

export default CadAnfi;
