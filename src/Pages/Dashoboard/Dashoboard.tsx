import React from "react";
import { Header } from "../../components/header/header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { ListaDeProdutos } from "../../components/ListaDeProdutos/ListaDeProdutos";

function Dashoboard() {
  return (
    <div>
      <Header></Header>
      <ListaDeProdutos></ListaDeProdutos>
      <GlobalStyles></GlobalStyles>
    </div>
  );
}

export default Dashoboard;
