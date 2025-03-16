import styled from "styled-components";

interface Modal{
    $isClose: boolean,
}


export const BackgroundModal = styled.div<Modal>`
    width: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.7);
    z-index: 1000;
    display: ${(props) => (props.$isClose? "none": "flex")};
    justify-content: center;
    align-items: center;

`;

export const ContainerModal = styled.div`
    width: 50%;
    background-color: #fff;
    height: 80vh;
    text-align: end;
    border-radius: 10px;
    padding: 1rem;
`;

export const ContentModal = styled.div`
    width: 90%;
    margin: 0 auto;    
    display: flex;
    gap: 10%;
`;

export const InfoModal = styled.div`
    width: 100%;
   display: block;

`;

export const ContainerTextModal = styled.div`
    width: 100%;
    height: 30vh;
    text-align: start;
`;

export const ImageProductModal = styled.img`
    width: 50%;
`;

export const TitleModal = styled.h2`
    display: block;
    font-size: 22px;
    width: 100%;
    margin-top: 2rem;
`;

export const Review = styled.span`
    display: block;
    font-size: 22px;
    margin: 1rem 0 0 1rem;
`;

export const PriceModal = styled.span`
    display: block;
    font-size: 36px;
    margin: 4rem 0 0 1rem;
`
export const FormModal = styled.div`
    width: 100%;
    text-align: center;
    margin: 2rem 0;
`;

export const InputFormModal = styled.div`
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    border: solid 1px #d5d5d5;
    border-radius: 10px;
`;

export const valueFormModal = styled.p`
`;

export const ButtonOperacoes = styled.button`
    border: none;
    background-color: transparent;

    width: 50px;
    height: 50px;


    &:hover{
        background-color: rgb(198, 197, 197);
        border-radius: 50%;
    }
`;

export const ButtonInputModal = styled.button`
    background-color: yellow;
    width: 100%;
    padding: 20px;
    border: none;
    font-size: 22px;
    background-color: navy;
    color: white;
`;

