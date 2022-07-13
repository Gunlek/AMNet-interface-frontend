import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../../components/Background/style";
import { GreenButton } from "../../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../../components/Card/Cards";
import RectangleLogo from "../../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../../components/Card/style";
import { Row } from "../../../components/Container/style";
import { StyledInputLabel, StyledInput } from "../../../components/Input/style";
import axios from "axios";

export default function LostPassword() {
  const [mail, setMail] = useState("")

  const resetPassword = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API_HOST}/mail/password-reset`, { user_email: mail })
      .then()
  }

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

          <form onSubmit={resetPassword}>
            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_mail">Adresse e-mail associée au compte</StyledInputLabel>
              <StyledInput id="user_mail" type="email" onChange={(e) => setMail(e.target.value)} />
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton type="submit">Envoyez un mail de récuperation</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}
