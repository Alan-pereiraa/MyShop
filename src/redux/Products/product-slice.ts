import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  peso: number;
  altura: number;
  largura: number;
  comprimento: number;
  descricao: string;
  categoria: string;
  image: string;
  avaliacao: {
    rate: number;
    counter: number;
  };
  quantidade_estoque: number;
}

export interface ProductList {
  products: Produto[];
  FilteredProducts: Produto[],
}

const initialState: ProductList = {
  products: [], // Produtos são armazenados aqui pela API
  FilteredProducts: [], // Produtos filtrados
};


export const productsSilce = createSlice({
  initialState,
  name: "productsList",
  reducers: {
    setProducts: (state, action: PayloadAction<Produto[]>) => {
      state.products = action.payload;
    },
    updateProducts: (state, action: PayloadAction<Produto[]>) => {
      state.FilteredProducts = action.payload;
    }
  },
});



export const { setProducts, updateProducts } = productsSilce.actions;

export default productsSilce.reducer;