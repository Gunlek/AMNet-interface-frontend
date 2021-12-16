import React from "react";
import Head from "next/head";
import {CampusBackground} from "../components/Background/style";
import {HelpSection, RectangleLogo , TeamPicture} from "../components/Card/Cards";
import {GreenButton} from "../components/Button/Buttons";
import {StyledGreenText, StyledGreenLine, StyledCard, StyledInput, StyledRadio} from "../components/Card/style";
import {StyledFlexCol , StyledFlexRow, StyledFlexDiv} from "../components/Container/style";

export default function Homepage() {
  return (
    <>
    <Head><title>Connexion &bull; AMNet</title></Head>
    <CampusBackground>
        <StyledFlexCol>
            <StyledCard width="40%" height="auto" padding="20px">
            <StyledFlexCol>
              <RectangleLogo></RectangleLogo>
              <StyledFlexDiv width="100%" style={{textAlign: "center"}}>Espace AMNet</StyledFlexDiv>
              <StyledFlexRow>
                <StyledFlexDiv width="125px"><StyledGreenText>Connexion</StyledGreenText></StyledFlexDiv>
                <StyledFlexDiv width="calc(100% - 125px)" height="0px"><StyledGreenLine></StyledGreenLine></StyledFlexDiv>
              </StyledFlexRow>
              <form method="post">
                    <div >
                        <StyledGreenText>Nom d'utilisateur</StyledGreenText>
                        <StyledInput>aaaaaaaaaaaaaaaaaaaaaaaa</StyledInput>
                    </div>

                    <div >
                        <StyledGreenText>Mot de passe</StyledGreenText>
                        <StyledInput width="100%">aaaaaaaaaaaaaaaaaaaaa</StyledInput>
                    </div>
                    <StyledFlexRow>
                      <StyledFlexDiv>aaa<StyledRadio></StyledRadio></StyledFlexDiv>
                      <StyledFlexDiv>Rester connecté</StyledFlexDiv>
                    </StyledFlexRow>
                    <StyledFlexCol>
                      <StyledFlexDiv>Mot de passe / Identifiant oublié</StyledFlexDiv>
                      <StyledFlexDiv>Pas encore inscrit ? Inscrivez-vous en cliquant ici</StyledFlexDiv>
                    </StyledFlexCol>
                    <GreenButton>Conexion</GreenButton>
              </form> 
            </StyledFlexCol> 
            </StyledCard>
            <StyledFlexRow width="90%" height="5%"><HelpSection></HelpSection></StyledFlexRow>
        </StyledFlexCol>
    </CampusBackground>
    </>
    );
  }