import styled from "styled-components";

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
`

export const StyledTd = styled.td`
  padding : 15px 25px;
  white-space: nowrap;

  &:first-child {
    padding-left: 20px;
  }
  
  &:last-child {
    padding-right: 0;
  }
`;

export const StyledUsersTr = styled(StyledTr)`
  &:nth-child(2n+1){
    ${StyledTd} {
      background: rgba(0, 0, 0, 0.075);
    }
  }

  &:hover{
    ${StyledTd} {
      background: rgba(0, 0, 0, 0.2);
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
  width:100vw;
`;

export const StyledTh = styled.th`
  font-weight: normal;
  text-align: start;
  padding : 15px 25px;
  background: #096A09;
  color: white;

  &:first-child {
    background: #096A09;
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;