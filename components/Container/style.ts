import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  display: ${(props) => props.Display};
  padding-left: ${(props) => props.paddingLeft};
  padding-bottom: ${(props) => props.paddingBottom};
  height: ${(props) => props.Height};

  @media screen and (max-width: 1000px){
    width: ${(props) => props.mobileWidth};
    margin: ${(props) => props.mobileMargin};
    margin-bottom: ${(props) => props.mobileMarginBottom};
    justify-content: ${(props) => props.mobileJustify};
    align-items: ${(props) => props.mobileAlign};
    padding-left: 0;
    padding-bottom: 0;
    height: ${(props) => props.MobileHeight};
  }

  @media screen and (max-width: 800px){
    display: ${(props) => props.mobileDisplay};
  }
`;

export const Row = styled(Column)`
  flex-direction: row;
  
  @media screen and (max-width: 600px){
    flex-direction: ${(props) => props.direction};
  } 
`;

export const ResponsiveRow = styled(Row)`
  @media screen and (max-width: 1000px){
    flex-direction: ${(props) => props.direction || "column"};
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

  @media screen and (max-width: 1000px){
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: ${(props) => props.mobileMarginBottom};
    justify-content: ${(props) => props.mobileJustify};
    align-items: ${(props) => props.mobileAlign};
    flex: ${(props) => props.mobileFlex};
  }
`;

export const Col11 = styled(Col)`
  flex: 11;
  max-width: 91.66%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col10 = styled(Col)`
  flex: 10;
  max-width: 83.33%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col9 = styled(Col)`
  flex: 9;
  max-width: 75%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col8 = styled(Col)`
  flex: 8;
  max-width: 66.66%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col7 = styled(Col)`
  flex: 7;
  max-width: 58.33%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col6 = styled(Col)`
  flex: 6;
  max-width: 50%;
  
  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col5 = styled(Col)`
  flex: 5;
  max-width: 41.66%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col4 = styled(Col)`
  flex: 4;
  max-width: 33.33%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col3 = styled(Col)`
  flex: 3;
  max-width: 25%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col2 = styled(Col)`
  flex: 2;
  max-width: 16.66%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const Col1 = styled(Col)`
  flex: 1;
  max-width: 8.33%;

  @media screen and (max-width: 1000px){
    max-width: 100%;
  }
`;

export const DashboardContainer = styled.div.attrs((props) => ({
  as: motion.div,
  variants: variants,
  initial: props.initial || "hidden",
  animate: "enter",
  exit: props.exit || "exit",
  transition: { type: 'linear' }
}))`
  padding: 0 2%; 
  padding-top: 1%;
  margin-left: 85px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: fill-available;
  
  @media screen and (max-width: 1000px){
    width: 100%;
    margin-left: 0;
    margin-top: 95px;
    height: auto;
    max-width: none;
    padding: 0 5%;
  }

  @media screen and (max-width: 1000px ) and (min-width: 801px){
    margin-top: 112.5px;
  }
`;

export const StyledMain = styled.main.attrs((props) => ({
  as: motion.main,
  variants: props.variants,
  initial: "hidden",
  animate: "enter",
  exit: "exit",
  transition: { type: 'linear' }
}))`
  display: flex;
  flex: 1;
  height: 100%;
  max-width: fill-available;
`;

export const CheckboxRow = styled(Row)`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(${(props) => props.colWidth || "125px"}, 1fr));
  align-items: center;
  gap: 15px 0;
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px){
    justify-items: ${(props) => props.justify};
    margin-bottom: ${(props) => props.mobileMarginBottom};
    grid-template-columns: repeat(auto-fill,minmax(${(props) => props.mobileColWidth}, 1fr));
  } 
`;

export const ButtonsRow = styled(Row)`
  display: grid;
  grid-Template-Columns: repeat(auto-fill,minmax(425px, 1fr));
  grid-Auto-Rows: 70px;
  border: none;
  justify-items: center;
  align-items: center;
  gap: 20px 0;

  @media screen and (max-width: 1700px){
    grid-Template-Columns: repeat(auto-fill,minmax(300px, 1fr))
  } 
`;

export const MinecraftContainer = styled.div`
   position: relative; 
   width: 90%; 
   height: 90%;
   display: flex;
   align-items: center;
   
   @media screen and (max-width: 1000px){
    height: 130px;
    width: 130px;
    margin-top: 20px;
  } 
`;