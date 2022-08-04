import React from "react";
import Head from "next/head";
import { ButtonLink } from "../../components/Button/Buttons";
import { TitleCard, HelpSection } from "../../components/Card/Cards";
import Image from 'next/image'
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
  Col5,
  Column,
  MinecraftContainer
} from "../../components/Container/style";
import {
  WhiteP,
  BlackP,
  StyledLink,
  BlackText
} from "../../components/Text/style";
import { CampusGlobalStyle } from "../../components/Background/style";
import axios from "axios";
import getToken from "../../components/Utils/auth-token";
import { motion } from "framer-motion";
import { variants } from "../../components/Utils/animation-variants";

export async function getServerSideProps({ req }) {
  const { userId } = getToken(req)

  const [accutalTeam, promotion] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/admin-list`),
    axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`)
  ]);

  return {
    props: {
      accutalTeam: accutalTeam.data as { pseudo: string, id: string }[],
      promotion: promotion.data as string,
      isLogged: userId ? true : false
    }
  }
}

export default function Homepage(props: {
  accutalTeam: { pseudo: string, id: string }[],
  promotion: string,
  isLogged: boolean
}) {
  return (
    <>
      <Head>
        <title>Accueil &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle padding="0 5%" />

      <motion.main
        variants={variants("right", "left")}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >
        <Row margin="20px 0" mobileMargin="30px 0" direction="column">
          <Col6 mobileMarginBottom="30px" justify="center" mobileAlign="center">
            <RectangleLogo color="white" easter={true} />
          </Col6>
          <Col6 align="end" mobileAlign="center" justify="center">
            <ButtonLink href={props.isLogged ? "/" : "/homepage/login"} width="300px">Accéder à Mon Compte</ButtonLink>
          </Col6>
        </Row>

        <ResponsiveRow marginBottom="30px" mobileMarginBottom="30px" style={{ flex: "10" }}>
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

          </Col7>

          <Col5 marginLeft="15px" style={{ justifyContent: "space-between" }}>
            <TeamPicture Team={props.accutalTeam} promotion={props.promotion} />
          </Col5>
        </ResponsiveRow>

        <ResponsiveRow marginBottom="20px" mobileMarginBottom="30px">
          <Col7 paddingRight="15px" mobileMarginBottom="30px"
            style={{
              paddingTop: "0px",
              justifyContent: "space-between"
            }}
          >
            <StyledCardCampus>
              <TitleCard>Serveur Minecraft</TitleCard>
              <ResponsiveRow direction="column-reverse">
                <Col2
                  style={{
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <MinecraftContainer>
                    <Image width={145} height={145} src="/static/logo/mc_logo.png" alt="Logo Minecraft" />
                  </MinecraftContainer>
                </Col2>

                <Col10 paddingLeft="30px">
                  <BlackP style={{ marginBottom: "1.2rem" }}>
                    En plus de fournir un accès internet aux résidents nous
                    offrons une multitude de services, un serveur Minecraft :{" "}
                    <span style={{ color: "#096A09" }}>minecraft.amnet.fr</span>{" "}
                    et d&apos;autres que nous vous laisserons découvrir un jour ...
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
            <StyledCardCampus style={{ height: "100%" }}>
              <TitleCard>A propos</TitleCard>
              <Column style={{ justifyContent: "space-between", height: "100%" }}>
                <BlackP mobileAlignTxt="center" style={{ marginBottom: "10px" }} >
                  Projet développé et maintenu par Hard Win&apos;∫ 58Li218, Squall&apos;∫ 4Li218 et Mac Nhat&apos;∫ 47-102Li219
                </BlackP>

                <BlackText style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                  <span style={{ marginRight: "15px", fontSize: "1.5rem" }}>Version 2.0.1 </span><GitHub height="40px" margin="0" />
                </BlackText>

                <BlackText style={{ textAlign: "right" }}>
                  Design et UI pensés avec l&apos;aide de Cou&apos;∫<span style={{ marginLeft: "1.5px" }}>&apos;</span>tal 141Li219
                </BlackText>
              </Column>
            </StyledCardCampus>
          </Col5>
        </ResponsiveRow>

        <Row style={{ alignItems: "end", flex: "2" }}>
          <HelpSection mobileMarginBottom="30px" marginBottom="20px" />
        </Row>
      </motion.main>
    </>
  );
}