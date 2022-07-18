import styled, { keyframes } from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  font-family: "Poppins";
  font-size: 1.2rem; 
  border-collapse: collapse;
  text-decoration: none;
  table-layout: auto;
`;

export const StyledTr = styled.tr`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  color: black;
`;

export const StyledHeadTr = styled(StyledTr)`
  border-bottom: 2px transparent;
  font-size: 1.2rem;
`

export const StyledTd = styled.td`
  padding : 15px 25px;
  white-space: nowrap;
  transition: background-color 0.2s;
  background-color: ${(props) => props.BackgroundColor};
  text-align: ${(props) => props.textAlign};
  overflow-x: auto;
  overflow-y: hidden;

  &:first-child {
    padding-left: 20px;
    padding-right:0;
  }
  
  &:last-child {
    padding-right: 0;
  }
`;

export const StyledTeamTr = styled(StyledTr)`
  &:hover{
    ${StyledTd} {
      background-color: rgba(0, 0, 0, 0.2) !important;
    }   
  }

  &:last-child{
    border-bottom: 2px transparent;

    ${StyledTd}:first-child {
      border-bottom-left-radius: 10px;
    }

    ${StyledTd}:last-child {
      border-bottom-right-radius: 10px;
   }
  }

  &:first-child{ 
    ${StyledTd}:first-child {
      border-top-left-radius: 10px;
    }

    ${StyledTd}:last-child {
      border-top-right-radius: 10px;
    } 
  }
`;

export const StyledFlexTd = styled(StyledTd)`
  width: 100vw;
`;

export const StyledTh = styled.th`
  font-weight: normal;
  text-align: start;
  white-space: nowrap;
  padding : 15px 25px;
  background: #096A09;
  color: white;
  user-select: none;
  text-align: ${(props) => props.textAlign};

  &:first-child {
    background: #096A09;
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-right:0;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-right:0;
  }
`;

export const StyledUsersTr = styled(StyledTeamTr).attrs({as: "div"})`
  border-bottom: none;
`;

export const StyledUsersBody = styled.div`
  position : relative;
  font-size: 1.2rem;
`;

export const StyledMobileContainerRow = styled.div`
  min-width: 0 !important;
`;

const opacityIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const opacityOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Tbody = styled.tbody`
  animation: ${(props) => props.Opacity == "in" ? opacityIn : props.Opacity == "out" ? opacityOut : undefined} 0.3s linear;
  position: relative;
`;

export const Thead = styled(Tbody).attrs({ as: 'thead' })``;

export const MobileTbody = styled(Tbody).attrs({ as: 'div' })``;

export const MacTooltip = styled.div`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  border: 2px solid red;
  background: white;
  width: auto;
  padding: 10px;
  border-radius: 15px;
  z-index: 7;
  animation: ${(props) => props.Opacity == "in" ? opacityIn : props.Opacity == "out" ? opacityOut : undefined} 0.4s;
`;

