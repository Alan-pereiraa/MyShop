import React, { useEffect, useState } from "react";
import * as S from "./style";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootReducer } from "../../redux/root-reducer";
import { useNavigate } from "react-router";
import { loginUser } from "../../redux/User/user-slice";

export const Login: React.FC = () => {
  const [StateEmail, setStateEmail] = useState<string>("");
  const [StateSenha, setStateSenha] = useState<string>("");
  const [OcultedPassword, setOcultedPassword] = useState<Boolean>(true);

  const usersData = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer.users
  );

  console.log("Usuário: ", usersData)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function verificationUser(email: string, senha: string) {
    console.log(`Email: ${email}, Senha: ${senha}`);

    const user = usersData.find(
      (data) => data.email == email && data.senha == senha
    );

    if(user){
      dispatch(loginUser(user))
    }

    if (user) {
      navigate("/")
    }else {
      alert("Login incorreto!");
    }
  }

  const goToRegister = () => {
    navigate("/cadastrar");
  };

  return (
    <>
      <S.backgroundLogin>
        <S.Container>
          <S.containerLogo>
            <S.LogoMyShop>MyShop.</S.LogoMyShop>
          </S.containerLogo>
          <S.ContainerForm>
            <S.Form>
              <S.InputEmail
                type="email"
                placeholder="Email"
                onChange={(event) => setStateEmail(event.target.value)}
              />
              <S.ContainerSenha>
                <S.InputSenha
                  type={OcultedPassword ? "password" : "text"}
                  placeholder="Senha"
                  onChange={(event) => setStateSenha(event.target.value)}
                />
                <S.TogglePasswordButton
                  onClick={(event) => {
                    event.preventDefault();
                    setOcultedPassword(!OcultedPassword);
                  }}
                >
                  {OcultedPassword ? <BsEyeSlashFill /> : <BsFillEyeFill />}
                </S.TogglePasswordButton>
              </S.ContainerSenha>
              <S.EsqueciSenha>Esqueci a Senha?</S.EsqueciSenha>
              <S.ButtonEnviarForm
                onClick={(event) => {
                  event.preventDefault();
                  verificationUser(StateEmail, StateSenha);
                }}
              >
                Entrar
              </S.ButtonEnviarForm>
            </S.Form>
            <S.CriarContaSpan>
              Não tem uma conta?
              <strong onClick={goToRegister}> Criar uma conta</strong>
            </S.CriarContaSpan>
            <S.ButtonGoogle>
              <FcGoogle style={{ fontSize: "2rem" }} />
              <S.TextButton>Conectar-se com o Google</S.TextButton>
            </S.ButtonGoogle>
          </S.ContainerForm>
        </S.Container>
        <GlobalStyles></GlobalStyles>
      </S.backgroundLogin>
    </>
  );
};
