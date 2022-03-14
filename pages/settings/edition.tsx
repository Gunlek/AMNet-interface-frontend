import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Row,
  DashboardContainer,
  ResponsiveRow,
  Col6
} from "../../components/Container/style";
import { StyledCard, StyledImg } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackText, BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards";
import { TeamEditor } from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";
import TeamPicture from "../../components/Card/TeamPicture";


export default function Edition() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Team, teamEditor] = TeamEditor()
  const [TabFile, setTabFile] = useState([null, null, null]);

  useEffect(() => {
    const input0 = document.getElementById("0") as HTMLInputElement;
    const input1 = document.getElementById("1") as HTMLInputElement;
    const input2 = document.getElementById("2") as HTMLInputElement;
    input0.value = null;
    input1.value = null;
    input2.value = null;
  }, []);

  function SetFile(index: string, file: any) {
    let NemTabFile = TabFile.slice(0);
    NemTabFile[index] = file;
    setTabFile(NemTabFile);
  }

  function DeleteFile(index: string) {
    const input = document.getElementById(index) as HTMLInputElement;
    let NemTabFile = TabFile.slice(0);
    NemTabFile[index] = null;
    input.value = null;
    setTabFile(NemTabFile);
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
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
                  <StyledLink
                    color="black"
                    hovercolor="#2E8A21"
                    target="_blank"
                    href="/static/docs/Reglement_Interieur_AMNet.pdf"
                  >
                    Voir le Réglement Intérieur actuel
                  </StyledLink>
                </div>
                <ResponsiveRow
                  style={{
                    width: minWidth1000 ? "auto" : undefined,
                    justifyContent: !minWidth1000 && "center",
                    alignItems: "center"
                  }}
                >
                  <FileUploader id="0" setfile={SetFile} accept=".pdf" />
                  <div
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile[0] ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="black"
                      hovercolor="#2E8A21"
                      target="_blank"
                      href={TabFile[0] && URL.createObjectURL(TabFile[0])}
                    >
                      {TabFile[0] && TabFile[0]["name"]}
                    </StyledLink>

                    <StyledImg onClick={() => DeleteFile("0")} src="/static/icons/fail.svg" />
                  </div>
                </ResponsiveRow>
              </ResponsiveRow>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <GreenText style={{ marginBottom: "5px" }}>Status</GreenText>
              <ResponsiveRow>
                <div style={{ width: minWidth1000 ? "400px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                  <StyledLink
                    color="black"
                    hovercolor="#2E8A21"
                    target="_blank"
                    href="/static/docs/Statuts_AMNet.pdf"
                  >
                    Voir les statuts actuels
                  </StyledLink>
                </div>
                <ResponsiveRow
                  style={{
                    width: minWidth1000 ? "auto" : undefined,
                    justifyContent: !minWidth1000 && "center",
                    alignItems: "center"
                  }}
                >
                  <FileUploader id="1" setfile={SetFile} accept=".pdf" />
                  <div
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile[1] ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="black"
                      hovercolor="#2E8A21"
                      target="_blank"
                      href={TabFile[1] && URL.createObjectURL(TabFile[1])}
                    >
                      {TabFile[1] && TabFile[1]["name"]}
                    </StyledLink>
                    <StyledImg onClick={() => DeleteFile("1")} src="/static/icons/fail.svg" />
                  </div>
                </ResponsiveRow>
              </ResponsiveRow>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCard>

        <StyledCard style={{ marginBottom: "2%" }}>
          <TitleCard>Page d'accueil</TitleCard>
          <ResponsiveRow style={{ marginTop: "20px" }}>
            <Col6 style={{ marginRight: minWidth1000 ? "1%" : "0" }}>
              <GreenText style={{ marginBottom: "5px" }}>Photo de l'AMNet</GreenText>
              <ResponsiveRow style={{ marginBottom: "20px" }}>
                <div style={{ width: minWidth1000 ? "300px" : "auto", marginBottom: minWidth1000 ? "0" : "20px" }}>
                  <StyledLink
                    color="black"
                    hovercolor="#2E8A21"
                    target="_blank"
                    href="/static/images/team.png"
                  >
                    Voir la photo actuelle
                  </StyledLink>
                </div>
                <ResponsiveRow style={{ alignItems: "center", width: "auto" }}>
                  <FileUploader id="2" setfile={SetFile} accept=".jpeg, .jpg, .png, .svg" />
                  <BlackText
                    style={{
                      marginLeft: minWidth1000 && "10px",
                      marginTop: !minWidth1000 && "10px",
                      display: TabFile[2] ? "flex" : "none",
                      alignItems: "center"
                    }}
                  >
                    <StyledLink
                      color="black"
                      hovercolor="#2E8A21"
                      target="_blank"
                      href={TabFile[2] && URL.createObjectURL(TabFile[2])}
                    >
                      {TabFile[2] && TabFile[2]["name"]}
                    </StyledLink>
                    <StyledImg onClick={() => DeleteFile("2")} src="/static/icons/fail.svg" />
                  </BlackText>
                </ResponsiveRow>
              </ResponsiveRow>
              {teamEditor}
            </Col6>

            <Col6 style={{ marginLeft: minWidth1000 ? "1%" : "0", marginTop: minWidth1000 ? "0" : "20px" }}>
              <GreenText style={{ marginBottom: "5px" }}>Apercu de la Photo avec les bucques</GreenText>
              <TeamPicture
                outline="3px solid #096a09"
                background={TabFile[2] && URL.createObjectURL(TabFile[2])}
                Team={Team}
              />
            </Col6>
          </ResponsiveRow>

          <Row style={{ marginTop: "20px", justifyContent: "center" }}>
            <GreenButton>Mettre à jour</GreenButton>
          </Row>
        </StyledCard>
        <Footer />
      </DashboardContainer>
    </>
  );
}
