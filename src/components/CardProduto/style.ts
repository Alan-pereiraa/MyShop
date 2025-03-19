import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    border-radius: 0.7rem;
    box-shadow: 0 05px rgba(0,0,0, 0.15);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImg = styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;
`;

export const ProductTitle = styled.a`
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 1rem;

    min-height: 100px;

    &:hover{
        text-decoration:underline;
    }
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

export const Review = styled.span``;

export const Price = styled.strong`
    font-size: 1.2rem;
`;

export const AddToCartButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const AddShoopingCart = styled.button`
    background-color: green;
    border: none;
    color: white;
    height: 40px;
    width: 100%;
    margin-top: 1rem;
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 0.7rem;
        margin-left: 0.3rem;
    }
`;

export const RemoveFromCartButton = styled.button`
    background-color: violet;
    border: none;
    color: white;
    height: 40px;
    width: 100%;
    margin-top: 1rem;
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 0.7rem;
        margin-left: 0.3rem;
    }
`;