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
  border-radius: 14px;

  

  @media screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    border : none;
    justify-items: center;
    grid-gap: 15px 0px;
    :nth-child(2n+1) {
    background: rgba(0, 0, 0, 0.15);
    
  }
  } 
`;

export const StyledGreenTr = styled.tr`
  padding: 10px 30px;
  display: flex;
  border-radius: 14px;
  background: #096A09;
  color: white;
  font-size: 1.2em;
  justify-items: center;

  @media screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
    
  
  } 
`;

export const StyledTd = styled.td`
  display: flex;
  align-items: center;
  
`;

export const StyledTd50 = styled(StyledTd)`
  flex: 1;
  min-width: 50px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd100 = styled(StyledTd)`
  flex: 2;
  min-width: 100px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd150 = styled(StyledTd)`
  flex: 3;
  min-width: 150px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd200 = styled(StyledTd)`
  flex: 4;
  min-width: 200px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd250 = styled(StyledTd)`
  flex: 5;
  min-width: 250px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd350 = styled(StyledTd)`
  flex: 7;
  min-width: 350px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd400 = styled(StyledTd)`
  flex: 7;
  min-width: 400px;

  @media screen and (max-width: 1000px){
    min-width: 0;
  }
`;

export const StyledTd500 = styled(StyledTd)`
  width: 500px;
`;

export const StyledTd850 = styled(StyledTd)`
  width: 850px;
`;