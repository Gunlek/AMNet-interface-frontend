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
  StyledCardCampus,
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
        <title>Connexion &bull; AMNet</title>
      </Head>
      <CampusBackground  style={{justifyContent:"space-between", paddingTop: "30px"}}>
          <Row style={{flex: "10", justifyContent:"center", alignItems:"center"}}>
            <StyledCardCampus width="30%" height="auto" padding="20px">
                <Row style={{justifyContent:"center"}}>
                  <RectangleLogo/>
                </Row>
                <Row style={{justifyContent:"center"}}>
                  <BlackTitle>Espace AMNet</BlackTitle>
                </Row>
                <Row style={{width: "100%"}}>
                  <TitleCard>
                    Connexion
                  </TitleCard>
                </Row>
                <form method="post" style={{paddingTop:"20px"}}>
                  <div style={{paddingBottom:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Nom d'utilisateur</GreenText>
                    <StyledInput type="text"/>
                  </div>

                  <div style={{paddingBottom:"20px"}}>
                    <GreenText style={{paddingBottom:"5px"}}>Mot de passe</GreenText>
                    <StyledInput type="password" autoFocus=""/>
                  </div>
                  <Row style={{alignItems:"Center", paddingBottom:"20px"}}>
                      <StyledCheckbox type="checkbox" />
                      <span style={{paddingLeft:"5px"}}>Rester connecté</span>
                  </Row>
                  <div style={{paddingBottom:"5px"}}>
                    <a href="./lostpassword">Mot de passe / Identifiant oublié</a>
                  </div>
                  <div style={{paddingBottom:"20px"}}>
                    <a href="./registration"> Pas encore inscrit ? Inscrivez-vous en cliquant ici</a>
                  </div>
                  <Row style={{justifyContent:"center"}}>
                    <GreenButton>Connexion</GreenButton>
                  </Row>
                </form>
            </StyledCardCampus>
          </Row>
          <Row style={{flex: "1",}}><HelpSection /></Row>
      </CampusBackground>
    </>
  );
}
