import React, { useEffect, useState } from 'react';
import * as S from "./style";
import { GrClose, GrAdd, GrFormSubtract } from "react-icons/gr";
import { Produto } from '../../redux/Products/product-slice';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


interface OpenModal {
    closeModal: boolean;
    setCloseModal: (value: boolean) => void;
    Product: Produto;
}


const Modal: React.FC<OpenModal> = ({ closeModal, setCloseModal, Product }) => {

    const [Counter, setCounter] = useState(0);
    const [close, setIsClose] = useState<boolean>(closeModal);

    useEffect(() =>{
        setIsClose(closeModal);
    }, [closeModal])


    if(!closeModal) {
        return(
            <S.BackgroundModal $isClose={close}>
                <S.ContainerModal>
                    <GrClose size={30} style={{cursor: "pointer"}} onClick={() => {setCloseModal(!closeModal)}}/>
                    <S.ContentModal>
                        <S.ImageProductModal src={Product.image}></S.ImageProductModal>
                        <S.InfoModal>                
                            <S.ContainerTextModal>

                                <S.TitleModal>{Product.nome}</S.TitleModal>
                                <S.Review>
                                    {Array.from({ length: 5 }).map((_, index) =>
                                        index < Math.round(Product.avaliacao.rate) ? (
                                        <AiFillStar key={index} />
                                        ) : (
                                        <AiOutlineStar key={index} />
                                        )
                                                )}
                                </S.Review>
                                <S.PriceModal>{Product.preco}</S.PriceModal>
                            </S.ContainerTextModal>

                            <S.FormModal>
                                <S.InputFormModal>
                                    <S.ButtonOperacoes>
                                        <GrAdd style={{fontSize: "22px"}} onClick={() => {setCounter(Counter + 1)}}></GrAdd>
                                    </S.ButtonOperacoes>
                                    <S.valueFormModal>{Counter}</S.valueFormModal>
                                    <S.ButtonOperacoes>
                                        <GrFormSubtract style={{fontSize: "22px"}} onClick={() => {Counter >= 1? setCounter(Counter - 1) : null}}></GrFormSubtract>
                                    </S.ButtonOperacoes>
                                </S.InputFormModal>
                            </S.FormModal>
                            <S.ButtonInputModal>Adicionar</S.ButtonInputModal>
                        </S.InfoModal>
                    </S.ContentModal>
                </S.ContainerModal>
            </S.BackgroundModal>
        );
    }

    return null;
}

export default Modal;
