import React from "react";
import { StyledGreenButton, StyledRedButton } from "./style";

export function GreenButton(props: { children: string, size?: string }) {
  return <StyledGreenButton size={props.size}>{props.children}</StyledGreenButton>;
}

export function RedButton(props: { children: string, size?: string }) {
  return <StyledRedButton size={props.size}>{props.children}</StyledRedButton>;
}
