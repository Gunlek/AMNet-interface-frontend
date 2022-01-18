import React from "react";
import Head from "next/head";
import { CampusBackground } from "../components/Background/style";
import {
  Footer,
  HelpSection,
  RectangleLogo,
  TitleCard
} from "../components/Card/Cards";
import { GreenButton } from "../components/Button/Buttons";
import {  StyledCardCampus} from "../components/Card/style";
import {
  Column,
  Row,
} from "../components/Container/style";
import { StyledInput } from "../components/Input/style";
import { BlackTitle, GreenText } from "../components/Text/style";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Mot de passe oublié &bull; AMNet</title>
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
            width="45%" 
            height="auto"
            style={{marginBottom:"20px"}}
          >
              <Row style={{marginBottom:"20px", marginTop:"10px", justifyContent:"center"}}>
                <RectangleLogo/>
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
