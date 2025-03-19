import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import {
  updateProducts,
} from "../../redux/Products/product-slice";
import { setSelectdCategory } from "../../redux/Category/category-slice";

export const Collections: React.FC = () => {

  const category = {
    Joia: "jewelery",
    Masculinas: "men's clothing",
    Eletronicos: "electronics",
    Femininas: "women's clothing",
    Todas: "todas",
  };

  const isCategory = useSelector((state: RootReducer) => state.categoryReducer.selectCategory);

  const { products } = useSelector(
    (rootReducer: RootReducer) => rootReducer.productsSilce
  );

  const dispatch = useDispatch();

  function searchCategoryProduct(category: string) {

    const collections = products.filter(
      (product) => product.categoria == category
    );

    dispatch(updateProducts(collections));
  }

  console.log("ISCAtegory: ", isCategory);

  // searchCategoryProduct -> Filtra pelos produtos procuran aqueles que tenha category igual a categoria que eu receber como parâmetro

  return (
    <S.navBar>
      <S.lisCollections>
        {/* Faz um entries para retornar cada chave e valor da */}
        {Object.entries(category).map(([key, value]) => {
          return (
            <S.ItensCollectios key={key}>
              <S.buttonItenCollections
                isSelectCategory={isCategory === key}
                onClick={() => {
                  dispatch(setSelectdCategory(key));
                  searchCategoryProduct(value);
                }}
              >
                {key}
              </S.buttonItenCollections>
            </S.ItensCollectios>
          );
        })}
      </S.lisCollections>
    </S.navBar>
  );
};
