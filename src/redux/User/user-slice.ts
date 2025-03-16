import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../Products/product-slice";



export interface User {
  name: string;
  email: string;
  cpf: string;
  endereco: string;
  cep: string;
  telefone: string;
  senha: string;
  cart: Produto[];
}

interface UserState {
  users: User[]; 
  loggedUser: User | null;
}

const initialState: UserState = {
  users: [],
  loggedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.loggedUser = action.payload;
    },

    logoutUser: (state, action: PayloadAction<User>) => {

      const UserLogged = state.users.find((user) => user.cpf == action.payload.cpf);

      if(state.loggedUser !== null){

        if(UserLogged){
          UserLogged.cart = [...state.loggedUser.cart];
        }

        state.loggedUser = null;
      }},

    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },

    addProductToCart: (state, action: PayloadAction<Produto>) => {
      if (state.loggedUser) {
        state.loggedUser.cart = state.loggedUser.cart || []; // Garante que o carrinho não seja undefined
        state.loggedUser.cart.push(action.payload);
      }
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      if (state.loggedUser) {
        state.loggedUser.cart = state.loggedUser.cart.filter(
          (produto) => produto.id !== action.payload
        );
      }
    },
  },
});

export const { loginUser, logoutUser, addProductToCart, removeProductFromCart, addUser } = userSlice.actions;
export default userSlice.reducer;
