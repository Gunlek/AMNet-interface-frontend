import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import { GreenButton } from "../components/Button/Buttons";
import { Column, Row } from "../components/Container/style";
import {
  Footer,
  HelpSection,
  RectangleLogo,
  TitleCard,
} from "../components/Card/Cards";
import { StyledCardCampus } from "../components/Card/style";
import { StyledInput } from "../components/Input/style";
import { BlackTitle, GreenText, StyledLink } from "../components/Text/style";
import Checkbox from "../components/Input/Checkbox";



export default function Homepage() {
  return (
    <>
      <Head>
        <title>Connexion &bull; AMNet</title>
      </Head>
      <CampusBackground>
        <Row 
          style={{
            flex:"1", 
            justifyContent:"center", 
            alignItems:"center"
          }}
        >
          <StyledCardCampus 
            width="35%" 
            height="auto"
            style={{ marginBottom:"20px"}}
          >
              <Row style={{marginBottom:"20px", marginTop:"10px", justifyContent:"center"}}>
                <RectangleLogo/>
              </Row>
              
              <Row style={{width: "100%"}}>
                <TitleCard>
                  Connexion
                </TitleCard>
              </Row>

              <form method="post" style={{marginTop:"20px"}}>
                <div style={{marginBottom:"20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Nom d'utilisateur</GreenText>
                  <StyledInput type="text"/>
                </div>

                <div style={{marginBottom:"20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Mot de passe</GreenText>
                  <StyledInput type="password"/>
                </div>
                <Row style={{alignItems:"Center", marginBottom:"20px"}}>
                  
                    <span style={{paddingLeft:"5px"}}>Rester connecté</span>
                </Row>
                <div style={{marginBottom:"5px"}}>
                  <StyledLink hovercolor="#096A09" href="./lostpassword">Mot de passe / Identifiant oublié</StyledLink>
                </div>
                <div style={{marginBottom:"20px"}}>
                  <StyledLink hovercolor="#096A09" href="./signup"> Pas encore inscrit ? Inscrivez-vous en cliquant ici</StyledLink>
                </div>
                <Row style={{justifyContent:"center"}}>
                  <GreenButton>Connexion</GreenButton>
                </Row>
              </form>
          </StyledCardCampus>
        </Row>
    
        <Column style={{width:"111.1%"}}>
          <HelpSection/>
          <Footer page="campus"/>
        </Column>
      </CampusBackground>
    </>
  );
}
