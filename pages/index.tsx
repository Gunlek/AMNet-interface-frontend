import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import {
  HelpSection,
  TitleCard
} from "../components/Card/Cards";
import {
  Col10,
  Col2,
  Col5,
  Col6,
  Col7,
  ResponsiveRow,
  Row
} from "../components/Container/style";
import { StyledCardCampus } from "../components/Card/style";
import { WhiteP, BlackP, BlackText, StyledLink } from "../components/Text/style";
import useMediaQuery from "../components/MediaQueries/MediaQuery";
import RectangleLogo from "../components/Card/RectangleLogo";
import TeamPicture from "../components/Card/TeamPicture";
import GitHub from "../components/NavIcons/github";

const accutalTeam = [
  {
    'pseudo': "Trobotyk'ss (ML)°",
    id: "47Li220"
  },
  {
    'pseudo': "Sdoosh",
    id: "96Li220"
  },
  {
    'pseudo': "Nem'O",
    id: "74Li220"
  }];
export default function Homepage() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const minWidth500 = useMediaQuery('(min-width:500px)');
  
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle padding="0 5%"/>

      <ResponsiveRow style={{ margin: minWidth1000 ? "20px 0" : "0" }}>
        <Col6 style={{ justifyContent: minWidth1000 ? "start" : "center", alignItems: minWidth1000 ? "start" : "center" }}>
          <RectangleLogo color="white" />
        </Col6>
        <Col6 style={{ justifyContent: "center", alignItems: minWidth1000 ? "end" : "center", marginTop: minWidth1000 ? "0" : "20px" }}>
          <a href="./login" style={{ borderRadius: "30px" }}>
            <GreenButton width={minWidth1000 ? "300px" : "250px"}>Se Connecter / S'inscrire</GreenButton>
          </a>
        </Col6>
      </ResponsiveRow>

      <ResponsiveRow style={{ marginBottom: "20px", flex: "2" }}>
        <Col7 paddingRight="15px" MobileMarginBottom="20px"
          style={{
            paddingTop: "30px",
            justifyContent: "space-between"
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <WhiteP style={{ marginBottom: "1.2rem" }}>
              <span style={{ paddingLeft: "4rem" }}>L’AMNet</span> est une association gérée par les étudiants qui a pour but
              d’administrer le réseau internet de la résidence Jacques Pagliero des Arts et Métiers du campus de Lille.
              Elle est totalement indépendante de l’administration de la résidence ou de l’école.
            </WhiteP>
            <WhiteP>
              <span style={{ paddingLeft: "4rem" }}>Votre</span> cotisation sert à améliorer l’installation ainsi
              qu’à payer les abonnements Internet. Chaque année, 80% des
              cotisations est utilisé directement et les 20% restants servent à
              créer une trésorerie pour des investissements futurs.
            </WhiteP>
          </div>

          <StyledCardCampus style={{ marginBottom: minWidth1000 ? "0" : "20px" }}>
            <ResponsiveRow>
              <Col2
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: minWidth1000 ? "0" : "10px"
                }}
              >
                <img
                  style={{ width: minWidth1000 ? "90%" : "auto", height: minWidth1000 ? "auto" : "80%", aspectRatio: "1 / 1" }}
                  src="/static/logo/mc_logo.png"
                  alt="Logo Minecraft"
                />
              </Col2>
              <Col10 style={{ marginLeft: "2%" }}>
                <TitleCard>Serveur Minecraft</TitleCard>
                <BlackP style={{ marginBottom: "1.2rem" }}>
                  En plus de fournir un accès internet aux résidents nous
                  offrons une multitude de services, un serveur Minecraft :{" "}
                  <span style={{ color: "#096A09", userSelect: "text" }}>minecraft.amnet.fr</span>{" "}
                  et d'autres que nous vous laisserons découvrir un jour ...
                </BlackP>
                <BlackP>
                  Si vous avez des idées de services que nous pourrions proposer
                  hésitez pas à nous <StyledLink color="#096A09" href="mailto:contact@amnet.fr">contacter</StyledLink> !
                </BlackP>
              </Col10>
            </ResponsiveRow>
          </StyledCardCampus>
        </Col7>

        <Col5 style={{ marginLeft: minWidth1000 ? "15px" : "0", justifyContent: "space-between" }}>
          <TeamPicture Team={accutalTeam} />

          <StyledCardCampus style={{ marginTop: "30px" }}>
            <TitleCard>A propos</TitleCard>
            <Row style={{ marginBottom: "1.2rem" }}>
              <BlackP
                style={{
                  textAlign: minWidth1000 ? undefined : "center",
                  marginRight: "20px"
                }}
              >
                Projet développé et maintenu par Hard Win'∫ 58Li218, Squall'∫ 4Li218 et Mac Nhat'∫ 47-102Li219 &bull; Version 2.0.1
              </BlackP>
              <GitHub height="30px" margin="0" />
            </Row>
            <BlackText style={{ textAlign: "right" }}>
              Design et UI pensés avec l'aide de Cou'∫<span style={{ marginLeft: "1.5px" }}>'</span>tal 141Li219
            </BlackText>
          </StyledCardCampus>
        </Col5>
      </ResponsiveRow>
      <Row style={{ flex: "1", alignItems: "end" }}>
        <HelpSection style={{ marginBottom: "20px" }} />
      </Row>

    </>
  );
}