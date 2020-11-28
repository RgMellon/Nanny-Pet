import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import * as S from "./styles";

const ServiceProviderList = () => {
  const navigation = useNavigation();

  const [providerList, setProviderList] = useState([
    {
      name: "Moana Maluca",
      image:
        "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
      services: ["PetSitter", "Hospedagem"],
      stars: 3,
    },

    {
      name: "Moana Maluca2",
      image:
        "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
      services: ["PetSitter", "Hospedagem"],
      stars: 3,
    },

    {
      name: "Moana Maluca3",
      image:
        "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
      services: ["PetSitter", "Hospedagem"],
      stars: 3,
    },

    {
      name: "Moana Maluca4",
      image:
        "https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg",
      services: ["PetSitter", "Hospedagem"],
      stars: 3,
    },
  ]);

  return (
    <S.Container>
      <S.ListProvider
        ListHeaderComponent={
          <S.ListProviderTitle> Nossos cuidadores </S.ListProviderTitle>
        }
        data={providerList}
        keyExtractor={(serviceProvider) => serviceProvider.name}
        renderItem={({ item: serviceProvider }) => (
          <S.Card
            onPress={() => {
              navigation.navigate("PerfilAnfi");
            }}
          >
            <S.ImageProfile source={{ uri: serviceProvider.image }} />
            <S.ContentCard>
              <S.Name> {serviceProvider.name}</S.Name>
              <S.ContentServices>
                {serviceProvider.services.map((service) => (
                  <S.Service key={service}>{service}</S.Service>
                ))}
              </S.ContentServices>

              <S.ContentStars>
                {new Array(serviceProvider.stars)
                  .fill(serviceProvider.stars)
                  .map((v, i) => (
                    <FontAwesome5
                      key={i}
                      solid
                      name="star"
                      size={14}
                      color="#FFC249"
                    />
                  ))}
              </S.ContentStars>
            </S.ContentCard>
          </S.Card>
        )}
      />
    </S.Container>
  );
};

export default ServiceProviderList;
