import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { logoutUser } from "../../redux/User/user-slice";
import { Cart } from "../Cart/Cart";
import { useNavigate } from "react-router";
import { Collections } from "../Categoria/Categoria";

export const Header: React.FC = () => {
  const userLogged = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer.loggedUser
  );

  const [showCart, setShowCart] = useState(false);
  const isLogged = userLogged != null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function goToLogin() {
    if (!isLogged) {
      navigate("/login");
    } else {
      dispatch(logoutUser(userLogged));
    }
  }

  return (
    <>
      <S.StyleHeader>
        <S.Wrapper>
          <S.TitleHeader>MyShop.</S.TitleHeader>
          <S.boxQuery>
            <S.inputQuery placeholder="Pesquisar..."></S.inputQuery>
            <FaSearch
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                margin: "0.7rem",
              }}
            />
          </S.boxQuery>
          <S.ButtonWrapper>
            <S.AuthButton isLogged={isLogged} onClick={goToLogin}>
              {isLogged ? "LogOut" : "Login"}
              {isLogged ? <FiLogOut /> : <FiLogIn />}
            </S.AuthButton>
            <S.CartButton onClick={() => setShowCart(!showCart)}>
              Carrinho
              <FiShoppingCart></FiShoppingCart>
            </S.CartButton>
          </S.ButtonWrapper>
          <S.Perfil>
            <IoMdContact
              style={{
                width: "15%",
                height: "20%",
                color: "white",
                maxWidth: "20%",
              }}
            />
            <S.UserPerfil defaultValue={userLogged?.name}>
              {isLogged ? (
                <>
                  <S.OptionUserPerfil value={userLogged.name}>
                    {userLogged.name}
                  </S.OptionUserPerfil>
                  <S.OptionUserPerfil value="Editar dados">
                    Editar dados cadastrais
                  </S.OptionUserPerfil>
                </>
              ) : (
                <S.OptionUserPerfil value="Convidado">
                  Convidado
                </S.OptionUserPerfil>
              )}
            </S.UserPerfil>
          </S.Perfil>
        </S.Wrapper>

        <Cart isShowCart={showCart} />
      </S.StyleHeader>
    </>
  );
};
