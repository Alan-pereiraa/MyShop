import React from "react";
import { Header } from "../components/header/header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ProductList } from "../components/ProductList/ProductList";
import { Collections } from "../components/collections/collections";

function Dashoboard() {
  return (
    <div>
      <Header></Header>
      <Collections></Collections>
      <ProductList></ProductList>
      <GlobalStyles></GlobalStyles>
    </div>
  );
}

export default Dashoboard;
