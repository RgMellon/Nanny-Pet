import React from "react";
import {  ScrollView, Text, TouchableOpacity } from "react-native";

import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; 


import * as S from "./styles";


const PerfilAnfi = () => {
  return (
    <ScrollView>
    <S.Container>
     
      <S.HeaderHome>
        <S.Image  source={{
          uri: 'https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg',
        }}/>
        <S.Nome> Moises especial </S.Nome>
        {/*<S.Image source={require('../../assets/stars.png')}/>*/}
      </S.HeaderHome>

        <S.Detail/>

      <S.Content>
        <S.Descricao>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Tempori</S.Descricao> 
        <S.Text>Serviços prestados por Moises</S.Text>
        <S.Servicos>

        </S.Servicos>
        
        <S.Text>Curtiu algum? entre em contato </S.Text>
        
       
        <S.Contato>
        <FontAwesome name="whatsapp" size={24} color="white" />
          <Text>Chamar no whatsApp</Text>
        </S.Contato>     

        <S.Contato2>
        <MaterialIcons name="email" size={24} color="white" />
          <Text>Enviar um Email</Text>      
        </S.Contato2>       
      
      </S.Content> 

    </S.Container>
    </ScrollView>
  );
};

export default PerfilAnfi;
