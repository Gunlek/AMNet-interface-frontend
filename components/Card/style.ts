import styled from "styled-components";
import { StyledFlexCol, StyledFlexDiv } from "../Container/style";

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: ${(props) => props.radius || "30px"};
  padding: 20px 0;
  width: 100%;
`;

export const StyledGreenCard = styled.div`
  background: #096a09;
  border-radius: 13px 20px 20px 0px;
  color: #ffffff;
  width: 99%;
  padding-left: 47px;
  height: 2.2rem;
  line-height: 2.2rem;
  font-size: 1.1rem;
`;

export const StyledInput = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
`;

export const StyledRadio = styled.input`
  width: 34px;
  height: 34px;
  border: 4px solid #096a09;
  box-sizing: border-box;
  border-radius: 9px;
`;

export const StyledTeamPicture = styled(StyledFlexCol)`
  background-image: url("/static/images/team.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

export const StyledHelpSection = styled.div`
  color: ${(props) => props.color || "#FFFFFF"};
  text-align: center;
  font-size: 1.1rem;
  width: 100%;
  padding: 10px 0;
`;

export const WhiteText = styled.div`
  color: white;
  font-size: 1.2em;
`;

export const GreenText = styled(WhiteText)`
  color: #096a09;
`;

export const BlackText = styled(WhiteText)`
  color: black;
`;

export const GreenLine = styled.div`
  width: 80%;
  height: 2px;
  background: #096a09;
`;
