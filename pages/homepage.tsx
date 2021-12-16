import React from "react";
import Head from "next/head";
import {CampusBackground} from "../components/Background/style";
import {HelpSection, RectangleLogo , TeamPicture} from "../components/Card/Cards";
import {GreenButton} from "../components/Button/Buttons";
import {StyledWhiteTxt, StyledGreenText, StyledGreenLine, StyledCard, StyledBlackText} from "../components/Card/style";
import {StyledFlexCol , StyledFlexRow, StyledFlexDiv} from "../components/Container/style";

export default function Homepage() {
  return (
    <>
      <Head><title>Acceuil &bull; AMNet</title></Head>
      <CampusBackground>
        <StyledFlexCol justify="space-around">
          <StyledFlexRow  width="90%" height="15%">
            <StyledFlexDiv grow="2">
              <StyledFlexRow justify="start"><RectangleLogo color="blanc"></RectangleLogo></StyledFlexRow>
            </StyledFlexDiv>
            <StyledFlexDiv grow="2">
              <StyledFlexRow justify="end"><GreenButton size="44%">S'inscrire / Se Connecter</GreenButton></StyledFlexRow>
            </StyledFlexDiv>
          </StyledFlexRow>   
          <StyledFlexRow width="90%" height="50%">
              <StyledFlexDiv grow ="2" width="45%">
                <StyledWhiteTxt>L’AMNet est une association gérée par les étudiants qui a pour but d’administrer le réseau internet de  la résidence Jacques Pagliero. Elle est totalement indépendante de l’administration de la résidence ou de l’école.<br></br><br></br>Votre cotisation sert à améliorer l’installation ainsi qu’à payer les abonnements internet. Chaque année, 80% des cotisations est utilisé directement et les 20% restants servent à créer une trésorerie pour des investissements futurs. 
                </StyledWhiteTxt>
              </StyledFlexDiv>
              <StyledFlexDiv grow ="2">
                <TeamPicture names="Trobotyk'ss(ML)°;Sdoosh;Nem'O" nums="47Li220;96Li220;74Li220"></TeamPicture>
              </StyledFlexDiv>
            </StyledFlexRow> 
          <StyledCard width="90%" height="20%" minheight="170px">
            <StyledFlexRow> 
              <StyledFlexCol width="250px">
                <img style={{height: "80%", aspectRatio: "1 / 1"}} src="/static/logo/mc_logo.png" alt="Logo Minecraft" />
              </StyledFlexCol>
              <StyledFlexCol width="calc(100% - 250px)">
                <StyledFlexRow height="50px" width="100%" justify="start">
                  <StyledFlexDiv width="200px"><StyledGreenText lineheight="50px">Serveur Minecraft</StyledGreenText></StyledFlexDiv>
                  <StyledFlexDiv  width="calc(100% - 200px)" height="0px"><StyledGreenLine></StyledGreenLine></StyledFlexDiv>
                </StyledFlexRow>
                <StyledFlexDiv width="100%"> 
                  <StyledBlackText fontsize="1.2rem">
                    En plus de fournir un accès internet aux résidents nous offrons une multitude de services, un serveur Minecraft : <span style={{color: "#096A09"}}>minecraft.amnet.fr</span> et d'autres que nous vous laisserons découvrir un jour ...
                    <br></br><br></br>
                    Si vous avez des idées de services que nous pourrions proposer hésitez pas à nous contacter !
                  </StyledBlackText>
                  <StyledBlackText fontsize="1.2rem"></StyledBlackText>
                </StyledFlexDiv>
              </StyledFlexCol>
            </StyledFlexRow>
          </StyledCard>
          <StyledFlexRow width="90%" height="1.1rem"><HelpSection></HelpSection></StyledFlexRow>   
        </StyledFlexCol>
      </CampusBackground>
    </>
  );
}