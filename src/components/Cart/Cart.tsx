import React, { useEffect, useState } from "react";
import * as S from "./style";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Produto } from "../../redux/Products/product-slice";
import { RootReducer, rootReducer } from "../../redux/root-reducer";
import { removeProductFromCart } from "../../redux/User/user-slice";


interface Cart {
  isShowCart: boolean;
}

export const Cart: React.FC<Cart> = ({ isShowCart }) => {
  const dispatch = useDispatch();

  const ProductFromCart = useSelector((rootReducer: RootReducer) => rootReducer.userReducer.loggedUser?.cart)


  const totalCartProduct = ProductFromCart?.reduce((totalCart, productValue) => {
    return totalCart + productValue.preco;
  }, 0);

  function RemoveToCartItem (product: Produto) {

    if (!product) {
      console.log(product);
    }

    dispatch(removeProductFromCart(product.id))
  }

  console.log("IsShowCart: ", isShowCart);

  return (
    <S.Container showCart={isShowCart}>
      <S.title>Carrinho</S.title>

      <S.CartProductList>
        {ProductFromCart?.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.ProductTitle>{product.nome}</S.ProductTitle> - $ {product.preco}
            <S.ButtonToCart>
              <BiTrash></BiTrash>
            </S.ButtonToCart>
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.TotalCart data-testid="total">R$ {totalCartProduct}</S.TotalCart>
    </S.Container>
  );
};
