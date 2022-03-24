import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import { Row } from "../components/Container/style";
import {
  Footer,
  HelpSection,
  TitleCard,
} from "../components/Card/Cards";
import { StyledCardCampus } from "../components/Card/style";
import { StyledInput, StyledInputLabel } from "../components/Input/style";
import { BlackText, StyledLink } from "../components/Text/style";
import Checkbox from "../components/Input/Checkbox";
import RectangleLogo from "../components/Card/RectangleLogo";

export default function Login() {
  const [checked, setChecked] = useState(false);
  
  const handleCheckboxChange = (elmt) => {
    setChecked(elmt.target.checked);
  }

  return (
    <>
      <Head>
        <title>Connexion &bull; AMNet</title>
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
        <StyledCardCampus width="auto" >
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo />
          </Row>

          <TitleCard>Connexion</TitleCard>

          <form method="post">
            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_name">Nom d'utilisateur</StyledInputLabel>
              <StyledInput id="user_name" type="text" />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
              <StyledInput id="user_password" type="password" />
            </div>

            <label style={{ display: "flex", alignItems: "Center", marginBottom: "20px" }}>
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
              <span style={{ marginLeft: "10px" }}><BlackText>Rester connecté</BlackText></span>
            </label>

            <div style={{ marginBottom: "5px" }}>
              <StyledLink hovercolor="#096A09" href="./lostpassword">Mot de passe / Identifiant oublié</StyledLink>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <StyledLink hovercolor="#096A09" href="./signup"> Pas encore inscrit ? Inscrivez-vous en cliquant ici</StyledLink>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Connexion</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%"/>
      <Footer page="campus" />
    </>
  );
}
