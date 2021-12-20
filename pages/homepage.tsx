import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import {
  HelpSection,
  RectangleLogo,
  TeamPicture,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import {
  Col10,
  Col2,
  Col3,
  Col6,
  Column,
  Row,
} from "../components/Container/style";

import {
  BlackText,
  StyledCard,
  WhiteText,
  Spacer
} from "../components/Card/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusBackground
        style={{
          padding: "0 5%",
          justifyContent: "space-around",
        }}
      >
        <Row>
          <Col6 style={{ justifyContent: "center", alignItems: "start" }}>
            <RectangleLogo color="blanc"/>
          </Col6>
          <Col6 style={{ justifyContent: "center", alignItems: "end" }}>
            <GreenButton size="44%"><a href="./connexion">S'inscrire / Se Connecter</a></GreenButton>
          </Col6>
        </Row>

        <Row>
          <Col6>
            <WhiteText>
              L’AMNet est une association gérée par les étudiants qui a pour but
              d’administrer le réseau internet de la résidence Jacques Pagliero.
              Elle est totalement indépendante de l’administration de la
              résidence ou de l’école.<br/><br/>
              Votre cotisation sert à améliorer l’installation ainsi
              qu’à payer les abonnements internet. Chaque année, 80% des
              cotisations est utilisé directement et les 20% restants servent à
              créer une trésorerie pour des investissements futurs.
            </WhiteText>
          </Col6>
          <Col6>
            <TeamPicture
              names="Trobotyk'ss(ML)°;Sdoosh;Nem'O"
              nums="47Li220;96Li220;74Li220"
            />
          </Col6>
        </Row>

        <Spacer height="20px" />
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
                <TitleCard>Serveur Minecraft</TitleCard>
                <BlackText>
                  En plus de fournir un accès internet aux résidents nous
                  offrons une multitude de services, un serveur Minecraft :{" "}
                  <span style={{ color: "#096A09" }}>minecraft.amnet.fr</span>{" "}
                  et d'autres que nous vous laisserons découvrir un jour ...
                  <br/><br/>
                  Si vous avez des idées de services que nous pourrions proposer
                  hésitez pas à nous contacter !
                </BlackText>
              </Column>
            </Col10>
          </Row>
        </StyledCard>

        <Row>
          <HelpSection/>
        </Row>
      </CampusBackground>
    </>
  );
}
