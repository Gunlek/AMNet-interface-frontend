import { createGlobalStyle } from "styled-components";

export const EditorStyle = createGlobalStyle`
    .ql-container{
        border: 2px solid transparent !important;
        min-height: 150px;
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 15px;
        width: 100%;
        transition: border 0.3s, background-color 0.3s;
        font-size: 1.2rem;
        padding: 10px;
    }

    #Editor2{
        a{
            color: #096a09;
            transition: color 0.3s;
            text-decoration: none !important;
        }

        a:hover{
            color: #67bc45 !important;
            cursor: pointer;
        }
    }

    .ql-container:hover, .focused .ql-container{
        border: 2px solid #096A09 !important;
        background-color: rgba(255, 255, 255, 0.8) !important;
    }

    .ql-snow.ql-toolbar button{
        width: 32px !important;
        height: 27px !important;
    }

    .ql-snow .ql-stroke {
        stroke-width: 1;
    }

    .ql-picker-label{ 
        font-size: 1.2rem ;
        
        svg{
            right: -7px !important;
            stroke-width: 2 !important;
        }
    }

    .ql-picker-item:hover, 
    .ql-picker-label:hover, 
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, 
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active
     {
        color: #096A09 !important;
        stroke: #096A09 !important;
    }

    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button.ql-active{
        fill: #096A09 !important;
    }
`