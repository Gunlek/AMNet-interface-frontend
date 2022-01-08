import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Col6, 
  Column,
  StyledDashboard
} from "../../components/Container/style";
import { HelpSection, TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { StateContribution } from "../../components/State/States";
import { BlackTitle, BlackText } from "../../components/Text/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="home" />

        <StyledDashboard>
          <Row style={{ margin:"1% 0"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Mon Espace AMNet</BlackTitle>
            </Column>
            
            <Column style={{ flex: "1", alignItems: "end", justifyContent: "center"}}>
              <StateContribution status="unpaid"/>
            </Column>
          </Row>

          <StyledCard style={{ flex: "3", marginBottom:"2%" }}>
            <Column style={{height:"100%"}}>
              <TitleCard>Actualité AMNet</TitleCard>
              <BlackText>
                Nouvelle mise à jour
                Le design de l'interface a changé et 
                quelques améliorations sont toujours en cours !
              </BlackText>
            </Column>
          </StyledCard>

          <Row style={{flex: "6", marginBottom:"2%"}}>
            <Col6 style={{marginRight:"1%"}}>
              <StyledCard style={{height: "100%"}}>
                <Column style={{height:"100%"}}>
                  <TitleCard>Objets connectés</TitleCard>
                  <BlackText>
                    Faites vos demandes d'ajouts spécifiques 
                    (Objets connectés (IoT), consoles, etc...) 
                    depuis cette page spécifique
                  </BlackText>
                  
                  <Row 
                    style={{
                      height:"100%", 
                      justifyContent:"center", 
                      alignItems:"end",
                      marginTop: "20px"
                    }}
                  >
                    <a href="./iot">
                      <GreenButton>Accéder</GreenButton>
                    </a>
                  </Row>
                </Column>
              </StyledCard>
            </Col6>

            <Col6 style={{marginLeft:"1%"}}>
              <StyledCard style={{height: "100%"}}>
                <Column style={{height:"100%"}}>
                  <TitleCard>FAQ</TitleCard>
                  <BlackText>
                    Vous vous posez une question sur notre association?
                    Sur comment se connecter à notre réseau?
                    Trouvez toutes vos réponses ici !
                  </BlackText>

                  <Row 
                    style={
                      {height:"100%", 
                      justifyContent:"center", 
                      alignItems:"end",
                      marginTop: "20px"
                    }}
                  >
                    <a href="./faq">
                      <GreenButton>Accéder</GreenButton>
                    </a>
                  </Row>
                </Column>
              </StyledCard>
            </Col6>
          </Row>

          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </StyledDashboard>
      </DefaultBackground>
    </>
  );
}
