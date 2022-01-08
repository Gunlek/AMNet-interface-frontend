import styled from "styled-components";

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left:20px;
  height: 40px;
  font-size: 1.2em;
  border: none;
  margin: 0;

  &:hover{
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #096A09;
    transition: color 0.2s;
  }

  &:focus{
    background: rgba(255, 255, 255, 0.8);
    outline: none;
    border: 2px solid #096A09;
    transition: color 0.2s;
  }
`;

export const StyledSelect = styled.select`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left: 20px;
  height: 40px;
  border: none;
  font-size: 1.2em;
  font-family: "Poppins";

  &:hover{
    border: 2px solid #096A09;
    transition: color 0.2s;
  }

  &:focus{
      outline: none;
      border: 2px solid #096A09;
      transition: color 0.2s;
  }
`;

export const StyledCheckbox = styled.input`
  width: 34px;
  height: 34px;
  border: 4px solid #096a09;
  box-sizing: border-box;
  border-radius: 9px;
`;

export const StyledTextArea = styled.textarea`
  min-height: 100px;
  width: 100%; 
  resize: none;
  margin:0;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  border: none;
  font-size: 1.2em;
  font-family: "Poppins";

  &:hover{
    border: 2px solid #096A09;
    transition: color 0.2s;
  }

  &:focus{
      outline: none;
      border: 2px solid #096A09;
      transition: color 0.2s;
  }
`;