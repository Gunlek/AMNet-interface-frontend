import styled from "styled-components";

export const StyledImg = styled.img`
  border-radius: ${(props) => props.shadow ? "8px" : "50%"};
  transition: 0.3s;
  margin-left: ${(props) => props.marginLeft || "10px"};
  width: ${(props) => props.width || "1.4rem"};
  padding: ${(props) => props.padding || "0.2rem"};
  cursor: pointer;

  &:hover{
    background: ${(props) => !props.shadow && "rgba(0, 0, 0, 0.1)"};
    box-shadow: ${(props) => props.shadow && "0px 2px 10px rgba(0, 0, 0, 0.4)"};
  }
`

export const StyledMinImg = styled.img`
  width: 90%;
  height: auto;
  aspect-ratio: 1 / 1; 

  @media screen and (max-width: 1000px){
    width: auto; 
    height: 80%; 
  } 
`

export const StyledLogo = styled.svg`
  height: ${props => (props.height || "100px")};
  aspect-ratio: 19 / 8.5; 

  @media screen and (max-width: 1000px){
    height: 100px; 
  } 
`