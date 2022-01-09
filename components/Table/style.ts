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
  display: flex;
  align-items: center;
`;

export const StyledTd50 = styled(StyledTd)`
  flex: 1;
  min-width: 50px;
`;

export const StyledTd100 = styled(StyledTd)`
  flex: 2;
  min-width: 100px;
`;

export const StyledTd150 = styled(StyledTd)`
  flex: 3;
  min-width: 150px;
`;

export const StyledTd200 = styled(StyledTd)`
  flex: 4;
  min-width: 200px;
`;

export const StyledTd250 = styled(StyledTd)`
  flex: 5;
  min-width: 250px;
`;

export const StyledTd350 = styled(StyledTd)`
  flex: 7;
  min-width: 350px;
`;

export const StyledTd400 = styled(StyledTd)`
  flex: 7;
  min-width: 400px;
`;

export const StyledTd500 = styled(StyledTd)`
  width: 500px;
`;

export const StyledTd850 = styled(StyledTd)`
  width: 850px;
`;