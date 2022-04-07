import Link from "next/link";
import React from "react";
import {
  StyledGreenButton,
  StyledRedButton,
  SmallStyledGreenButton,
  SmallStyledRedButton,
  StyledOrangeButton,
  SmallStyledOrangeButton,
  StyledBackArrow
} from "./style";

type ButtonProps = { children: React.ReactNode; width?: string, height?: string, onClick?: Function, type?: string, fontSize?: string };

export function GreenButton(props: ButtonProps) {
  return (
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
  return (
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
  return (
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
  return (
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
  return (
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
  return (
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

export function ArrowButton(props: { onClick: Function, position: string }) {
  return (
    <StyledBackArrow onClick={props.onClick} translate={props.position == "top" ? "-10%" : "10%"}>
      <svg
        fill="rgba(0, 0, 0, 0.2)"
        style={{
          width: "25px",
          display: "block",
          transform: props.position == "top" ? "rotate(180deg) translateY(15%)" : "translateY(15%)"
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9.02 5.62"
      >
        <path d="M.91,0l3.6,3.62L8.11,0,9,1.18,4.51,5.62,0,1.13Z" />
      </svg>
    </StyledBackArrow>
  );
}

export function ButtonLink(props: { children: React.ReactNode; width?: string, height?: string, href: string }) {
  return (
    <Link href={props.href} passHref>
      <StyledGreenButton as="a" width={props.width} height={props.height} style={{ lineHeight: props.height || "60px" }}>
        {props.children}
      </StyledGreenButton>
    </Link>
  );
}