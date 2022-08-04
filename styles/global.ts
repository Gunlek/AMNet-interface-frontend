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

        @media screen and (max-width: 1000px){
            font-size:13px;
            padding: 0;
        }
    }

    body{
        min-height: 100vh;
        display: flex;
        background-image: none;

        @media screen and (max-width: 1000px){
            &::before{
                content: none;
            }
        }
    }

    ::selection{
        background-color: #287c1d;
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
        flex-Direction: row;
        width: 100%;
        padding-left: 2%;
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
        border: transparent;
        -webkit-tap-highlight-color: transparent;
        outline: none !important;
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
        background-color: #c4c4c4;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #797979;
    }

    @media screen and (max-width: 1000px){
        html, 
        body{
            font-size:13px;
            padding: 0;
        }

        #__next{
            padding: 0;
        }
    }
`