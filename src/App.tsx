import React from "react";
import { useSelector } from "react-redux";
import Home from "./Pages/Dashoboard";
import { Route, Routes } from "react-router-dom";
import InfoProducts from "./Pages/InfoProducts";
import {Login} from "./Pages/Login/Login";
import Dashoboard from "./Pages/Dashoboard";
import Cadastrar from "./Pages/Cadastrar/Cadastrar";
import { Cart } from "./components/Cart/Cart";
import { RootReducer } from "./redux/root-reducer";

function App() {


  return (
      <Routes>
        <Route path="/" element={<Dashoboard/>}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products/:id" element={<InfoProducts />}></Route>
        <Route path="/cart" element={<Cart isShowCart={true}/>}></Route>
      </Routes>
  );
}

export default App;
