import styled from "styled-components";

export const StyledBackIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  z-index: 3;
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
  
  &::after{
    position: absolute;
    content:  ${(props) => props.content && '"'+props.content+'"'};
    top: 50%;
    left: 125%;
    transform: translateY(-50%);
    transition: opacity 0.3s linear;
    opacity: 0;
    border-radius: 15px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    width: max-content;
    pointer-events: none;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
    z-index: 3;
  }

  &:hover::after{
    opacity: 1;
  }

  @media screen and (max-width: 1000px){
    margin: 7.5px 5px 10px;

    &::after{
      left: 50%;
      top: 85%;
      opacity: 1;
      box-shadow: none;
      background: none;
      transform: translateX(-50%);
    }
  }
`;

export const StyledBackBurger = styled.div`
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
    opacity: ${(props) => props.opacity || "0"};
    border-radius: 15px;
  }

  @media screen and (max-width: 1000px){
    margin: 0 5px;
  }
`;

export const StyledActiveIcon = styled.div`
  height: 60px; 
  width: 60px; 
  background: linear-gradient(135deg, #67BC45 5.67%, #096A09 94.96%); 
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1000px){
    margin: 7.5px 5px 10px;

    &::after{
      position: absolute;
      content:  ${(props) => props.content && '"'+props.content+'"'};
      border-radius: 15px;
      padding: 10px;
      width: max-content;
      pointer-events: none;
      z-index: 2;
      left: 50%;
      top: 85%;
      opacity: 1;
      transform: translateX(-50%);
    }
  }
`;

export const StyledIcon = styled.svg`
  fill: #C5C7C6;
  transition: fill 0.3s linear;

  ${StyledBackIcon}:hover & {
    fill: white;    
  }

  ${StyledBackBurger}:hover & {
    fill: white;    
  }
`;

export const StyledBackLogOut = styled.a`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 60px;
`;

export const StyledLogOut = styled.svg`
  ${StyledBackLogOut}:hover & {
    fill: #096a09;  
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