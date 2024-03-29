import { motion } from "framer-motion";
import styled from "styled-components";

export const WhiteText = styled.div`
  color: white;
  font-size: 1.2rem;

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
    text-align: ${(props) => props.mobileAlignTxt};
  }

  @media screen and (max-width: 500px){
    font-size: ${props => props.fontSize};
  }

  @media screen and (max-width: 1450px) and (min-width: 1000px){
    font-size: ${props => props.fontSize}
  }
`;

export const GreenText = styled(WhiteText)`
  color: #096a09;
`;

export const BlackText = styled(WhiteText)`
  color: black;
`;

export const NewsMessage = styled(BlackText)`
  a{
    color: #096a09;
    transition: color 0.3s;

    &:hover{
      color: #67bc45 !important;
      cursor: pointer;
    }
  }
`

export const BlackTitle = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2.6rem;
  line-height: 80px;
  color: black;

  @media screen and (max-width: 1000px){
    font-size: 2rem;
    line-height: 40px;
    text-align: center;
  }
`;

export const GreenTitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.8rem;
  color: #096a09;

  @media screen and (max-width: 1000px){
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const WhiteP = styled.p`
  color: white;
  text-align: justify;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
    text-align: ${(props) => props.mobileAlignTxt};
  } 
`;

export const BlackP = styled(WhiteP)`
  color: black;
`

export const ErrorPNoFixed = styled(WhiteP)`
  color: red;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`

export const ErrorP = styled(ErrorPNoFixed).attrs({
  as: motion.p,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: "linear" }
})`
  margin-top: 0;
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1000px){
    bottom:  -22px;
  } 
`

export const BlackUl = styled.ul`
  color: black;
  text-align: justify;
  font-size: 1.2rem;
  margin: 0;
  padding:0;
  margin-bottom: ${(props) => props.marginBottom};

  @media screen and (max-width: 1000px){
    margin-bottom: ${(props) => props.mobileMarginBottom};
  } 
  
  li{
    list-style-type: none;
    margin-left: 20px;
    background: url("/static/icons/bullet_losange.svg") no-repeat 0 0.25rem;
    padding-left: 30px;
  }
`;

export const StyledLink = styled.a`
  font-size: 1.2rem;
  color:${(props) => props.color};
  transition: color 0.3s;
  
  &:hover{
    color: ${(props) => props.hovercolor || "#67bc45"};
    cursor: pointer;
  }
`;