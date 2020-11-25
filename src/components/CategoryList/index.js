import React, { useState } from "react";

import * as S from "./styles";
import trela from "./trela.png";
import cao from "./cao.png";
import canil from "./canil.png";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      title: "Passeio",
      link: "/",
      image: trela,
    },

    {
      title: "Pet Sitter",
      link: "/",
      image: cao,
    },

    {
      title: "Hospedagem",
      link: "/",
      image: canil,
    },
  ]);

  return (
    <>
      <S.CategoryTitle> Categoria de serviços </S.CategoryTitle>
      <S.CatergoryList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories}
        keyExtractor={(category) => category.title}
        renderItem={({ item: category }) => (
          <S.Container>
            <S.ContentImageCategory>
              <S.ContentImageCategory>
                <S.ImageCategory source={category.image} />
              </S.ContentImageCategory>
            </S.ContentImageCategory>

            <S.Title>{category.title}</S.Title>
          </S.Container>
        )}
      />
    </>
  );
};

export default CategoryList;
