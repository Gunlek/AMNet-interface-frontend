import styled, { createGlobalStyle } from "styled-components";

export const CampusGlobalStyle = createGlobalStyle` 
  body{
    padding: 0;
    background-image: url("/static/images/campus.png");
    background-color: #c1c1c1;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;

    @media screen and (max-width: 1000px){
      background-attachment: scroll;
      background-position-x: 60%;
    }
  }

  #__next{
      justify-content: space-between;
      align-items: center; 
      padding: ${(props) => props.padding};
    }
`

export const BodyWithModal = createGlobalStyle` 
  body{
    height: ${(props) => props.reveal && '100vh'};
    overflow-y: ${(props) => props.reveal && 'hidden'}; 
    position: ${(props) => props.reveal && 'fixed'};
  }
`