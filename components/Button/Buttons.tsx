import React from "react";
import { 
  StyledGreenButton, 
  StyledRedButton,
  SmallStyledGreenButton,
  SmallStyledRedButton
} from "./style";

type ButtonProps = { children: React.ReactNode; width?: string, height?: string };

export function GreenButton(props: ButtonProps) {
  return (
    <StyledGreenButton width={props.width} height={props.height}>{props.children}</StyledGreenButton>
  );
}

export function SmallGreenButton(props: ButtonProps) {
  return (
    <SmallStyledGreenButton width={props.width} height={props.height}>{props.children}</SmallStyledGreenButton>
  );
}

export function RedButton(props: ButtonProps) {
  return <StyledRedButton size={props.width} height={props.height}>{props.children}</StyledRedButton>;
}

export function SmallRedButton(props: ButtonProps) {
  return (
    <SmallStyledRedButton width={props.width} height={props.height}>{props.children}</SmallStyledRedButton>
  );
}
