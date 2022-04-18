import { createGlobalStyle } from "styled-components";

export const CampusGlobalStyle = createGlobalStyle` 
  body{
    padding: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/static/images/homepage/campus2.jpg");
    background-position-x: 50%;
    background-color: #c1c1c1;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    scrollbar-color: auto;
  }

  #__next{
    justify-content: space-between;
    align-items: center; 
    padding: ${(props) => props.padding || "0"};
    flex-direction: column;
  }
`