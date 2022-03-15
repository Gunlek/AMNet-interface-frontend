import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../components/Background/style";
import {
  Footer,
  HelpSection,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import { StyledCardCampus } from "../components/Card/style";
import { Row } from "../components/Container/style";
import { StyledInput, StyledInputLabel } from "../components/Input/style";
import RectangleLogo from "../components/Card/RectangleLogo";
import useMediaQuery from "../components/MediaQueries/MediaQuery";

export default function LostPassword() {
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

          <TitleCard>Mot de passe oublié</TitleCard>

          <form method="post">
            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_mail">Adresse e-mail associée au compte</StyledInputLabel>
              <StyledInput id="user_mail" type="email" />
            </div>
            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Envoyez un mail de récuperation</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection />
      <Footer page="campus" />
    </>
  );
}
