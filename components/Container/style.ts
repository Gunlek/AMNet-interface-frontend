import styled from "styled-components";


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Col11 = styled(Col)`
  flex: 11;
  max-width: 91.66%;
`;

export const Col10 = styled(Col)`
  flex: 10;
  max-width: 83.33%;
`;

export const Col8 = styled(Col)`
  flex: 8;
  max-width: 66.66%;
`;

export const Col7 = styled(Col)`
  flex: 7;
  max-width: 58.33%;
`;

export const Col6 = styled(Col)`
  flex: 6;
  max-width: 50%;
`;

export const Col4 = styled(Col)`
  flex: 4;
  max-width: 33.33%;
`;

export const Col3 = styled(Col)`
  flex: 3;
  max-width: 25%;
`;

export const Col2 = styled(Col)`
  flex: 2;
  max-width: 16.66%;
`;

export const Col1 = styled(Col)`
  flex: 1;
  max-width: 8.33%;
`;

export const DashboardContainer = styled.div`
  padding-left: 2%; 
  width: 100%; 
  justify-content: space-beween; 
  display: flex;
  flex-direction: column;
  margin-left: 85px;
`;