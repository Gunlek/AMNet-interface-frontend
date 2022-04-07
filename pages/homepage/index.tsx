import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { ButtonLink } from "../../components/Button/Buttons";
import { TitleCard, HelpSection } from "../../components/Card/Cards";
import { StyledMinImg } from "../../components/Card/Images/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import TeamPicture from "../../components/Card/TeamPicture";
import GitHub from "../../components/NavIcons/github";
import { 
  Row, 
  Col6, 
  ResponsiveRow, 
  Col7, 
  Col2, 
  Col10, 
  Col5 
} from "../../components/Container/style";
import { 
  WhiteP, 
  BlackP, 
  StyledLink, 
  BlackText 
} from "../../components/Text/style";

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
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle padding="0 5%"/>

      <Row margin="20px 0" mobileMargin="30px 0" direction="column">
        <Col6 mobileMarginBottom="30px" justify="center" mobileAlign="center">
          <RectangleLogo color="white" />
        </Col6>
        <Col6 align="end" mobileAlign="center" justify="center">
            <ButtonLink href="./homepage/login"  width="300px">Se Connecter / S'inscrire</ButtonLink>
        </Col6>
      </Row>

      <ResponsiveRow marginBottom="20px" mobileMarginBottom="30px" style={{ flex: "8" }}>
        <Col7 paddingRight="15px" mobileMarginBottom="30px"
          style={{
            paddingTop: "0px",
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

          <StyledCardCampus>
            <ResponsiveRow>
              <Col2
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <StyledMinImg
                  src="/static/logo/mc_logo.png"
                  alt="Logo Minecraft"
                />
              </Col2>

              <Col10 style={{ marginLeft: "2%" }}>
                <TitleCard>Serveur Minecraft</TitleCard>
                <BlackP style={{ marginBottom: "1.2rem" }}>
                  En plus de fournir un accès internet aux résidents nous
                  offrons une multitude de services, un serveur Minecraft :{" "}
                  <span style={{ color: "#096A09" }}>minecraft.amnet.fr</span>{" "}
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

        <Col5 marginLeft="15px" style={{ justifyContent: "space-between" }}>
          <TeamPicture Team={accutalTeam} />

          <StyledCardCampus style={{ marginTop: "30px" }}>
            <TitleCard>A propos</TitleCard>
            <Row style={{ marginBottom: "1.2rem" }}>
              <BlackP mobileAlignTxt="center" style={{ marginRight: "20px" }}>
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
        <HelpSection mobileMarginBottom="30px" marginBottom="20px"/>
      </Row>
    </>
  );
}