import React from "react";
import {
  StyledHelpSection,
  StyledTeamPicture,
  StyledGreenCard,
  StyledCard,
  StyledGreenText,
  StyledBlackText,
} from "./style";
import { Row, StyledFlexCol, StyledFlexDiv } from "../Container/style";

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
            <StyledFlexDiv grow="3" width="33%">
              <StyledFlexCol>
                <StyledBlackText>Trobotyk'ss (ML)°</StyledBlackText>
                <StyledGreenText>47Li220</StyledGreenText>
              </StyledFlexCol>
            </StyledFlexDiv>
            <StyledFlexDiv grow="3" width="33%">
              <StyledFlexCol>
                <StyledBlackText>Sdoosh</StyledBlackText>
                <StyledGreenText>96Li220</StyledGreenText>
              </StyledFlexCol>
            </StyledFlexDiv>
            <StyledFlexDiv grow="3" width="33%">
              <StyledFlexCol>
                <StyledBlackText>Nem'O</StyledBlackText>
                <StyledGreenText>74Li220</StyledGreenText>
              </StyledFlexCol>
            </StyledFlexDiv>
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
