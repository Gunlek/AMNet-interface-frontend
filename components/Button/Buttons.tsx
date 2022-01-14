import React from "react";
import { 
  StyledGreenButton, 
  StyledRedButton,
  SmallStyledGreenButton,
  SmallStyledRedButton,
  StyledOrangeButton,
  SmallStyledOrangeButton
} from "./style";

type ButtonProps = { children: React.ReactNode; width?: string, height?: string, onClick?: Function };

export function GreenButton(props: ButtonProps) {
  return (
    <StyledGreenButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</StyledGreenButton>
  );
}

export function SmallGreenButton(props: ButtonProps) {
  return (
    <SmallStyledGreenButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</SmallStyledGreenButton>
  );
}

export function RedButton(props: ButtonProps) {
  return <StyledRedButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</StyledRedButton>;
}

export function SmallRedButton(props: ButtonProps) {
  return (
    <SmallStyledRedButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</SmallStyledRedButton>
  );
}


export function OrangeButton(props: ButtonProps) {
  return <StyledOrangeButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</StyledOrangeButton>;
}

export function SmallOrangeButton(props: ButtonProps) {
  return <SmallStyledOrangeButton width={props.width} height={props.height} onClick={props.onClick}>{props.children}</SmallStyledOrangeButton>;
}