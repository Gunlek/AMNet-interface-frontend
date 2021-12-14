import React from "react";
import { StyledCol, StyledHelpSection, StyledCard, StyledRectangleLogo } from "./style";

export function Card(props: { children: object, width?: string, height?: string, radius?: string }){
    return <StyledCard width={props.width} height={props.height} radius={props.radius}>{props.children}</StyledCard>;
}

export function Col(props: { children: object, colnumber?: string, width?: string }){
  return <StyledCol colnumber={props.colnumber} width={props.width}>{props.children}</StyledCol>;
}

export function HelpSection(props: { color?: string }){
    return <StyledHelpSection color={props.color}>Besoin d'assistance ? Contactez <a href="mailto:contact@amnet.fr">contact@amnet.fr</a> ! </StyledHelpSection>;
}

export function RectangleLogo(){
    return <img style={{width: "33%", aspectRatio: "1.5"}} src="/static/logo/logoamnet2021blanc.svg" alt="Logo AMNet" />
}
