import { styled } from "styled-components";

interface ButtonProps {
    isSelectCategory: boolean;
}

export const navBar = styled.div`
  background-color: navy;
  width: 100%;
  height: 50px;
`;

export const lisCollections = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ItensCollectios = styled.li`
  list-style: none;
`;

export const buttonItenCollections = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  height: 100%;
  padding: 0.3rem;
  border-top: ${(props) => props.isSelectCategory ? "3px solid white" : "none"}
`;
