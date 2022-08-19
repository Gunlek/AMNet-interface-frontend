import styled from "styled-components";
import { StyledCard } from "../Card/style";
import { Column, Row } from "../Container/style";

export const StyledMenu = styled(StyledCard)`
  height: 96%;
  padding: 0px;
  padding-Top:20px;
  padding-bottom:10px;
  align-items: center;
  z-index: 4;

  @media screen and (max-width: 1000px){
    width: 100%;
    background: white;
    padding: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    transition: box-shadow 0.3s linear;
    box-shadow: none;
  }
`;

export const MenuContener = styled.div`
  width: 85px;
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 4;
  top: 0;

  @media screen and (max-width: 1000px){  
    height: auto;
    width: 100%;
    position: ${(props) => props.top ? "absolute" : "fixed"};
    transition: transform ${(props) => (props.scroll < 115 && props.scroll > 100) ? "0s" : props.timeTransform};
    transform: ${(props) => ((!props.top) && !props.sticky) ? 'translateY(-100%)' : 'translateY(0)'};
    box-shadow: ${(props) => props.Shadow ? "0px 4px 14px rgba(0,0,0,0.06)" : "none"};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }  
`;

export const StyledDivLogo = styled(Row)`
  flex: 1;
  align-items: start; 
  justify-content: center; 
  margin-bottom: 10px;

  @media screen and (max-width: 1000px){
    margin-bottom: 0;
  }
`;

export const StyledDivLogOut = styled(Row)`
  flex: ${(props) => props.flex || "2"};
  margin-top: ${(props) => props.marginTop};
  align-items: end; 
  justify-content: center; 
  width: 100%;
  justify-self: center;
  display: ${(props) => props.Display};

  @media screen and (max-width: 1000px){
    flex-direction: column;
    align-items: center; 
    flex: 1;
    margin-top: 0;
  }

  @media screen and (max-width: 800px){
    display: ${(props) => props.mobileDisplay};
  }
`

export const StyledIconContener = styled(Column)`
  height: 100%;
  width: 80px;
  
  @media screen and (max-width: 1000px){
    width: 100%;
    flex-direction: row;
    padding: 10px;
    padding-bottom: 25px;
    transition: box-shadow 0.3s linear;
  }
  
  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 10px;
    overflow: hidden;
    transition: height 0.3s linear;
    grid-auto-rows: auto 95px 95px 95px;
    height: ${(props) => props.mobileHeight + "px"};
  }

  @media screen and (max-height: ${(props) => props.maxHeight}) and (min-width: 1000px){
    overflow-y: scroll;
    overflow-x: hidden;
  } 
`;