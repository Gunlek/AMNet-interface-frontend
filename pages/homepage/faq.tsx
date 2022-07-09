import React from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { Footer, HelpSection } from "../../components/Card/Cards";
import { Col6, Column, Row } from "../../components/Container/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { ButtonLink } from "../../components/Button/Buttons";
import { StyledCardCampus } from "../../components/Card/style";
import Image from 'next/image'

export default function FAQ() {
  const isLogged = false;

  return (
    <>
      <Head>
        <title>FAQ &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />

      <Column style={{ padding: "0 5%" }}>
        <Row margin="20px 0" mobileMargin="30px 0" direction="column">
          <Col6 mobileMarginBottom="30px" justify="center" mobileAlign="center">
            <RectangleLogo color="white" />
          </Col6>
          <Col6 align="end" mobileAlign="center" justify="center">
            <ButtonLink href={isLogged ? "/" : "/homepage/login"} width="300px">Accéder à Mon Compte</ButtonLink>
          </Col6>
        </Row>
      </Column>

      <Column style={{ padding: "0 5%", flex: "1", justifyContent: "center", alignItems: "center" }}>
        <StyledCardCampus style={{ display: "block", width: "fit-content" }}>
          <Image src="/static/images/inconstruction.png" width={440} height={343} alt="Construction Site Plot"/>
        </StyledCardCampus>
      </Column>


      <HelpSection />
      <Footer page="campus" />
    </>
  );
}
