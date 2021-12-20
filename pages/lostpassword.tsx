import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import {
  HelpSection,
  RectangleLogo,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import {
  GreenText,
  StyledCard,
  StyledInput,
  StyledCheckbox,
  BlackText,
  BlackTitle
} from "../components/Card/style";
import {
  Col2,
  Col6,
  Col8,
  Row,
} from "../components/Container/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Mot de passe oublié &bull; AMNet</title>
      </Head>
      <CampusBackground  style={{justifyContent:"space-between"}}>
          <Row style={{flex: "10", justifyContent:"center", alignItems:"center"}}>
            <StyledCard width="30%" height="auto" padding="20px">
                <Row style={{justifyContent:"center"}}>
                  <RectangleLogo/>
                </Row>
                <Row style={{justifyContent:"center"}}>
                  <BlackTitle>Espace AMNet</BlackTitle>
                </Row>
                <Row style={{width: "100%"}}>
                  <TitleCard>
                    Mot de passe oublié
                  </TitleCard>
                </Row>
                <form method="post" style={{paddingTop:"20px"}}>
                  <div style={{paddingBottom:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Adresse e-mail associée au compte</GreenText>
                    <StyledInput type="email"/>
                  </div>
                  <Row style={{justifyContent:"center"}}>
                    <GreenButton>Envoyez un mail de récuperation</GreenButton>
                  </Row>
                </form>
            </StyledCard>
            
          </Row>
          <Row style={{flex: "1",}}><HelpSection /></Row>
      </CampusBackground>
    </>
  );
}
