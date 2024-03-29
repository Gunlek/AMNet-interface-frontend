import { createGlobalStyle } from "styled-components";

export const NProgressStyle = createGlobalStyle`
/* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }
  
    #nprogress .bar {
        background: #096a09;
    
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
    
        width: 100%;
        height: 3px;
    }
  
  /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #096a09, 0 0 5px #096a09;
        opacity: 1.0;
    
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }
  
  /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
    }
  
    #nprogress .spinner-icon {
        width: 25px;
        height: 25px;
        border: solid 3px transparent;
        box-sizing: border-box;
    
        border-top-color: #096a09;
        border-left-color: #096a09;
        border-radius: 50%;
    
        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }
  
    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }
  
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }
  
    @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default NProgressStyle;