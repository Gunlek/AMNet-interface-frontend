import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import {
  HelpSection,
  RectangleLogo,
  TeamPicture,
  TitleCard
} from "../components/Card/Cards";
import {
  Col10,
  Col2,
  Col6,
  Column,
  Row
} from "../components/Container/style";
import { StyledCardCampus } from "../components/Card/style";
import { WhiteText, BlackText } from "../components/Text/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusBackground style={{ padding: "10px 5%" }}>
        <Row style={{marginBottom:"10px"}}>
          <Col6 style={{ justifyContent: "center", alignItems: "start" }}>
            <RectangleLogo color="blanc"/>
          </Col6>
          <Col6 style={{ justifyContent: "center", alignItems: "end" }}>
            <a 
              href="./login" 
              style={{
                width: "300px", 
                borderRadius: "30px"
              }}
            >
              <GreenButton width="100%">Se Connecter / S'inscrire</GreenButton>
            </a>
          </Col6>
        </Row>

        <Row style={{marginBottom:"20px"}}>
          <Col6>
            <WhiteText 
              style={{
                paddingRight: "20px", 
                paddingTop:"20px", 
                textAlign: "justify"
              }}
            >
              <span style={{paddingLeft: "60px"}}>L’AMNet</span> est une association gérée par les étudiants qui a pour but
              d’administrer le réseau internet de la résidence Jacques Pagliero.
              Elle est totalement indépendante de l’administration de la
              résidence ou de l’école.<br/><br/>
              <span style={{paddingLeft: "60px"}}>Votre</span> cotisation sert à améliorer l’installation ainsi
              qu’à payer les abonnements internet. Chaque année, 80% des
              cotisations est utilisé directement et les 20% restants servent à
              créer une trésorerie pour des investissements futurs.
            </WhiteText>
          </Col6>
          <Col6>
            <TeamPicture/>
          </Col6>
        </Row>
        <StyledCardCampus>   
          <Row>
            <Col2 style={{ alignItems: "center", justifyContent: "center" }}>
              <img
                style={{ height: "80%", aspectRatio: "1 / 1" }}
                src="/static/logo/mc_logo.png"
                alt="Logo Minecraft"
              />
            </Col2>
            <Col10 style={{paddingRight:"20px"}}>
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
        </StyledCardCampus>

        <Row style={{marginBottom: "10px"}}>
          <HelpSection/>
        </Row>
      </CampusBackground>
    </>
  );
}
