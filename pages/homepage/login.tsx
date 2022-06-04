import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../components/Card/Cards";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../components/Card/style";
import { Row } from "../../components/Container/style";
import Checkbox from "../../components/Input/Checkbox";
import { StyledInputLabel, StyledInput } from "../../components/Input/style";
import { BlackText, StyledLink } from "../../components/Text/style";
import Link from "next/link";
import PasswordInput from "../../components/Input/PasswordInput";

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
              <PasswordInput id="user_password" />
            </div>

            <label style={{ display: "flex", alignItems: "Center", marginBottom: "20px" }}>
              <Checkbox checked={checked} onChange={handleCheckboxChange} />
              <BlackText style={{ marginLeft: "10px" }}>Rester connecté</BlackText>
            </label>

            <div style={{ marginBottom: "5px" }}>
              <Link href="/homepage/lostpassword" passHref>
                <StyledLink hovercolor="#096A09" >Mot de passe / Identifiant oublié</StyledLink>
              </Link>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <Link href="/homepage/signup" passHref>
                <StyledLink hovercolor="#096A09"> Pas encore inscrit ? Inscrivez-vous en cliquant ici</StyledLink>
              </Link>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Connexion</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}
