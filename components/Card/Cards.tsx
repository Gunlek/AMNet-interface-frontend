import React from "react";
import {
  StyledTeamPicture,
  StyledGreenCard,
  StyledCard,
  GreenText,
  BlackText,
  StyledHelpSection,
} from "./style";
import {
  Col4,
  Column,
  Row,
  StyledFlexCol,
  StyledFlexDiv,
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
      <a href="https://www.google.com/search?client=firefox-b-d&q=answer+to+life+the+universe+and+everything">
        <img
          style={{ width: "33%", aspectRatio: "16 / 9" }}
          src="/static/logo/logoamnet2021blanc.svg"
          alt="Logo AMNet"
        />
      </a>
    );
  } else {
    return (
      <img
        style={{ width: "33%", aspectRatio: "16 / 9" }}
        src="/static/logo/logoamnet2021.svg"
        alt="Logo AMNet"
      />
    );
  }
}

export function TeamPicture(props: { names?: string; nums?: string }) {
  var separator = /\s*(;|$)\s*/;
  var names = props.names.split(separator);
  var nums = props.nums.split(separator);
  var size = Math.round(names.length / 2);

  return (
    <StyledTeamPicture
      justify="end"
      style={{ aspectRatio: "16/9", maxHeight: "50vh" }}
    >
      <StyledFlexCol width="100%" height="96.5%" justify="space-between">
        <StyledFlexDiv width="100%">
          <GreenCard year="221"></GreenCard>
        </StyledFlexDiv>
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
      </StyledFlexCol>
    </StyledTeamPicture>
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
