import { createGlobalStyle } from "styled-components";

export const CampusGlobalStyle = createGlobalStyle` 
  body{
    padding: 0;
    height: 100vh;
  }

  #__next{
    padding: 0;
    flex-direction: ${(props) => props.flexDirection};
    position: relative;
  }

  main{
    justify-content: space-between;
    align-items: center; 
    padding: ${(props) => props.padding || "0"};
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 2;
    overflow: auto;
  }
`;