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
  }
  
  @media screen and (max-width: 800px){
    display: grid;
    grid-Template-Columns: 1fr 1fr 1fr;
    justify-items: center;
  } 
`;

export const MenuContener = styled.div`
  width: 85px;
  position: fixed; 
  height:100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px){
    height: auto;
    width:100%;
    transition: transform 0.3s;
    transform: ${(props) => props.sticky? 'translateY(0)' : 'translateY(-100%)' };
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
  flex: 2;
  align-items: end; 
  justify-content: center; 
  width: 60px;
  display: ${(props) => props.display};

  @media screen and (max-width: 1000px){
    flex-direction: column;
    align-items: center; 
    flex: 1;
  }
`