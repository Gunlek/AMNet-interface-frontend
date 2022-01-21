import styled from "styled-components";
import { Column } from "../Container/style";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.radius || "30px"};
  padding: ${(props) => props.padding || "20px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;

export const StyledCardCampus = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.9);

  @media screen and (max-width: 1000px){
    width: 100%;
  } 
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding: 5px 40px;
  font-size: 1.2em;
`;

export const StyledTeamPicture = styled(Column)`
  background-image: url("/static/images/team.png");
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  height: 45vh;

  border-radius: 30px;
  
  @media screen and (max-width: 1000px){
    height: 400px;
  } 
`;

export const StyledHelpSection = styled.div`
  color: ${(props) => props.color || "#FFFFFF"};
  text-align: center;
  font-size: 1.2em;
  width: 100%;
`;

export const GreenLine = styled.div`
  width: 100%;
  border: 1px solid #096A09;
  height: 0px;
  background: #096a09;
`;

export const StyledFooter = styled.footer`
  display:flex;
  justify-content: end;
  align-items: center;
  margin:0;
  margin-right: -2%;
  padding-right: 5px;
  margin-top: 10px;
  padding-top:5px;
  padding-bottom:5px;

  @media screen and (max-width: 1000px){
    text-align: center;
    padding-top:10px;
    padding-bottom:10px;
  } 
`;

export const StyledCampusFooter = styled(StyledFooter)`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;

  @media screen and (max-width: 1000px){
    padding-right: 10px;
    padding-left:10px;
  } 
`;