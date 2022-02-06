import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {
  Row,
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard } from "../../components/Card/Cards";
import { TeamEditor } from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";


export default function Edition() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="edition" />

        <DashboardContainer>
          <Row style={{ margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center" }}>
            <BlackTitle>Edition</BlackTitle>
          </Row>

          <StyledCard style={{ marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <TitleCard>Documents administratifs</TitleCard>
            <form method="post" style={{ marginTop: "20px", height: "100%" }}>
              <div style={{ marginBottom: "20px" }}>
                <GreenText style={{ marginBottom: "5px" }}>Réglement Intérieur</GreenText>
                <ResponsiveRow>
                  <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <StyledLink style={{ fontSize: "1.2em" }} color="black" hovercolor="#67bc45" target="_blank" href="/static/docs/Reglement_Interieur_AMNet.pdf">Voir le Réglement Intérieur actuel</StyledLink>
                  </div>
                  <FileUploader/>
                </ResponsiveRow>

              </div>

              <div style={{ marginBottom: "20px" }}>
                <GreenText style={{ marginBottom: "5px" }}>Status</GreenText>
                <ResponsiveRow>
                  <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <StyledLink style={{ fontSize: "1.2em" }} color="black" hovercolor="#67bc45" target="_blank" href="/static/docs/Statuts_AMNet.pdf">Voir les statuts actuels</StyledLink>
                  </div>
                  <input style={{fontFamily: "Poppins"}} type="file" />
                </ResponsiveRow>
              </div>

              <Row style={{ justifyContent: "center" }}>
                <GreenButton>Mettre à jour</GreenButton>
              </Row>
            </form>
          </StyledCard>

          <StyledCard style={{ marginBottom: "2%" }}>
            <TitleCard>Page d'accueil</TitleCard>
            <form method="post" style={{ marginTop: "20px", height: "100%" }}>
              <div style={{ marginBottom: "20px" }}>
                <GreenText style={{ marginBottom: "5px" }}>Photo de l'AMNet</GreenText>
                <ResponsiveRow>
                  <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <StyledLink style={{ fontSize: "1.2em" }} color="black" hovercolor="#67bc45" target="_blank" href="/static/images/team.png">Voir la photo actuelle</StyledLink>
                  </div>
                  <input style={{fontFamily: "Poppins"}} type="file" />
                </ResponsiveRow>
              </div>


              <Column style={{ flex: "1", maxWidth: minWidth1000 ? "66.66%" : "100%" }}>
                <TeamEditor names="Trobotyk'ss (ML)°;Sdoosh;Nem'O" nums="47Li220;96Li220;74Li220"/>
              </Column>

              <Row style={{ marginTop: "20px", justifyContent: "center" }}>
                <GreenButton>Mettre à jour</GreenButton>
              </Row>
            </form>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
