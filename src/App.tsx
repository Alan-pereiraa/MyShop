import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import Dashoboard from "./Pages/Dashoboard/Dashoboard";
import Cadastrar from "./Pages/Cadastrar/Cadastrar";
import { Cart } from "./components/Cart/Cart";
import { PageProdutos } from "./Pages/ProdutosPage/PageProdutos";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashoboard />}></Route>
      <Route path="/cadastrar" element={<Cadastrar />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/products/:id" element={<PageProdutos />}></Route>
      <Route path="/cart" element={<Cart isShowCart={true} />}></Route>
    </Routes>
  );
}

export default App;
