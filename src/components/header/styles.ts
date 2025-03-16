import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: navy;
    padding: 1rem;
    width: 100%;

    position: fixed;
    top: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 90%;
    margin: 0 auto;
    padding: 0.8rem;
`;

export const TitleHeader = styled.h1`
    background-color: navy;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

interface AuthButtonProps {
    isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
    padding: 0.5rem 1.5rem;
    background-color: ${(props) => (props.isLogged ? "red" : "green")};
    border: none;
    color: white;
    border-radius: 5px;

    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const CartButton = styled.button`
    padding: 0.5rem 1.5rem;
    background-color: violet;
    border: none;
    color: black;
    border-radius: 5px;

    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const boxQuery = styled.div`
    background-color: white;
    width: 50%;
    height: 3rem;
    border: none;
    padding: 0 0.5rem;   
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);

    display: flex;
    align-items: center;   
`;

export const inputQuery = styled.input`
    border: none;
    outline: none;
    height: 2.5rem;
    width: 95%;
    padding-left: 0.2rem;
    font-size: 1.3rem;
    color: rgba(63, 63, 63, 0.9);
    border-right: 1px solid gray;

`;

export const Perfil = styled.div`
    width: 15%;
    cursor: pointer;
    padding: 5px;

    display: flex;
    justify-content:center;
    gap: 20px;
    
`;

export const UserPerfil = styled.select`
    background-color:navy;
    border: none;
    color:white;
    font-size: 18px;
    outline: none;

    max-width: 80%;
`;

export const OptionUserPerfil = styled.option`
    border: none;
    border-radius: 0;
`;