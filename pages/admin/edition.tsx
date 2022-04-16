import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Row,
  DashboardContainer,
  ResponsiveRow,
  Col6
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackText, BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards";
import { TeamEditor } from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";
import TeamPicture from "../../components/Card/TeamPicture";
import { StyledImg } from "../../components/Card/Images/style";


export default function Edition() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Team, teamEditor] = TeamEditor()
  const [TabFile, setTabFile] = useState({ IR: null, Status: null, TeamPicture: null });

  useEffect(() => {
    const IRinput = document.getElementById("IR") as HTMLInputElement;
    const StatusInput = document.getElementById("Status") as HTMLInputElement;
    const TeamPictureInput = document.getElementById("TeamPicture") as HTMLInputElement;

    IRinput.value = null;
    StatusInput.value = null;
    TeamPictureInput.value = null;
  }, []);

  const SetFile = (id: string, file: any) => {
    let NemTabFile = { ...TabFile };
    NemTabFile[id] = file;
    setTabFile(NemTabFile);
  }

  const DeleteFile = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement;
    input.value = null;
    let NemTabFile = { ...TabFile };
    NemTabFile[id] = null;
    setTabFile(NemTabFile);
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="edition" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Edition</BlackTitle>
        </Row>

        <StyledCard marginBottom="2%" mobileMarginBottom="30px">
          <TitleCard>Documents administratifs</TitleCard>
          <form method="post" style={{ marginTop: "20px", height: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <GreenText style={{ marginBottom: "5px" }}>Réglement Intérieur</GreenText>
              <ResponsiveRow>
                <Row width="400px" mobileWidth="auto" mobileMarginBottom="20px">
                  <StyledLink
                    color="black"
                    hovercolor="#2E8A21"
                    target="_blank"
                    href="/static/docs/Reglement_Interieur_AMNet.pdf"
                  >
                    Voir le Réglement Intérieur actuel
                  </StyledLink>
                </Row>
                <ResponsiveRow
                  mobileJustify="center"
                  width="auto"
                  mobileWidth="100%"
                  style={{
                    alignItems: "center"
                  }}
                >
                  <FileUploader id="IR" setfile={SetFile} accept=".pdf" />
                  <div
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile.IR ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="#096a09"
                      target="_blank"
                      href={TabFile.IR && URL.createObjectURL(TabFile.IR)}
                    >
                      {TabFile.IR && TabFile.IR["name"]}
                    </StyledLink>

                    <StyledImg onClick={() => DeleteFile("IR")} src="/static/icons/fail.svg" />
                  </div>
                </ResponsiveRow>
              </ResponsiveRow>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <GreenText style={{ marginBottom: "5px" }}>Status</GreenText>
              <ResponsiveRow>
                <Row width="400px" mobileWidth="auto" mobileMarginBottom="20px">
                  <StyledLink
                    color="black"
                    hovercolor="#2E8A21"
                    target="_blank"
                    href="/static/docs/Statuts_AMNet.pdf"
                  >
                    Voir les statuts actuels
                  </StyledLink>
                </Row>
                <ResponsiveRow
                  width="auto"
                  mobileWidth="100%"
                  mobileJustify="center"
                  align="center"
                >
                  <FileUploader id="Status" setfile={SetFile} accept=".pdf" />
                  <div
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile.Status ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="#096a09"
                      target="_blank"
                      href={TabFile.Status && URL.createObjectURL(TabFile.Status)}
                    >
                      {TabFile.Status && TabFile.Status["name"]}
                    </StyledLink>
                    <StyledImg onClick={() => DeleteFile("Status")} src="/static/icons/fail.svg" />
                  </div>
                </ResponsiveRow>
              </ResponsiveRow>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCard>

        <StyledCard marginBottom="2%" mobileMarginBottom="10px">
          <TitleCard>Page d'accueil</TitleCard>
          <ResponsiveRow style={{ marginTop: "20px" }}>
            <Col6 marginRight="1%" mobileMarginBottom="20px">
              <GreenText style={{ marginBottom: "5px" }}>Photo de l'AMNet</GreenText>
              <ResponsiveRow style={{ marginBottom: "20px" }}>
                <Row width="400px" mobileWidth="auto" mobileMarginBottom="20px">
                  <StyledLink
                    color="black"
                    target="_blank"
                    href="/static/images/team.png"
                  >
                    Voir la photo actuelle
                  </StyledLink>
                </Row>
                <ResponsiveRow style={{ alignItems: "center", width: "auto" }}>
                  <FileUploader id="TeamPicture" setfile={SetFile} accept=".jpeg, .jpg, .png, .svg" />
                  <BlackText
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile.TeamPicture ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="#096a09"
                      target="_blank"
                      href={TabFile.TeamPicture && URL.createObjectURL(TabFile.TeamPicture)}
                    >
                      {TabFile.TeamPicture && TabFile.TeamPicture["name"]}
                    </StyledLink>
                    <StyledImg onClick={() => DeleteFile("TeamPicture")} src="/static/icons/fail.svg" />
                  </BlackText>
                </ResponsiveRow>
              </ResponsiveRow>
              {teamEditor}
            </Col6>

            <Col6 marginLeft="1%">
              <GreenText style={{ marginBottom: "5px" }}>Apercu de la Photo avec les bucques</GreenText>
              <TeamPicture
                outline="3px solid #096a09"
                background={TabFile.TeamPicture && URL.createObjectURL(TabFile.TeamPicture)}
                Team={Team}
              />
            </Col6>
          </ResponsiveRow>

          <Row style={{ marginTop: "20px", justifyContent: "center" }}>
            <GreenButton>Mettre à jour</GreenButton>
          </Row>
        </StyledCard>
        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
