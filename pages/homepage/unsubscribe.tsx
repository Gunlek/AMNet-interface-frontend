import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { Row } from "../../components/Container/style";
import { StyledInputLabel, StyledInput } from "../../components/Input/style";
import { BlackText } from "../../components/Text/style";


export default function Unsubscribe() {
  return (
    <>
      <Head>
        <title>Mot de passe oublié &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />
      <Row
        mobileWidth="90%"
        style={{
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0"
        }}
      >
        <StyledCardCampus width="45%">
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo />
          </Row>

          <TitleCard>Liste de diffusion</TitleCard>

          <form method="post">
            <BlackText style={{ marginBottom: "20px", textAlign: "justify" }}>
              Merci de rentrer l'adresse e-mail associée à votre compte pour vous désabonner des notifications de la Team AMNet
            </BlackText>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_mail">Adresse e-mail associée au compte</StyledInputLabel>
              <StyledInput id="user_mail" type="email" />
            </div>
            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Se désabonner</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%"/>
      <Footer page="campus" />
    </>
  );
}
