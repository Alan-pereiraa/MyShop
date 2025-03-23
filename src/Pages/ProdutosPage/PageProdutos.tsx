import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Produto } from "../../redux/Products/product-slice";
import * as S from "./styles";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { Header } from "../../components/header/header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { CalcularFrete } from "../../components/CalcularFrete/CalcularFrete";

export const PageProdutos: React.FC = () => {

  const [Close, isCloseModal] = useState(true);

  const { id } = useParams();

    console.log("ID: ", id)

    const productsData = useSelector((state: RootReducer) => state.productsSilce.products)

    console.log("IDProduct: ", productsData);
    
    const product = productsData.find((product) => product.id.toString() == id);
    
    if(!product) {
        return <h1>Produto não encontrado</h1>
    }

  return (
    <>
      <Header/>
      <S.ContainerProduct>
        <S.ContainerInfoProducts>
          <S.ImagemProduct src={product.image} />
          <S.Product>
            <S.InfoProducts>
              <S.divTitle>
                <S.TitleProduct>{product.nome}</S.TitleProduct>
                <S.CategoryProduct>({product.categoria})</S.CategoryProduct>
              </S.divTitle>
              <S.ReviewProduct>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.round(product.avaliacao.rate) ? (
                    <AiFillStar key={index} />
                  ) : (
                    <AiOutlineStar key={index} />
                  )
                )}
              </S.ReviewProduct>
              <S.PriceProduct>R${product.preco}</S.PriceProduct>
            </S.InfoProducts>
            <CalcularFrete product={product}></CalcularFrete>
            <S.ButtonsProduct>
              <S.ButtonAddToCart
                onClick={() => {
                  isCloseModal(false);
                }}
              >
                Adicionar ao carrinho
              </S.ButtonAddToCart>
              <S.ButtonToBuy>Comprar Agora</S.ButtonToBuy>
            </S.ButtonsProduct>
          </S.Product>
        </S.ContainerInfoProducts>
        <S.ContainerDescription>
          <S.TitleDescription>Descrição</S.TitleDescription>
          <S.SpanDescription>{product.descricao}</S.SpanDescription>
        </S.ContainerDescription>

        <Modal
          closeModal={Close}
          setCloseModal={isCloseModal}
          Product={product}
        ></Modal>
      </S.ContainerProduct>
      <GlobalStyles/>
    </>
  );
};
