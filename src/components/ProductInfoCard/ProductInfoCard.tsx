import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Produto } from "../../redux/Products/product-slice";
import * as S from "./styles";
import Modal from "./../Modal/Modal";
import { useState } from "react";

interface InfoProduct {
  product: Produto;
}

export const ProductInfoCard: React.FC<InfoProduct> = ({ product }) => {

  const [Close, isCloseModal] = useState(true);

  return (
    <S.ContainerProduct>
      <S.ContainerInfoProducts>
        <S.ImagemProduct src={product.image} />
        <S.Product>
          <S.InfoProducts>
            <S.divTitle>
              <S.TitleProduct>{product.title}</S.TitleProduct>
              <S.CategoryProduct>({product.category})</S.CategoryProduct>
            </S.divTitle>
            <S.ReviewProduct>
              {Array.from({ length: 5 }).map((_, index) =>
                index < Math.round(product.rating.rate) ? (
                  <AiFillStar key={index} />
                ) : (
                  <AiOutlineStar key={index} />
                )
              )}
            </S.ReviewProduct>
            <S.PriceProduct>R${product.price}</S.PriceProduct>
          </S.InfoProducts>
          <S.ContainerFrete>
            <S.containerInputLabel>
              <S.LabelFrete>Calcular Frete</S.LabelFrete>
              <S.Inputfrete></S.Inputfrete>
            </S.containerInputLabel>
            <S.ButtonGetFrete>Calcular</S.ButtonGetFrete>
          </S.ContainerFrete>
          <S.ButtonsProduct>
            <S.ButtonAddToCart onClick={() => {isCloseModal(false)}}>Adicionar ao carrinho</S.ButtonAddToCart>
            <S.ButtonToBuy>Comprar Agora</S.ButtonToBuy>
          </S.ButtonsProduct>
        </S.Product>
      </S.ContainerInfoProducts>
      <S.ContainerDescription>
        <S.TitleDescription>Descrição</S.TitleDescription>
        <S.SpanDescription>{product.description}</S.SpanDescription>
      </S.ContainerDescription>
      
      <Modal closeModal={Close} setCloseModal={isCloseModal} Product={product}></Modal>
    </S.ContainerProduct>
  );
};
