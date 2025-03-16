import { FiShoppingCart } from "react-icons/fi";
import * as S from "./style";
import { Produto } from "../../redux/Products/product-slice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { useNavigate } from "react-router";
import { addProductToCart, removeProductFromCart } from "../../redux/User/user-slice";

interface ProductCard {
  product: Produto;
}

export const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const cartByUserLogged = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer.loggedUser?.cart
  )
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isProductOnCart: boolean =
    cartByUserLogged?.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch(addProductToCart(product));
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProductFromCart(product.id));
  }

  function handleNavigateToProducts() {
    navigate(`/products/${product.id}`);
  }

  return (
    <>
      <S.Card>
        <S.ProductImg src={product.image} alt={product.description} />
        <S.ProductTitle onClick={handleNavigateToProducts}>{product.title}</S.ProductTitle>
        <S.ReviewPriceContainer>
          <S.Review>
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.round(product.rating.rate) ? (
                <AiFillStar key={index} />
              ) : (
                <AiOutlineStar key={index} />
              )
            )}
          </S.Review>
          <S.Price>R${product.price}</S.Price>
        </S.ReviewPriceContainer>
        <S.AddToCartButtonWrapper>
          {isProductOnCart ? (
            <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
              Remover do Carrinho
              <FiShoppingCart />
            </S.RemoveFromCartButton>
          ) : (
            <S.AddShoopingCart onClick={handleAddProductToCart}>
              Adicionar ao Carrinho
              <FiShoppingCart></FiShoppingCart>
            </S.AddShoopingCart>
          )}
        </S.AddToCartButtonWrapper>
      </S.Card>
    </>
  );
};
