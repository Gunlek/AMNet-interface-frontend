import React from "react";
import { StyledGreenButton, StyledRedButton } from "./style";

type ButtonProps = { children: React.ReactNode; size?: string };

export function GreenButton(props: ButtonProps) {
  return (
    <StyledGreenButton size={props.size}>{props.children}</StyledGreenButton>
  );
}

export function RedButton(props: ButtonProps) {
  return <StyledRedButton size={props.size}>{props.children}</StyledRedButton>;
}
