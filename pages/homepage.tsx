import React from "react";
import {CampusBackground} from "../components/Background/style";
import {HelpSection, Col, Card, RectangleLogo} from "../components/Card/Cards";
import {GreenButton} from "../components/Button/Buttons";
import {StyledFlexDivCol, StyledTeamPicture, StyledFlexDivRow, StyledWhiteTxt, StyledGreenText, StyledGreenLine,StyledGreenCard} from "../components/Card/style";

export default function Homepage() {
  return (
    <>
      <CampusBackground>
        <StyledFlexDivCol margin="0" padding="0.5%">
          <StyledFlexDivRow>
            <Col><RectangleLogo></RectangleLogo></Col>
            <Col><StyledFlexDivCol align="end"><GreenButton size="44%">S'inscrire / Se Connecter</GreenButton></StyledFlexDivCol></Col>
          </StyledFlexDivRow>
          <StyledFlexDivRow>
            <Col><StyledWhiteTxt>L’AMNet est une association gérée par les étudiants qui a pour but d’administrer le réseau internet de la résidence Jacques Pagliero. Elle est totalement indépendante de l’administration de la résidence ou de l’école.<br></br><br></br> Votre cotisation sert à améliorer l’installation ainsi qu’à payer les abonnements internet. Chaque année, 80% des cotisations est utilisé directement et les 20% restants servent à créer une trésorerie pour des investissements futurs. </StyledWhiteTxt></Col>
            <Col>
              <StyledTeamPicture>
                <StyledFlexDivCol>
                  <StyledFlexDivCol width="100%" height="50%" justify="start" align="start">
                    <StyledGreenCard>La Team qui gère l’AMNet pour l’année 2021-2022</StyledGreenCard>
                  </StyledFlexDivCol>
                  <StyledFlexDivCol width="100%" height="50%" margin="0" justify="end" margin="0">
                      <Card width="100%" radius="20px">
                        <StyledFlexDivRow width="100%">
                          <Col colnumber="3" width="33%"><StyledFlexDivCol>Sdoosh <StyledGreenText>96Li220</StyledGreenText></StyledFlexDivCol></Col>
                          <Col colnumber="3" width="33%"><StyledFlexDivCol>Nem'O <StyledGreenText>74Li220</StyledGreenText></StyledFlexDivCol></Col>
                          <Col colnumber="3" width="33%"><StyledFlexDivCol>Trobotyk'ss (ML)° <StyledGreenText>47Li220</StyledGreenText></StyledFlexDivCol></Col>
                        </StyledFlexDivRow>
                      </Card>
                  </StyledFlexDivCol>
                </StyledFlexDivCol>
              </StyledTeamPicture>
            </Col>
          </StyledFlexDivRow>
          <Card width="90%" height="25%">
            <StyledFlexDivRow width="100%">
              <Col width="15%"><StyledFlexDivCol><img height="90%" src="/static/images/mc_logo.png" alt="Logo Minecraft" /></StyledFlexDivCol></Col>
              <Col width="85%">
                <StyledFlexDivRow width="100%">
                  <Col width="20%"><StyledGreenText>Serveur Minecraft</StyledGreenText></Col>
                  <Col width="80%"><StyledGreenLine></StyledGreenLine></Col>
                </StyledFlexDivRow>
                Nous proposons également d’autres services comme un serveur Minecraft : minecraft.amnet.fr
              </Col>
            </StyledFlexDivRow>  
          </Card>
          <HelpSection></HelpSection>
        </StyledFlexDivCol>
      </CampusBackground>
    </>
  );
}