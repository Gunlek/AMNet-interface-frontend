import styled from "styled-components";

export const StyledBackIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 60px;
  width: 60px;

  &:hover{
    background: linear-gradient(134.54deg, #67BC45 5.67%, #096A09 94.96%);
    border-radius: 15px;
    transition: color 0.2s;
  }
  @media screen and (max-width: 1000px){
    margin: 0 5px;
  }
`;

export const StyledIcon = styled.svg`
  fill: #C5C7C6;

  ${StyledBackIcon}:hover & {
    fill: white;
    fill-opacity: 1;
    transition: 0.2s;
  }
`;

export const StyledBackLogOut = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 60px;
  
  
`;

export const StyledLogOut = styled.svg`
  ${StyledBackLogOut}:hover & {
    fill: #096a09;
    transition: fill 0.2s;
  }
`;

export const StyledPath = styled.path`
  fill: none; 
  stroke: black;
  stroke-opacity: 0.2; 
  stroke-width: 3.36px;

  ${StyledBackIcon}:hover & {
    stroke: white;
    stroke-opacity: 1; 
    transition: color fill 0.2s;
  }
`;

export const StyledLinkGitHub = styled.a`
  justify-content: center; 
  display: flex;
  align-items: center; 
  margin-left: 7.5px;
`;

export const StyledGitHub = styled.path`
  fill: #096a09; 

  ${StyledLinkGitHub}:hover &{
    transition: fill 0.2s;
    fill: #67bc45;
  }
`;