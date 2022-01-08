import styled from "styled-components";

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

export const BlackTitle = styled(BlackText)`
  font-size: 2.6em;
  line-height: 80px;
`
export const StyledLink = styled.a`
  color:${(props) => props.color};

  &:hover{
        color: ${(props) => props.hovercolor};
        transition: color 0.2s;
  }
`;