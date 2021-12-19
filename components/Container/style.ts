import styled from "styled-components";

export const StyledFlexCol = styled.div`
  flex-direction: column;
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const Column = styled.div`
  display: "flex";
  flex-direction: "column";
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
`;

export const Col10 = styled(Col)`
  flex: 10;
`;

export const Col6 = styled(Col)`
  flex: 6;
  // width: 50%;
`;

export const Col4 = styled(Col)`
  flex: 4;
  // width: 50%;
`;

export const Col3 = styled(Col)`
  flex: 3;
`;

export const Col2 = styled(Col)`
  flex: 2;
`;

export const StyledFlexDiv = styled.div`
  flex-grow: ${(props) => props.grow || "0"};
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;
