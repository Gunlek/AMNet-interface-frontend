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
  font-size: 1.2rem;
`

export const StyledTd = styled.td`
  padding : 15px 25px;
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

export const StyledReqTd = styled(StyledTd)`
  padding : 0 25px;
`;

export const StyledUsersTd = styled(StyledTd)`
  white-space: nowrap;
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

export const StyledUsersTr = styled(StyledTeamTr)`
  border-bottom: none;
`;