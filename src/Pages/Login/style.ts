import styled from "styled-components";

export const backgroundLogin = styled.div`
  background-color: navy;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const containerLogo = styled.div`
  width: 40%;
  margin-left: 10vh; 
`;

export const LogoMyShop = styled.span`
  font-size: 100px;
  color: white;
  font-weight: bold;
`;

export const ContainerForm = styled.div`
  width: 40%;
`;

export const Form = styled.form`
  width: 100%;
  height: 50vh;
  padding: 4rem 2rem;
  margin-bottom: 1.5rem;
`;

export const InputEmail = styled.input`
    display: block;
    align-items: center;
    background-color: rgba(0,0,0, 0.2);
    border: none;
    border-bottom: 5px solid white;
    width: 100%;
    height: 7vh;
    padding: 1rem 1rem;
    font-size: 28px;
    color: white;
    outline: none;
    margin-bottom:5rem;

    &::placeholder{
        color: white;
        font-size: 28px;
    }
`;

export const ContainerSenha = styled.div`
    width: 100%;
    height: 7vh;
    border-bottom: 5px solid white;
    background-color: rgba(0,0,0, 0.2);

    display: flex;
    text-align: center;
    justify-content: space-between;
    padding-right: 3%;

`;

export const InputSenha = styled.input`
    width: 90%;
    background-color: transparent;
    border: none;
    padding: 1rem 0.5rem 1rem 1rem;
    font-size: 28px;
    color: white;
    outline: none;

    /* Remove o ícone do olho no Chrome e Edge */
    &::-ms-reveal,
    &::-ms-clear,
    &::-webkit-contacts-auto-fill-button,
    &::-webkit-credentials-auto-fill-button {
        display: none;
    }


    &::placeholder{
        color: white;
        font-size: 28px;
    }

    &:focus{
      transition: cubic-bezier(0.645, 0.045, 0.355, 1);
      transition-duration: 1s;
      background-color: rgba(0,0,0, 0.2);
    }
`;

export const EsqueciSenha = styled.span`
    display: block;
    color: white;
    font-size: 20px;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    text-align:end;
    cursor: pointer;

    &:hover{
      text-decoration: underline;
      transition: 0.1s;
    }
`;

export const ButtonEnviarForm = styled.button`
    background-color: #fff;
    color: navy;
    font-size: 28px;
    width: 100%;
    height: 8vh;
    border: none;
    border-radius: 10px;
`;

export const CriarContaSpan = styled.span`
    display: block;
    font-size: 22px;
    color: white;
    width: 80%;
    height: 4rem;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
`;

export const ButtonGoogle = styled.button`
    background-color: navy;
    width: 90%;
    height: 8vh;
    border: solid 1px white;
    border-radius: 10px;
    margin: 1rem auto;

    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`;

export const TextButton = styled.p`
    font-size: 22px;
    color: white;
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
