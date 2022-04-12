import { createGlobalStyle } from "styled-components";

export const EditorStyle = createGlobalStyle`
    .toolbar {
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: center;
        border: none;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 15px;
        font-size: 1.2rem;
    }

    .editor{
        min-height: 150px;
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 15px;
        border: 2px solid transparent;
        font-size: 1.2rem;
        transition: border 0.2s;
        padding: 0 20px;
        transition: border 0.2s;
    }

    .editorFocused{
        min-height: 150px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 15px;
        border: 2px solid #096A09;
        font-size: 1.2rem;
        transition: border 0.2s;
        padding: 0 20px;
        transition: border 0.2s;
    }

    .editor:hover{
        background: rgba(255, 255, 255, 0.8);
        border: 2px solid #096A09;
    }

    .rdw-option-wrapper {
        border: 2px solid black;
        padding: 10px;
        height: 30px;
        margin: 5px 15px;
        background: none;
        border-radius: 9px;
    }

    .rdw-dropdown-wrapper {
        border: 2px solid black;
        padding: 10px 0;
        height: 30px;
        margin: 5px 15px;
        background: none;
        border-radius: 9px;
    }

    .rdw-fontsize-dropdown{
        width: 50px;
    }

    @media screen and (max-width: 1000px) {
        .wrapper {
            font-size: 16px;
        }

        .rdw-option-wrapper {
            padding: 10px;
            margin: 5px 7.5px;
        }

        .rdw-dropdown-wrapper {
            padding: 10px 0;
            margin: 5px 7.5px;
        }
    }
`