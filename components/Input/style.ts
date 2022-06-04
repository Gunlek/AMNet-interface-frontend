import styled from "styled-components";

export const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: #096a09;
  cursor: pointer;
  display: none;
  height: 40px;
  width : 40px;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  width: ${(props) => props.width || "100%"};
  padding-left:20px;
  height: 40px;
  font-size: 1.2rem;
  border: ${(props) => props.border || "2px solid transparent"};
  margin: 0;
  transition: border 0.3s, background-color 0.3s;
  margin-left: ${(props) => props.marginLeft};

  ${StyledWrapper}:hover &, &:hover, &:focus{
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid  #096A09;
    outline: none;     
  }

  &:valid ~ ${StyledSpan}{
    display: flex;
  }

  @media screen and (max-width: 1000px){
    font-size: 16px;
    width: ${(props) => props.mobileWidth || "100%"};
    margin-left: 0;
  }
`;

export const StyledTextArea = styled(StyledInput).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: none;
  overflow: hidden;
  padding: 10px 20px;
  margin: 0;
`;

export const StyledInputLabel = styled.label`
  width: fit-content;
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: #096a09;
`;

export const StyledLabel = styled.label`
  display: ${(props) => props.Display || "flex"}; 
  align-items: center;
  width: ${(props) => props.width || "150px"}; 
  user-select: none;

  @media screen and (max-width: 1000px){
    width: ${(props) => props.width || "100px"}; 
  } 
`;




