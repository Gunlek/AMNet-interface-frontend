import React from "react";
import { 
  StyledGreenButton, 
  StyledRedButton,
  SmallStyledGreenButton,
  SmallStyledRedButton,
  StyledOrangeButton,
  SmallStyledOrangeButton
} from "./style";

type ButtonProps = { children: React.ReactNode; width?: string, height?: string, onClick?: Function, type?: string, fontSize?: string };

export function GreenButton(props: ButtonProps) {
  return(
    <StyledGreenButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
    >
      {props.children}
    </StyledGreenButton>
  );
}

export function SmallGreenButton(props: ButtonProps) {
  return(
    <SmallStyledGreenButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
      fontSize={props.fontSize}
    >
      {props.children}
    </SmallStyledGreenButton>
  );
}

export function RedButton(props: ButtonProps) {
  return( 
    <StyledRedButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
    >
      {props.children}
    </StyledRedButton>);
}

export function SmallRedButton(props: ButtonProps) {
  return(
    <SmallStyledRedButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
      fontSize={props.fontSize}
    >
      {props.children}
    </SmallStyledRedButton>
  );
}


export function OrangeButton(props: ButtonProps) {
  return(
    <StyledOrangeButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
    >
      {props.children}
    </StyledOrangeButton>);
}

export function SmallOrangeButton(props: ButtonProps) {
  return(
    <SmallStyledOrangeButton 
      type={props.type} 
      width={props.width} 
      height={props.height} 
      onClick={props.onClick}
      fontSize={props.fontSize}
    >
      {props.children}
    </SmallStyledOrangeButton>
  );
}