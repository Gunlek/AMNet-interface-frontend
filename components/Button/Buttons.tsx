import React from "react";
import { StyledGreenButton, StyledRedButton } from "./style";

type ButtonProps = { children: React.ReactNode; width?: string, height?: string };

export function GreenButton(props: ButtonProps) {
  return (
    <StyledGreenButton width={props.width} height={props.height}>{props.children}</StyledGreenButton>
  );
}

export function RedButton(props: ButtonProps) {
  return <StyledRedButton size={props.width} height={props.height}>{props.children}</StyledRedButton>;
}
