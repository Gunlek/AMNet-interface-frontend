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
      margin: 0;
      padding: 0 5%;
      width: 100%;
      flex:1;
      display: flex;
      flex-Direction: column;
      justify-content: space-between;
      align-items: center; 
    }
`

export const BodyWithModal = createGlobalStyle` 
  body{
    @media screen and (max-width: 1000px){
      height: ${(props) => props.reveal && '100vh'};
      overflow-y: ${(props) => props.reveal && 'hidden'}; 
      position: ${(props) => props.reveal && 'fixed'};
    }
}`