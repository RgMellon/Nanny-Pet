import React from "react";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import * as S from "./styles";

const PerfilUser = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContentImage>
        <S.CircleImage>
          <MaterialIcons name="photo-camera" size={30} color="#FFC249" />
        </S.CircleImage>
        <S.TextNome>Nome Cuidador</S.TextNome>
      </S.ContentImage>

      <S.Detail />

      <S.Content>
        <S.MenuItem
          onPress={() => {
            navigation.navigate("CadAnfi");
          }}
        >
          <FontAwesome5 solid name="paw" size={24} color="#999" />

          <S.Info>
            <S.Text>Me tornar anfitrião</S.Text>
            <S.Description> Faça parte da comunidade </S.Description>
          </S.Info>

          <FontAwesome5 solid name="angle-right" size={18} color="#FFC249" />
        </S.MenuItem>

        <S.MenuItem 
           onPress={() => {
            navigation.navigate("EditPerfil");
          }}
        >
          <FontAwesome5 solid name="address-card" size={24} color="#999" />

          <S.Info>
            <S.Text>Edita perfil</S.Text>
            <S.Description> Edite seu perfil </S.Description>
          </S.Info>

          <FontAwesome5 solid name="angle-right" size={18} color="#FFC249" />
        </S.MenuItem>
      </S.Content>
    </S.Container>
  );
};

export default PerfilUser;
