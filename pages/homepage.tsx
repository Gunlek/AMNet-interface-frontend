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
  StyledWhiteText,
  StyledGreenText,
  StyledGreenLine,
  StyledCard,
  StyledBlackText,
} from "../components/Card/style";
import {
  Col10,
  Col2,
  Col3,
  Col6,
  Column,
  Row,
} from "../components/Container/style";

import styled from "styled-components";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusBackground
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Row>
          <Col6>
            <RectangleLogo color="blanc"></RectangleLogo>
          </Col6>
          <Col6 style={{ justifyContent: "right", alignItems: "center" }}>
            <GreenButton size="44%">S'inscrire / Se Connecter</GreenButton>
          </Col6>
        </Row>

        <Row>
          <Col6>
            <StyledWhiteText>
              L’AMNet est une association gérée par les étudiants qui a pour but
              d’administrer le réseau internet de la résidence Jacques Pagliero.
              Elle est totalement indépendante de l’administration de la
              résidence ou de l’école.<br></br>
              <br></br>Votre cotisation sert à améliorer l’installation ainsi
              qu’à payer les abonnements internet. Chaque année, 80% des
              cotisations est utilisé directement et les 20% restants servent à
              créer une trésorerie pour des investissements futurs.
            </StyledWhiteText>
          </Col6>
          <Col6>
            <TeamPicture
              names="Trobotyk'ss(ML)°;Sdoosh;Nem'O"
              nums="47Li220;96Li220;74Li220"
            />
          </Col6>
        </Row>
        <Spacer height="50px" />
        <StyledCard width="100%" height="20%" minheight="170px">
          <Row>
            <Col2 style={{ alignItems: "center", justifyContent: "center" }}>
              <img
                style={{ height: "80%", aspectRatio: "1 / 1" }}
                src="/static/logo/mc_logo.png"
                alt="Logo Minecraft"
              />
            </Col2>
            <Col10>
              <Column>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledGreenText style={{ paddingRight: "10px" }}>
                    Serveur Minecraft
                  </StyledGreenText>
                  <StyledGreenLine></StyledGreenLine>
                </div>
                <StyledBlackText>
                  En plus de fournir un accès internet aux résidents nous
                  offrons une multitude de services, un serveur Minecraft :{" "}
                  <span style={{ color: "#096A09" }}>minecraft.amnet.fr</span>{" "}
                  et d'autres que nous vous laisserons découvrir un jour ...
                  <br></br>
                  <br></br>
                  Si vous avez des idées de services que nous pourrions proposer
                  hésitez pas à nous contacter !
                </StyledBlackText>
              </Column>
            </Col10>
          </Row>
        </StyledCard>
        <Row>
          <HelpSection></HelpSection>
        </Row>
      </CampusBackground>
    </>
  );
}

const Spacer = styled.div`
  height: ${(props) => props.height};
`;
