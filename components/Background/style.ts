import styled, { createGlobalStyle } from "styled-components";

export const CampusBackground = styled.div`
  flex:1;
  display: flex;
  flex-Direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5% 0 5%;

  @media screen and (max-width: 1000px){
    padding: 2.5% 5% 0 5%; 
  }
`;

export const CampusGlobalStyle = createGlobalStyle` 
  body{
    display: flex;
  flex-Direction: column;
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
}`

export const DefaultBackground = styled.div`
  min-height: 100vh;
  padding: 0 2%;
  
  display: flex;

  @media screen and (max-width: 1000px){
    padding: 0;
  }  
`;


