import styled from "styled-components";
import { StyledCard } from "../Card/style";
import { Row } from "../Container/style";

export const StyledMenu = styled(StyledCard)`
  height: 100%;
  padding: 0px;
  padding-Top:20px;
  padding-bottom:10px; 
  align-items: center;

  @media screen and (max-width: 1000px){
    background: rgba(255, 255, 255, 0.9);
    flex-direction: row;
    padding: 0 10px;
    justify-content: center;
  }  
`;

export const MenuContener = styled.div`
  width: 85px;
  position: fixed; 
  height: 96vh;

  @media screen and (max-width: 1000px){
    height: 85px;
    width: 90%;
  }  
`;

export const StyledDivLogo = styled(Row)`
  flex: 1;
  align-items: start; 
  justify-content: center; 
  margin-bottom: 10px;

  @media screen and (max-width: 1000px){
    margin-bottom: 0;
    margin-right: 20px;
    
  }
`;

export const StyledDivLogOut = styled(Row)`
  flex: 2;
  align-items: end; 
  justify-content: center; 
  width: 60px;

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`

export const StyledImg = styled.img`
  width: 76.5px;

  @media screen and (max-width: 1000px){
    width: 65px;
  }
`