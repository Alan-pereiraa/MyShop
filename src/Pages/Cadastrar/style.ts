import styled from "styled-components";
import { IMaskInput } from "react-imask";

export const backgroundCadastrar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: navy;
    height: 100vh;
`;

export const ContainerlogoMyShop = styled.div`
    height: 100vh;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerFormCadastro = styled.div`
    height: 100vh;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FormCadastro = styled.form`
    width: 80%;
    height: 70vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const inputName = styled.input`
    appearance: none;
    width: 100%;
    height: 10%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2) !important;
    color: white;
    border-bottom: 2px solid white;
    margin-bottom: 2rem;

    &::placeholder{
        color: white;
    }

`;
export const inputCPF = styled(IMaskInput)`
    width: 100%;
    height: 10%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    border-bottom: 2px solid white;
    margin-bottom: 2rem;

    &::placeholder{
        color: white;
    }
`;

export const inputEmail = styled.input`
    width: 100%;
    height: 10%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    border-bottom: 2px solid white;
    margin-bottom: 2rem;

    &::placeholder{
        color: white;
    }
`;

export const inputAddress = styled.input`
    width: 100%;
    height: 10%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    border-bottom: 2px solid white;
    margin-bottom: 2rem;

    &::placeholder{
        color: white;
    }
`;
export const containerCEPeTelephone = styled.div`
    width: 100%;
    height: 10%;
    margin: 0 auto;
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
`;
export const inputCEP = styled(IMaskInput)`
    width: 45%;
    height: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    border-bottom: 2px solid white;


    &::placeholder{
        color: white;
    }

`;
export const inputTelephone = styled(IMaskInput)`
    width: 50%;
    height: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: rgba(0,0,0,0.2);
    color: white;
    border-bottom: 2px solid white;

    &::placeholder{
        color: white;
    }
`;
export const inputPassword = styled.input`
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    font-size: 22px;
    background-color: transparent;
    color: white;

    &::placeholder{
        color: white;
    }

    &::-ms-reveal,
    &::-ms-clear,
    &::-webkit-contacts-auto-fill-button,
    &::-webkit-credentials-auto-fill-button {
        display: none;
    }
`;

export const buttonEnviar = styled.button`
    width: 100%;
    background-color: white;
    border: none;
    padding: 20px;
    font-size: 1.5rem;
    color: navy;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 3rem;

`;

export const buttonGoogle = styled.div`
    width: 80%;
    height: 10%;
    background-color: navy;
    color: white;
    margin: 0 auto;
    border: 1px solid white;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    &:hover{
        background-color: rgba(255,255,255,0.1);
    }
`;

export const textButtonGoogle = styled.span`
    font-size: 24px;
`;

export const TogglePasswordButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;


