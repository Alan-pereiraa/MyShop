import styled from "styled-components";
import { IMaskInput, IMaskInputProps } from "react-imask";

export const ContainerFrete = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: end;
    width: 90%;
    margin: 0 auto;

`;

export const FormFrete = styled.form`
    width: 65%;
`;

export const LabelFrete = styled.label`
    display: block;
    font-size: 18px;
    margin-bottom: 0.5rem;
`;

export const Inputfrete = styled(IMaskInput)`
    width: 100%;
    height: 7vh;
    outline: none;
    border: solid 1px #d5d5d5;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 22px;
`;

export const ButtonGetFrete = styled.button`
    width: 30%;
    height: 7vh;
    font-size: 16px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
`;