import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  font-family: "Poppins";
`;

export const StyledTr = styled.tr`
  padding: 10px 30px;
  display: flex;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  color: black;
  font-size: 1.2em;
`;

export const StyledGreenTr = styled.tr`
  padding: 10px 30px;
  display: flex;
  border-radius: 14px;
  background: #096A09;
  color: white;
  font-size: 1.2em;
`;

export const StyledTd = styled.td`
  flex: ${(props) => props.flex || "2"};
  display: flex;
  align-items: center;
`;