import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    counter: number;
  };
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