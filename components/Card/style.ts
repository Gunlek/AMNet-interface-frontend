import styled from "styled-components";
import { SmallStyledRedButton } from "../Button/style";
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
  min-height: ${(props) => props.minHeight};

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
    min-height: ${(props) => props.mobileMinHeight};
  } 
`;

export const StyledCardCampus = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.9);
  scrollbar-color: #C4C4C4 rgba(255, 255, 255, 0.9);
  
  @media screen and (max-width: 1000px){
    width: 100%;
  } 
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding: 5px 0 5px 40px;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1000px){
    padding: 5px 10px 5px 20px;
  }
`;

export const StyledTeamPicture = styled(Column)`
  outline: ${props => props.outline};
  aspect-ratio: 16 / 9;
  border-radius: 30px;
  z-index: 2;
  position: relative;
  overflow: hidden;
  
  @media screen and (max-width: 1000px){
    height: 400px;
    aspect-ratio: auto;
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
  padding: 0 5px;
  margin-top: ${(props) => props.marginTop || "10px"};
  margin-bottom: 6px;
  margin-right: -1.8%;
  
  @media screen and (max-width: 1000px){
    text-align: center;
    margin-right: 0;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
  } 
`;

export const StyledCampusFooter = styled(StyledFooter)`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  margin-right: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-bottom: 0;
  padding-right: 0.6%;
  
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
  user-select: none;
  cursor: ${(props) => !props.focus && "pointer"};
  -webkit-tap-highlight-color: transparent;
  
  &:hover{
    background-color: ${(props) => !props.focus && "rgba(0, 0, 0, 0.1)"};
    color: black;
  }
`;

export const StyledActive = styled.div`
  transform: ${(props) => props.Transform};
  width: ${(props) => props.Declined ? "7.5rem" : "6.25rem"};
  background-color: #096A09;
  height: 4px;
  transition: transform 0.75s, width 0.75s;
  position: absolute;
  bottom: -2px;
  left: 0;

  @media screen and (max-width: 365px){
    width: ${(props) => props.Declined ? "125%" : "100%"};
  } 
`;

export const ContainerAdminToolTip = styled.div`
  margin-left: 10px; 
  display: flex;
  cursor: pointer;
  padding: 5px;
`;

export const StyledAdminToolTip = styled(StyledCardCampus)`
  position: absolute;
  top: 70px;
  left: 100%;
  transform: translateX(-50%);
  width: max-content;
  font-size: 1.2rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, z-index 0.3s;
  background: white;

  @media screen and (max-width: 1000px){
    width: 90vw;
    left: 50%;
  } 

  ${ContainerAdminToolTip}:hover &{
    opacity: 1;
    z-index: 2;
  }
`;

export const StyledGuestToolTip = styled(StyledAdminToolTip)`
  left: 50%;
  top: 40px;
`;

export const StyledInfoSVG = styled.svg`
  fill: #096A09;
  width:20px;
  height: 20px;
  transition: fill 0.2s;

  ${ContainerAdminToolTip}:hover &{
    fill: #67bc45;
  }
`;

export const StyledMaterialToolTip = styled(StyledCardCampus)`
  position: absolute;
  top: 70px;
  left: 0;
  transform: translateX(-50%);
  width: max-content;
  font-size: 1.2rem;
  opacity: 0;
  z-index: -2;
  transition: opacity 0.3s, z-index 0.3s;
  background: white;
  color: black;

  @media screen and (max-width: 1000px){
    top: -20%;
    left: 0;
    transform: translateX(-30%);
  } 

  ${SmallStyledRedButton}:hover &{
    opacity: 1;
    z-index: 2;
  }
`;