import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        scrollbar-width: thin;
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: #E8EFEA;
    }

    body{
        min-height: 100vh;
        padding: 0 2%;
        display: flex;
    }

    ::selection{
        background-color: #2E8A21;
        color: white;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    #__next{
        display: flex;
        flex-Direction: column;
        width: 100%;
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background: #c4c4c4;
    }

    @media screen and (max-width: 1000px){
        html, 
        body{
            font-size:13px;
            padding: 0;
        }
    }
`