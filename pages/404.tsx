import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../components/Background/style";
import { ButtonLink } from "../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../components/Card/Cards";
import RectangleLogo from "../components/Card/RectangleLogo";
import { StyledCardCampus } from "../components/Card/style";
import { Row } from "../components/Container/style";
import { BlackText, StyledLink, } from "../components/Text/style";

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle flexDirection="column" />

      <Row
        mobileWidth="90%"
        style={{
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0"
        }}
      >
        <StyledCardCampus width="40%" >
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo />
          </Row>

          <TitleCard>Oup&apos;s... Erreur 404</TitleCard>
          <BlackText style={{ textAlign: "justify" }}>
            Il semble que même le pouvoir de la 47-102 ne suffise pas à trouver la page que vous recherchez...<br /><br />
            La dernière solution serait sans doute d&apos;invoquer le gorg&apos;ss, pour cela il faut contacter la rochefouc&apos;s par le <StyledLink color="#096a09" href="mailto:contact@amnet.fr">channel 58</StyledLink>
          </BlackText>

          <Row
            style={{
              justifyContent: "center",
              alignItems: "end",
              marginTop: "20px"
            }}
          >
            <ButtonLink href="/">Accéder à l&apos;accueil</ButtonLink>
          </Row>

        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}