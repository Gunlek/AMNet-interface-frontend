import styled from "styled-components";

export const CampusBackground = styled.div`
  min-height: 100vh;
  background-image: url("/static/images/campus.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-Direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5% 0 5%;

  @media screen and (max-width: 1000px){
    padding: 2.5% 5% 0 5%;
  }  
`;

export const DefaultBackground = styled.div`
  min-height: 100vh;
  padding: 0 2%;
  background: #E8EFEA;
  display: flex;

  @media screen and (max-width: 1000px){
    padding: 0;
  }  
`;

