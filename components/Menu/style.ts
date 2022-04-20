import styled from "styled-components";
import { StyledCard } from "../Card/style";
import { Row } from "../Container/style";

export const StyledMenu = styled(StyledCard)`
  height: 96%;
  padding: 0px;
  padding-Top:20px;
  padding-bottom:10px;
  align-items: center;
  z-index:2;

  @media screen and (max-width: 1000px){
    background: white;
    flex-direction: row;
    padding: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding-bottom: 25px;
    transition: box-shadow 0.3s linear;
    box-shadow: ${(props) => !props.Shadow && "none"};
  }
  
  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 10px;
    overflow: hidden;
    transition: height 0.3s linear;
    grid-auto-rows: auto 95px 95px 95px;
    height: ${(props) => props.mobileHeight+"px"};
  } 
`;

export const MenuContener = styled.div`
  width: 85px;
  position: fixed;
  height:100vh;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 1000px){
    z-index: 2;
    height: auto;
    width: 100%;
    position: ${(props) => props.top ? "absolute" : "fixed"};
    transition: transform ${(props) => (props.scroll < 115 && props.scroll > 100 ) ? "0s" : props.timeTransform };
    transform: ${(props) => ((!props.top) && !props.sticky)? 'translateY(-100%)' : 'translateY(0)'};
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
  width: 60px;
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