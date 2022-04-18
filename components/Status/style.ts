import styled from "styled-components";

export const StyledStateRequest = styled.div`
  border-radius: 16px;
  height: 40px;
  width: 150px;
  line-height: 40px;
  color: ${(props) => props.color || "#FF9900"};
  text-align: center;
  margin: ${(props) => props.center && "0 auto"};
  user-select: none;
  position: relative;
  outline: 2px solid ${(props) => props.color || "#FF9900"};

  @media screen and (max-width: 1000px){
    width: 140px;
  }
`

export const StyledStateContribution = styled.div`
  background: #D1D5D2;
  border-radius: 20px;
  line-height: 40px;
  padding: 5px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStateInvite = styled.select`
  background-color: ${(props) => props.status? "#67BC45" : "#F23232"};
  border-radius: 16px;
  height: 40px;
  width: 150px;
  font-size: 1.2em;
  font-family: "Poppins";
  padding-left: 20px;
  color: white;
  border: none;
  font-family: "Poppins";
  transition: background-color 0.2s;

  option {
      color: black;
      background: white;
    }

  &:focus{
    outline: none;
  }
`;