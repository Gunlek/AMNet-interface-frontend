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

    @media screen and (max-width: 1000px){
      background-image: none;

      &::before{
        content: "";
        background-image: url("/static/images/homepage/mobileCampus.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #c1c1c1;
        position: fixed;
        height: 100vh;
        width: 100vw;
      }
    }
  }

  #__next{
    padding: 0;
  }

  main{
    justify-content: space-between;
    align-items: center; 
    padding: ${(props) => props.padding || "0"};
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: flex;
    
    @media screen and (max-width: 1000px){
      position: absolute;
      z-index: 2;
    }
  }
`