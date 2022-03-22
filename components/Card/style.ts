import styled, { keyframes } from "styled-components";
import { Column } from "../Container/style";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.radius || "30px"};
  padding: ${(props) => props.padding || "20px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  scrollbar-color: #C4C4C4 rgba(255, 255, 255, 0.6);
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
  } 
`;

export const StyledCardCampus = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.9);
  scrollbar-color: #C4C4C4 rgba(255, 255, 255, 0.9);
  
  @media screen and (max-width: 1000px){
    width: 100%;
    margin-bottom: ${(props) => props.mobileMarginBottom};
  } 
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding: 5px 40px;
  font-size: 1.2em;
`;

export const StyledTeamPicture = styled(Column)`
  background-image: url(${props => props.background || "/static/images/homepage/team.jpg"});
  outline: ${props => props.outline};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: 30px;
  
  @media screen and (max-width: 1000px){
    height: 400px;
  } 
`;

export const StyledHelpSection = styled.div`
  color: ${(props) => props.color || "#FFFFFF"};
  text-align: center;
  font-size: 1.2em;
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom};
  
  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
    padding: ${(props) => props.padding};
  }
`;

export const GreenLine = styled.div`
  flex: 1;
  border: 1px solid #096A09;
  height: 0px;
  background: #096a09;
  display: ${(props) => props.hideLine ? "none" : "block"};
  margin-left: ${(props) => props.hideLine ? "0" : "10px"};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
  margin-right: -2%;
  padding: 0 5px;
  margin-top: ${(props) => props.marginTop  || "10px"};
  margin-bottom: 10px;
  
  @media screen and (max-width: 1000px){
    text-align: center;
    margin-right: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  } 
`;

export const StyledCampusFooter = styled(StyledFooter)`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  margin-right: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 0;

  
  @media screen and (max-width: 1000px){
    padding-right: 10px;
    padding-left: 10px;
  } 
`;

export const StyledTabColumn = styled(Column)`
  color: ${(props) => props.focus ? "black" : "rgba(0, 0, 0, 0.3)"};
  font-size: 1.2em;
  text-align: center;
  line-height: 40px;
  transition: color 0.3s, background-color 0.3s;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${(props) => !props.focus && "pointer"};

  &:hover{
    background-color: ${(props) => !props.focus && "rgba(0, 0, 0, 0.1)"};
    color: black;
  }

  &:after{
    transform: translateY(50%);
    content: "";
    width: 100%;
    background-color: ${(props) => props.afterBackground};;
    height: 4px;
    transition: background-color 0.3s;
  }
`;

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

export const StyledBackgroundModal = styled.div`
  background: rgba(0, 0, 0, 0.5); 
  position: fixed; 
  height: 150%; 
  width: 100%; 
  left: 0; 
  top: 0;  
  transition: z-index 0.3s linear, opacity 0.3s linear;
  z-index: ${props => props.reveal ? "3" : "-1"};
  opacity: ${props => props.reveal ? "1" : "0"};
`;

export const StyledModal = styled(StyledCardCampus)`
  background: white;
  width: ${props => props.width || "90%"};
  align-items: center; 
  justify-content: center;
  padding: 30px; 
  position: fixed; 
  top: 50%; 
  left: 50%;
  transition: z-index 0.3s linear, opacity 0.3s linear;
  transform: translate(-50%, -50%);
  z-index: ${props => (props.reveal ? "4" : "-1")};
  opacity: ${props => (props.reveal ? "1" : "0")};
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