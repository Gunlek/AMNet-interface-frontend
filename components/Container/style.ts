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
`;

export const Col10 = styled(Col)`
  flex: 10;
`;

export const Col8 = styled(Col)`
  flex: 8;
`;

export const Col6 = styled(Col)`
  flex: 6;
`;

export const Col4 = styled(Col)`
  flex: 4;
`;

export const Col3 = styled(Col)`
  flex: 3;
`;

export const Col2 = styled(Col)`
  flex: 2;
`;