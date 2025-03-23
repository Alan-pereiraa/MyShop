import React, { useState } from "react";
import * as S from "./styles";
import { Produto } from "../../redux/Products/product-slice";
import axios from "axios";
import { consultarCep } from "correios-brasil/dist";
import { useSelector } from "react-redux";
import { RootReducer, rootReducer } from "../../redux/root-reducer";
import { useNavigate } from "react-router";
import { User } from "../../redux/User/user-slice";

export interface AtributosCalcFrete{
    sCepOrigem: string;
    sCepDestino: string;
    nVlPeso: string;
    nCdFormato: string;
    nVlComprimento: string;
    nVlAltura: string;
    nVlLargura: string;
    nVlDiametro: string;
    nCdServico: string[];
    nVlValorDeclarado?: string;
}

export interface DataProduto{
    product: Produto;
}

export const CalcularFrete: React.FC<DataProduto> = ({product}) => {

    const [CEP, setCEP] = useState<string>("");
    const [DataCalcFrete, setDataCalcFrete] = useState<AtributosCalcFrete>();

    const navigate = useNavigate();

    function handleFreteInput(event: React.ChangeEvent<HTMLInputElement>){
        setCEP(event.target.value);
    }

    function calculoFrete(produto: Produto, cep: string){
        setDataCalcFrete({
            sCepOrigem: produto.cep_origem,
            sCepDestino: cep,
            nCdFormato: "1",
            nVlAltura: produto.altura,
            nVlComprimento: produto.comprimento,
            nVlPeso: produto.peso,
            nVlDiametro: "5",
            nVlLargura: produto.largura,
            nCdServico: "04510"
        })
    }



    return(
        <S.ContainerFrete>
            <S.FormFrete>
            <S.LabelFrete>Calcular Frete</S.LabelFrete>
            <S.Inputfrete required mask= "00.000-000" onChange={handleFreteInput}></S.Inputfrete>
            </S.FormFrete>
            <S.ButtonGetFrete onClick={() => calculoFrete(product, CEP)}>Calcular</S.ButtonGetFrete>
        </S.ContainerFrete>
    );
};