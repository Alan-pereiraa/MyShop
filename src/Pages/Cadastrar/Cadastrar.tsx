import React, { useState } from "react";
import * as S from "./style";
import * as L from "../Login/style";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { addUser, User } from "../../redux/User/user-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Cadastrar: React.FC = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [infoRegisterNewUser, setInfoRegisterNewUser] = useState<User>({
    name: "",
    email: "",
    cpf: "",
    senha: "",
    endereco: "",
    cep: "",
    telefone: "",
    cart: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setInfoRegisterNewUser((prevData) => ({ ...prevData, [name]: value }));
  }

  function verificationUsersPersist() {
    const persistData = localStorage.getItem("persist:root");
    if (persistData) {
      const userReducer = JSON.parse(persistData);
      const dataUsers = JSON.parse(userReducer.userReducer);

      const verificationInputsValue = Object.values(infoRegisterNewUser).every(
        (value) => value == ""
      );

      const userData = dataUsers.userData;

      if (
        userData.length !== userData.length - 1 &&
        verificationInputsValue !== true
      ) {
        alert("Usuário cadastrado com sucesso!");
        setLocalStorage();
        navigate("/login")
      } else {
        alert("Erro ao adicionar usuário!");
      }
    }
  }

  const setLocalStorage = () => {
    dispatch(addUser(infoRegisterNewUser));
    console.log("enviado");
  };

  return (
    <>
      <S.backgroundCadastrar>
        <S.ContainerlogoMyShop>
          <L.LogoMyShop>MyShop.</L.LogoMyShop>
        </S.ContainerlogoMyShop>
        <S.ContainerFormCadastro>
          <S.FormCadastro
            onSubmit={(event) => {
              event.preventDefault();

              console.log(infoRegisterNewUser);
            }}
          >
            <S.inputName
              name="name"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              required
            ></S.inputName>
            <S.inputCPF
              name="cpf"
              type="text"
              placeholder="CPF"
              mask="000.000.000-00"
              required
              onChange={handleChange}
            ></S.inputCPF>
            <S.inputEmail
              name="email"
              type="email"
              placeholder="E-mail"
              required
              onChange={handleChange}
            ></S.inputEmail>
            <S.inputAddress
              name="endereco"
              placeholder="Endereço"
              required
              onChange={handleChange}
            ></S.inputAddress>
            <S.containerCEPeTelephone>
              <S.inputCEP
                name="cep"
                type="text"
                placeholder="CEP"
                mask="00.000-000"
                required
                onChange={handleChange}
              ></S.inputCEP>
              <S.inputTelephone
                name="telefone"
                type="tel"
                placeholder="Celular"
                mask="(00) 000000000"
                required
                onChange={handleChange}
              ></S.inputTelephone>
            </S.containerCEPeTelephone>
            <L.ContainerSenha
              style={{
                width: "100%",
                height: "10%",
                margin: "0 auto 3rem auto",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <S.inputPassword
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Senha"
                required
                onChange={handleChange}
              ></S.inputPassword>
              <S.TogglePasswordButton
                onClick={(event) => {
                  event.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsFillEyeFill />}
              </S.TogglePasswordButton>
            </L.ContainerSenha>
            <S.buttonEnviar type="submit" onClick={() => {infoRegisterNewUser.cpf != ""?  verificationUsersPersist() : alert("Preencha todos os campos!")}}>
              Cadastrar-se
            </S.buttonEnviar>
          </S.FormCadastro>
          <S.buttonGoogle>
            <FcGoogle style={{ fontSize: "2.5rem" }} />
            <S.textButtonGoogle>Conectar-se</S.textButtonGoogle>
          </S.buttonGoogle>
        </S.ContainerFormCadastro>
      </S.backgroundCadastrar>
      <GlobalStyles></GlobalStyles>
    </>
  );
};

export default Cadastrar;
