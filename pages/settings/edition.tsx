import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {
  Row,
  DashboardContainer,
  ResponsiveRow,
  Col6
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard } from "../../components/Card/Cards";
import { TeamEditor } from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";
import TeamPicture from "../../components/Card/TeamPicture";


export default function Edition() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Team, teamEditor] = TeamEditor()
  
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
                    <StyledLink color="black" hovercolor="#67bc45" target="_blank" href="/static/docs/Reglement_Interieur_AMNet.pdf">Voir le Réglement Intérieur actuel</StyledLink>
                  </div>
                  <FileUploader/>
                </ResponsiveRow>

              </div>

              <div style={{ marginBottom: "20px" }}>
                <GreenText style={{ marginBottom: "5px" }}>Status</GreenText>
                <ResponsiveRow>
                  <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                    <StyledLink color="black" hovercolor="#67bc45" target="_blank" href="/static/docs/Statuts_AMNet.pdf">Voir les statuts actuels</StyledLink>
                  </div>
                  <FileUploader/>
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
              <ResponsiveRow>
                <Col6 style={{marginRight: minWidth1000 ? "1%" : "0"}}>
                  <GreenText style={{ marginBottom: "5px" }}>Photo de l'AMNet</GreenText>
                  <ResponsiveRow style={{marginBottom: "20px"}}>
                    <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                      <StyledLink style={{ fontSize: "1.2em" }} color="black" hovercolor="#67bc45" target="_blank" href="/static/images/team.png">Voir la photo actuelle</StyledLink>
                    </div>
                    <FileUploader/>
                  </ResponsiveRow>

                  {teamEditor}
                </Col6>

                <Col6 style={{marginLeft: minWidth1000 ? "1%" : "0", marginTop: minWidth1000? "0" : "20px"}}>
                  <GreenText style={{marginBottom: "5px"}}>Apercu de la Photo avec les bucques</GreenText>
                  <div style={{ outline: "3px solid #096a09", borderRadius: "33px" }}>
                    <TeamPicture Team={Team}/>
                  </div>
                </Col6>
              </ResponsiveRow>

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
