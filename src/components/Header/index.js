import React from "react";

import * as S from "./styles";

import dog from "../../assets/dog.png";

const Header = () => {
  return (
    <S.ContentImage>
      <S.Image source={dog} />
    </S.ContentImage>
  );
};

export default Header;
