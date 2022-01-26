import styled from "styled-components";

export const WhiteText = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const GreenText = styled(WhiteText)`
  color: #096a09;
`;

export const BlackText = styled(WhiteText)`
  color: black;
`;

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
  padding-right: 10px; 

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
`;

export const BlackP = styled(WhiteP)`
  color: black;
`

export const BlackUl = styled.ul`
  list-style-type: none;
  color: black;
  text-align: justify;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;

  li::before{
    content:url("/static/icons/bullet_losange.svg");
    position: relative; 
    margin-left: 20px;
    margin-right: 10px;
    display: inline-block;
    transform: rotate(180deg);
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

export const StyledLinkButton = styled.a`
  @media screen and (max-width: 420px){
    width: 100%;
    display: flex;
    align-itrems: center;
    justify-content: center;
  }
`;