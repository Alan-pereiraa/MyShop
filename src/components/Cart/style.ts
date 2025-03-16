import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside.withConfig({
    shouldForwardProp: (prop) => prop !== "showCart", // impede que showCart seja passada para o DOM
  })<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0px" : "-550px")};
    width: 400px;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
    transition: right 0.5s;
  `;
export const title = styled.h1.attrs({
  role: "heading",
})``;

export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;
`;

export const CartProductItem = styled.li`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ProductTitle = styled.strong``;

export const TotalCart = styled.strong``;

export const ButtonToCart = styled.button`
  width: 30px;
  height: 40px;
  background-color: transparent;
  border: none;

  svg {
    font-size: 20px;
  }
`;
