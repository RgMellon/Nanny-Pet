import React from "react";
import { Alert, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

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

      <S.Content>
        <S.TextInput placeholder={"Sua Cidade"} />
        <S.TextInput placeholder={"Seu email"} />
        <S.TextInput placeholder={"Seu Telefone"} />
        <S.TextSobre
          multiline={true}
          numberOfLines={8}
          placeholder={"Um pouco sobre você"}/>
        
        <S.Text>Escolha o serviço a oferecer</S.Text>       
        
        
        <S.MenuItem>          
          <Ionicons name="md-walk" size={24} color="black" />
          <S.TextItem>Passeio</S.TextItem>
          <MaterialCommunityIcons name="dog" size={24} color="black" />
          <S.TextItem>Pet Sitter</S.TextItem>        
        </S.MenuItem>        
        <S.MenuItem2>
          <FontAwesome5 solid name="home" size={24} color="black" />
          <S.TextItem>Hospedagem</S.TextItem>
        </S.MenuItem2>  
  
       <S.ButtonNext onPress={handleNext}>
          <S.ButtonNextText> Salvar </S.ButtonNextText>
       </S.ButtonNext>
       </S.Content>
      
    </S.Container>
    </ScrollView>
  );
};

export default CadAnfi;
