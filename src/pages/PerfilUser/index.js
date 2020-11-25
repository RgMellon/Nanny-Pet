import React from "react";

import * as S from "./styles";

const PerfilUser = () => {
  return (
    <S.Container>
      <S.ContentImage>
          <S.CircleImage></S.CircleImage> 
          <S.TextNome>Nome Cuidador</S.TextNome>         
      </S.ContentImage> 

      <S.Detail />

      <S.TextInput>
          <S.Text>Me torna anfitrião</S.Text>
      </S.TextInput>
      <S.TextInput >
          <S.Text>Edita perfil</S.Text>
      </S.TextInput>

    </S.Container>
  );
};

export default PerfilUser;
