import React from "react";
import * as S from "./styles";
import { ProductCard } from "../CardProduto/CardProduto";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { setProducts} from "../../redux/Products/product-slice";
import axios from "axios";
import { useEffect } from "react";


export const ListaDeProdutos: React.FC = () => {

    const { products, FilteredProducts } = useSelector((state: RootReducer) => state.productsSilce);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
          try {
            const response = await axios.get("http://localhost:3003/produtos");
            console.log("Resposta da API", response);

            dispatch(setProducts(response.data));

          } catch (erro) {
            console.log(erro);
          }
        }
    
        loadProducts();
      }, [dispatch]);

    
    return (
        <S.Container>
            {(FilteredProducts.length > 0 ? FilteredProducts: products).map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </S.Container>
    )
}