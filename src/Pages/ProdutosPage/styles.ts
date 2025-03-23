import styled from "styled-components";


export const ContainerProduct = styled.div`
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
`;

export const ContainerInfoProducts = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ImagemProduct = styled.img`
    height: 50vh;
    width: 40%;
    margin: 3rem 0 0 4rem;
    object-fit: contain;
`;

export const Product = styled.div`
    width: 40%;
`;

export const InfoProducts = styled.div`
    height: 30vh;
`;

export const divTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   
    width: 80%;
    margin: 3rem 0rem 0 1rem;
    gap: 1rem;
`;

export const TitleProduct = styled.h2`
    font-size: 24px;
`;

export const CategoryProduct = styled.span`
 
`;

export const ReviewProduct = styled.span`
    font-size: 22px;
    margin-left: 1rem;
    display: block;
`;

export const PriceProduct = styled.div`
    font-size: 36px;
    margin: 4rem 0 0 2rem;
`;

export const ButtonsProduct = styled.div`
    width: 100%;
    height: 10vh;
    display: block;
    justify-content: column;
    text-align: center;
    margin-top: 2rem;
`;

export const ButtonAddToCart = styled.button`
    width: 90%;
    font-size: 18px;
    font-weight: bold;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background-color: navy;
    color: white;
`;

export const ButtonToBuy = styled.button`
    width: 90%;
    font-size: 18px;
    font-weight: bold;
    padding: 1rem;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: transparent;
    color: navy;
    margin-top: 0.5rem;
`;


export const ContainerDescription = styled.div`
    width: 90%;
    margin: 3rem 0 5% 5%;
    height: 30vh;
    border-top: 1px solid #d5d5d5;
    padding: 2rem 1rem;
`;

export const TitleDescription = styled.h3`
    font-size: 24px;
    margin-bottom: 1rem;
`;

export const SpanDescription = styled.span`
    font-size: 18px;
`;




