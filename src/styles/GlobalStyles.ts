// CSS in TS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background-color: #f5f5f5;
    }

    body, button {
        font-family: "Poppins", sans-serif;
    }

    button{
        cursor: pointer;

        &:hover {
            filter: brightness(1.2);
            transition: filter (0.3s);
        }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: navy;
        color: white !important;
        -webkit-text-fill-color: white !important;
        box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0.2) inset !important;
        transition: background-color 5000s ease-in-out 0s;
    }

`;
