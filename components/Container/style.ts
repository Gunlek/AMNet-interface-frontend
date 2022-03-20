import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  @media screen and (max-width: 1000px) {
    width: ${(props) => props.mobileWidth};
    margin: ${(props) => props.mobileMargin};
    margin-bottom: ${(props) => props.mobileMarginBottom};
    justify-content: ${(props) => props.mobileJustify};
    align-items: ${(props) => props.mobileAlign};
  }
`;

export const Row = styled(Column)`
  flex-direction: row;
  margin: ${(props) => props.margin};

  @media screen and (max-width: 1000px){
    width: ${(props) => props.mobileWidth};
    margin: ${(props) => props.mobileMargin};
  
  @media screen and (max-width: 600px){
    flex-direction: ${(props) => props.direction};
  } 
`;

export const ResponsiveRow = styled(Row)`
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: ${(props) => props.mobileMarginBottom};
    justify-content: ${(props) => props.mobileJustify};
    align-items: ${(props) => props.mobileAlign};
  }
`;

export const Col11 = styled(Col)`
  flex: 11;
  max-width: 91.66%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col10 = styled(Col)`
  flex: 10;
  max-width: 83.33%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col9 = styled(Col)`
  flex: 9;
  max-width: 75%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col8 = styled(Col)`
  flex: 8;
  max-width: 66.66%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col7 = styled(Col)`
  flex: 7;
  max-width: 58.33%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col6 = styled(Col)`
  flex: 6;
  max-width: 50%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col5 = styled(Col)`
  flex: 5;
  max-width: 41.66%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col4 = styled(Col)`
  flex: 4;
  max-width: 33.33%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col3 = styled(Col)`
  flex: 3;
  max-width: 25%;
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: ${(props) => props.MobileMarginBottom};
  }
`;

export const Col2 = styled(Col)`
  flex: 2;
  max-width: 16.66%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Col1 = styled(Col)`
  flex: 1;
  max-width: 8.33%;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const DashboardContainer = styled.div`
  padding-left: 2%;
  width: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  margin-left: 85px;
  margin-top: 1%;
  flex: 1;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    margin-top: 95px;
    padding: 0 5% 2.5%;
  }
`;

export const CheckboxRow = styled(Row)`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.width || "125px"}, 1fr)
  );
  align-items: center;
  gap: 15px 0;
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px) {
    justify-items: ${(props) => props.justify};
    margin-bottom: ${(props) => props.mobileMarginBottom};
  }
`;
