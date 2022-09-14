import styled from "styled-components";

export const StyledDeleteImg = styled.img.attrs({ src: "/static/icons/fail.svg" })`
  border-radius: 50%;
  transition: background-color 0.3s;
  margin-left: 10px;
  width: 1.4rem;
  padding: 0.2rem;
  cursor: pointer;

  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export const StyledCancelImg = styled.img.attrs({ src: "/static/icons/cancel.svg" })`
  border-radius: 8px;
  transition: box-shadow 0.2s;
  margin-left: 20px;
  width: 35px;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  }
`

export const StyledLogo = styled.svg`
  height: ${props => (props.height || "100px")};
  aspect-ratio: 19 / 8.5; 
  pointer-events: none;

  @media screen and (max-width: 1000px){
    height: 100px; 
  } 
`