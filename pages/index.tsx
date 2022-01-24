import React from "react";
import Head from "next/head";
import { CampusBackground, CampusGlobalStyle } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import {
  Footer,
  HelpSection,
  TitleCard
} from "../components/Card/Cards";
import {
  Col10,
  Col2,
  Col6,
  Column,
  ResponsiveRow
} from "../components/Container/style";
import { StyledCardCampus } from "../components/Card/style";
import { WhiteP, BlackP } from "../components/Text/style";
import useMediaQuery from "../components/MediaQueries/MediaQuery";
import RectangleLogo from "../components/Card/RectangleLogo";
import TeamPicture from "../components/Card/TeamPicture";

export default function Homepage() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />
      <CampusBackground>
        <ResponsiveRow style={{ marginBottom: minWidth1000 ? "10px" : "0" }}>
          <Col6 style={{ justifyContent: minWidth1000 ? "start" : "center", alignItems: minWidth1000 ? "start" : "center" }}>
            <RectangleLogo color="blanc" />
          </Col6>
          <Col6 style={{ justifyContent: "center", alignItems: minWidth1000 ? "end" : "center", marginTop: minWidth1000 ? "0" : "20px" }}>
            <a
              href="./login"
              style={{
                width: minWidth1000 ? "300px" : "250px",
                borderRadius: "30px"
              }}
            >
              <GreenButton width="100%">Se Connecter / S'inscrire</GreenButton>
            </a>
          </Col6>
        </ResponsiveRow>

        <ResponsiveRow style={{ marginBottom: "20px" }}>
          <Col6
            style={{
              marginRight: minWidth1000 ? "1%" : "0",
              marginBottom: minWidth1000 ? "0" : "20px",
              paddingTop: "20px"
            }}
          >
            <WhiteP style={{marginBottom: "1.2rem"}}>    
              <span style={{ paddingLeft: "4rem" }}>L’AMNet</span> est une association gérée par les étudiants qui a pour but
              d’administrer le réseau internet de la résidence Jacques Pagliero.
              Elle est totalement indépendante de l’administration de la
              résidence ou de l’école.
            </WhiteP>
            <WhiteP>
              <span style={{ paddingLeft: "4rem" }}>Votre</span> cotisation sert à améliorer l’installation ainsi
              qu’à payer les abonnements internet. Chaque année, 80% des
              cotisations est utilisé directement et les 20% restants servent à
              créer une trésorerie pour des investissements futurs.
            </WhiteP>
          </Col6>
          <Col6 style={{marginLeft: minWidth1000 ? "1%" : "0" }}>
            <TeamPicture
              names="Trobotyk'ss (ML)°;Sdoosh;Nem'O"
              nums="47Li220;96Li220;74Li220"
              promotion="220"
            />
          </Col6>
        </ResponsiveRow>

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
                style={{ height: "80%", aspectRatio: "1 / 1" }}
                src="/static/logo/mc_logo.png"
                alt="Logo Minecraft"
              />
            </Col2>
            <Col10>
              <TitleCard>Serveur Minecraft</TitleCard>
              <BlackP style={{marginBottom: "1.2rem"}}>
                En plus de fournir un accès internet aux résidents nous
                offrons une multitude de services, un serveur Minecraft :{" "}
                <span style={{ color: "#096A09" }}>minecraft.amnet.fr</span>{" "}
                et d'autres que nous vous laisserons découvrir un jour ...
              </BlackP>
              <BlackP>
                Si vous avez des idées de services que nous pourrions proposer
                hésitez pas à nous contacter !
              </BlackP>
            </Col10>
          </ResponsiveRow>
        </StyledCardCampus>

        <HelpSection style={{marginTop: minWidth1000? "20px" : "0"}}/>
      </CampusBackground>
      <Footer page="campus" />
    </>
  );
}