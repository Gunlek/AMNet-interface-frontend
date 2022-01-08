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
`;

export const StyledIcon = styled.svg`
  fill: black; 
  fill-opacity: 0.2;

  ${StyledBackIcon}:hover & {
    fill: white;
    fill-opacity: 1;
    transition: color fill 0.2s;
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