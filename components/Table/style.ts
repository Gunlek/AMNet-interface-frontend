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
  transition: 0.3s linear;

  &:hover{
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledGreenTr = styled.tr`
  background: #096A09;
  color: white;
`;

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

export const StyledFlexTd = styled(StyledTd)`
  width:100vw;
`;

export const StyledTh = styled.th`
  font-weight: normal;
  text-align: start;
  padding : 15px 25px;

  &:first-child {
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;