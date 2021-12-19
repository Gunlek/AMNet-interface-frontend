import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import {
  HelpSection,
  RectangleLogo,
  TeamPicture,
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import {
  GreenLine,
  GreenText,
  StyledCard,
  StyledInput,
  StyledRadio,
} from "../components/Card/style";
import {
  Col2,
  Col8,
  Row,
  StyledFlexCol,
  StyledFlexDiv,
} from "../components/Container/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Connexion &bull; AMNet</title>
      </Head>
      <CampusBackground>
        <Row>
          <Col2></Col2>
          <Col8>
            <StyledCard width="40%" height="auto" padding="20px">
              <StyledFlexCol>
                <RectangleLogo></RectangleLogo>
                <StyledFlexDiv width="100%" style={{ textAlign: "center" }}>
                  Espace AMNet
                </StyledFlexDiv>
                <Row>
                  <StyledFlexDiv width="125px">
                    <GreenText>Connexion</GreenText>
                  </StyledFlexDiv>
                  <StyledFlexDiv width="calc(100% - 125px)" height="0px">
                    <GreenLine></GreenLine>
                  </StyledFlexDiv>
                </Row>
                <form method="post">
                  <div>
                    <GreenLine>Nom d'utilisateur</GreenLine>
                    <StyledInput />
                  </div>

                  <div>
                    <GreenLine>Mot de passe</GreenLine>
                    <StyledInput width="100%" />
                  </div>
                  <Row>
                    <StyledFlexDiv>
                      aaa<StyledRadio></StyledRadio>
                    </StyledFlexDiv>
                    <StyledFlexDiv>Rester connecté</StyledFlexDiv>
                  </Row>
                  <StyledFlexCol>
                    <StyledFlexDiv>
                      Mot de passe / Identifiant oublié
                    </StyledFlexDiv>
                    <StyledFlexDiv>
                      Pas encore inscrit ? Inscrivez-vous en cliquant ici
                    </StyledFlexDiv>
                  </StyledFlexCol>
                  <GreenButton>Conexion</GreenButton>
                </form>
              </StyledFlexCol>
            </StyledCard>
            <HelpSection></HelpSection>
          </Col8>
          <Col2></Col2>
        </Row>
      </CampusBackground>
    </>
  );
}
