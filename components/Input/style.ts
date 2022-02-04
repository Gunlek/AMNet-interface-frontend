import styled from "styled-components";

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left:20px;
  height: 40px;
  font-size: 1.2rem;
  border: 2px solid transparent;
  margin: 0;

  &:hover{
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #096A09;
    outline: none;
  }

  &:focus{
    background: rgba(255, 255, 255, 0.8);
    outline: none;
    border: 2px solid #096A09;
  }
`;

export const StyledSelect = styled.select`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left: 20px;
  height: 40px;
  border: 2px solid transparent;
  font-size: 1.2rem;

  &:hover{
    border: 2px solid #096A09;
    outline: none;
  }

  &:focus{
    outline: none;
    border: 2px solid #096A09;
  }
`;

export const StyledTextArea = styled.textarea`
  min-height: 150px;
  width: 100%; 
  resize: none;
  margin:0;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  border: 2px solid transparent;
  font-size: 1.2rem;
  scrollbar-width: none !important;

  ::-webkit-scrollbar {
    width: 0 !important;
  }

  &:hover{
    border: 2px solid #096A09;
  }

  &:focus{
      outline: none;
      border: 2px solid #096A09;
  }
`;

export const StyledInputLabel = styled.label`
  width: fit-content;
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: #096a09;
`;

export const StyledLabel = styled.label`
  display: flex; 
  align-items: center;
  width: ${(props) => props.width || "150px"}; 

  @media screen and (max-width: 1000px){
    width: ${(props) => props.width || "100px"}; 
  } 
`;