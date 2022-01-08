import React from "react";
import {
  StyledTeamPicture,
  StyledGreenCard,
  StyledCard,
  StyledHelpSection,
  GreenLine
} from "./style";
import {
  Col4,
  Column,
  Row
} from "../Container/style";
import { GreenText, BlackText, StyledLink } from "../Text/style";

export function HelpSection(props: { color?: string }) {
  return (
    <StyledHelpSection color={props.color}>
      Besoin d'assistance ?{" "}
      <StyledLink hovercolor="#67bc45" href="mailto:contact@amnet.fr">contact@amnet.fr</StyledLink> !
    </StyledHelpSection>
  );
}

export function RectangleLogo(props: { color?: string }) {
  if (props.color == 'blanc') {
    return (
      <a target="_blank" href="https://www.google.com/search?q=the+answer+to+life%2C+the+universe+and+everything&sxsrf=AOaemvKRvpra0jq__iVMCWg_q7g361ifag%3A1641475979658&ei=i-_WYcjSJ82PlwTJ4o3IAw&ved=0ahUKEwiIxLLFnp31AhXNx4UKHUlxAzkQ4dUDCA4&uact=5&oq=the+answer+to+life%2C+the+universe+and+everything&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BQgAEMsBSgQIQRgASgQIRhgAUABY5xhgkCNoAHACeACAAXKIAZUCkgEDMy4xmAEAoAECoAEBwAEB&sclient=gws-wiz" style={{ height: "100px", cursor: "auto" }}>
        <img
          style={{ height: "100px", aspectRatio: "19 / 9" }}
          src="/static/logo/white_logo.svg"
          alt="Logo AMNet"
        />
      </a>
    );
  } else {
    return (
      <a href="../homepage" style={{ height: "100px" }}>
        <img
        style={{  height: "100px", aspectRatio: "19 / 9" }}
        src="/static/logo/logo.svg"
        alt="Logo AMNet"
      />
      </a>
    );
  }
}

export function TitleCard(props: { children: string }){
  return(
    <div 
      style={{width:"100%"  }}
    >             
      <GreenText 
        style=
        {{
          float:"left", 
          paddingRight: "10px", 
          fontSize: "1.8em" 
        }}
      >
        {props.children}
      </GreenText>
      <div 
        style=
        {{
          flex: "1",
          width:"auto",
          display: "flex",
          alignItems: "center",
          height:"100%",
        }}
      >
        <GreenLine />
      </div>  
    </div>
  );
}

export function GreenCard(props: { year: string }) {
  var year = Number(props.year) + 1800;
  return (
    <StyledGreenCard>
      La Team qui gère l’AMNet pour l’année {year.toString()}-
      {(year + 1).toString()}
    </StyledGreenCard>
  );
}

export function TeamPicture(props: { names: string; nums: string }) {
  var separator = /\s*(;|$)\s*/;
  var names = props.names.split(separator);
  var nums = props.nums.split(separator);
  var size = Math.round(names.length / 2);

  return (
    <StyledTeamPicture
      style=
      {{ 
        aspectRatio: "16/8", 
        maxHeight: "45vh", 
        justifyContent:"end"
      }}
    >
      <Column 
        style=
        {{ 
          width:"100%", 
          height:"96%", 
          justifyContent:"space-between"
        }}
      >
      <GreenCard year="221"/>
      <StyledCard 
        radius="30px" 
        height="90px" 
        style={{
          alignItems:"center", 
          flexDirection: "row"
        }}
      >
        <Col4>
          <Column style={{ alignItems: "center" }}>
            <BlackText>Trobotyk'ss (ML)°</BlackText>
            <GreenText>47Li220</GreenText>
          </Column>
        </Col4>
        <Col4>
          <Column style={{ alignItems: "center" }}>
            <BlackText>Sdoosh</BlackText>
            <GreenText>96Li220</GreenText>
          </Column>
        </Col4>
        <Col4>
          <Column style={{ alignItems: "center" }}>
            <BlackText>Nem'O</BlackText>
            <GreenText>74Li220</GreenText>
          </Column>
        </Col4>
      </StyledCard>
      </Column>
    </StyledTeamPicture>
  );
}