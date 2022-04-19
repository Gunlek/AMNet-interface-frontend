import { createGlobalStyle } from "styled-components";

export const CampusGlobalStyle = createGlobalStyle` 
  body{
    padding: 0;
    background-image: url("/static/images/homepage/campus.jpg");
    background-position-x: 50%;
    background-color: #c1c1c1;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    scrollbar-color: auto;

    @media screen and (max-width: 1000px){
      background-image: url("/static/images/homepage/mobileCampus.jpg");
    }
  }

  #__next{
    justify-content: space-between;
    align-items: center; 
    padding: ${(props) => props.padding || "0"};
    flex-direction: column;
  }
`