import React from "react";
import Head from "next/head";
import { CampusBackground, CampusGlobalStyle } from "../components/Background/style";
import {
  Footer,
  HelpSection,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import { StyledCardCampus } from "../components/Card/style";
import { Row } from "../components/Container/style";
import { StyledInput } from "../components/Input/style";
import { GreenText } from "../components/Text/style";
import RectangleLogo from "../components/Card/RectangleLogo";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Mot de passe oublié &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />
      <CampusBackground>
        <Row
          style={{
            flex: "1",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <StyledCardCampus
            width="45%"
            style={{ marginBottom: "20px" }}
          >
            <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
              <RectangleLogo />
            </Row>

          </StyledCardCampus>
        </Row>
        
        <HelpSection />
      </CampusBackground> 
      <Footer page="campus" />
    </>
  );
}
