import styled from "styled-components";

export const StyledStateRequest = styled.div`
  background: ${(props) => props.background || "#FF9900"};
  border-radius: 16px;
  height: 40px;
  width: 150px;
  line-height: 40px;
  color: white;
  text-align: center;
`

export const StyledStateContribution = styled.div`
  background: #D1D5D2;
  border-radius: 30px;
  line-height: 40px;
  padding: 5px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStateInvite = styled.select`
  background: ${(props) => props.status? "#67BC45" : "#F23232"};
  border-radius: 16px;
  height: 40px;
  width: 150px;
  font-size: 1.2em;
  font-family: "Poppins";
  padding-left: 20px;
  color: white;
  border: none;

  option {
      color: black;
      background: white;
    }

  &:focus{
    outline: none;
  }
`;