import React from "react";
import {
  StyledTeamPicture,
  StyledGreenCard,
  StyledCard,
  GreenText,
  BlackText,
  StyledHelpSection,
  GreenLine
} from "./style";
import {
  Col4,
  Column,
  Row
} from "../Container/style";

export function HelpSection(props: { color?: string }) {
  return (
    <StyledHelpSection color={props.color}>
      Besoin d'assistance ? Contactez{" "}
      <a href="mailto:contact@amnet.fr">contact@amnet.fr</a> !{" "}
    </StyledHelpSection>
  );
}

export function RectangleLogo(props: { color?: string }) {
  if (props.color == "blanc") {
    return (
        <img
          style={{ height: "100px", aspectRatio: "19 / 9" }}
          src="/static/logo/logoamnet2021blanc.svg"
          alt="Logo AMNet"
        />
    );
  } else {
    return (
      <img
        style={{  height: "100px", aspectRatio: "19 / 9" }}
        src="/static/logo/logoamnet2021.svg"
        alt="Logo AMNet"
      />
    );
  }
}

export function TitleCard(props: { children: string }){
  return(
    <div 
      style={{ 
        display: "flex", 
        alignItems: "center",
        width:"100%" 
      }}
    >             
      <GreenText style={{ paddingRight: "10px", flex:"3", fontSize: "1.8em" }}>
        {props.children}
      </GreenText>
      <GreenLine style={{ paddingRight: "10px", flex:"9" }}/>
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

export function TeamPicture(props: { names?: string; nums?: string }) {
  var separator = /\s*(;|$)\s*/;
  var names = props.names.split(separator);
  var nums = props.nums.split(separator);
  var size = Math.round(names.length / 2);

  return (
    <StyledTeamPicture
      style={{ aspectRatio: "16/9", maxHeight: "50vh", justifyContent:"end"}}
    >
      <Column style={{ width:"100%", height:"97%", justifyContent:"space-between"}}>
      <GreenCard year="221"/>
      <StyledCard width="100%" radius="20px" height="30%">
        <Row>
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
        </Row>
      </StyledCard>
      </Column>
    </StyledTeamPicture>
  );
}