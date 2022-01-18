import styled from "styled-components";

export const StyledBackIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  
  z-index: 1;
  position: relative;

  &::before{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%);
    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
    border-radius: 15px;
  }

  &:hover::before{
    opacity: 1;
  }

  @media screen and (max-width: 1000px){
    margin: 0 5px;
  }
`;

export const StyledIcon = styled.svg`
  fill: #C5C7C6;
  transition: 0.3s;

  ${StyledBackIcon}:hover & {
    fill: white;
    fill-opacity: 1;
    
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
  transition: all 1s ease-out;
  ${StyledBackLogOut}:hover & {
    fill: #096a09;  
  }
`;

export const StyledPath = styled.path`
  fill: none; 
  stroke: #C5C7C6;
  stroke-width: 3.36px;
  transition: stroke 0.3s, fill 0.3s;

  ${StyledBackIcon}:hover & {
    stroke: white;
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
  transition: fill 0.3s;

  ${StyledLinkGitHub}:hover &{
    fill: #67bc45;
  }
`;