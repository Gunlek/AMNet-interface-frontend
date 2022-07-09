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
import TeamEditor  from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";
import TeamPicture from "../../components/Card/TeamPicture";
import { StyledDeleteImg } from "../../components/Card/Images/style";
import jwt_decode from "jwt-decode";
import axios from "axios";
import parseCookies from "../../components/Utils/cookie";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];
    const [accutalTeam, user] = await Promise.all([
      axios.get('http://localhost:3333/settings/admin-list'),
      axios.get(`http://localhost:3333/user/${userId}`)
    ])

    if (user.data.user_rank === "admin") {
      if (res) {
        if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
          res.writeHead(301, { Location: "/" })
          res.end()
        }
      }

      return {
        props: { accutalTeam: accutalTeam.data }
      }
    }
    else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
  else {
    return {
      redirect: {
        destination: '/homepage',
        permanent: false,
      },
    }
  }
}

export default function Edition(props: {accutalTeam: { pseudo: string, id: string }[]}) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const {team, teamEditor} = TeamEditor(props.accutalTeam)
  const [TabFile, setTabFile] = useState({ IR: null, Status: null, TeamPicture: null });
  const [URLTeamPicture, setURLTeamPicture] = useState(undefined)

  useEffect(() => {
    const IRinput = document.getElementById("IR") as HTMLInputElement;
    const StatusInput = document.getElementById("Status") as HTMLInputElement;
    const TeamPictureInput = document.getElementById("TeamPicture") as HTMLInputElement;

    IRinput.value = null;
    StatusInput.value = null;
    TeamPictureInput.value = null;
  }, []);

  useEffect(() => {
    if (TabFile.TeamPicture && TabFile.TeamPicture["size"] <= 102400)
      setURLTeamPicture(URL.createObjectURL(TabFile.TeamPicture))
    else
      setURLTeamPicture(undefined)
  }, [TabFile]);

  const SetFile = (file: File, id: string) => {
    let NemTabFile = { ...TabFile };
    NemTabFile[id] = file;
    setTabFile(NemTabFile);
  }

  const DeleteFile = (id: string) => {
    (document.getElementById(id) as HTMLInputElement).value = null;
    const NemTabFile = { ...TabFile };
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
                  {TabFile.IR &&
                    <div
                      style={{
                        marginLeft: minWidth1000 && "10px",
                        marginTop: !minWidth1000 && "10px",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <StyledLink
                        color="#096a09"
                        target="_blank"
                        href={URL.createObjectURL(TabFile.IR)}
                      >
                        {TabFile.IR["name"]}
                      </StyledLink>

                      <StyledDeleteImg onClick={() => DeleteFile("IR")} src="/static/icons/fail.svg" />
                    </div>
                  }
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
                  {TabFile.Status &&
                    <div
                      style={{
                        marginLeft: minWidth1000 && "10px",
                        marginTop: !minWidth1000 && "10px",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <StyledLink
                        color="#096a09"
                        target="_blank"
                        href={URL.createObjectURL(TabFile.Status)}
                      >
                        {TabFile.Status["name"]}
                      </StyledLink>
                      <StyledDeleteImg onClick={() => DeleteFile("Status")} src="/static/icons/fail.svg" />
                    </div>
                  }
                </ResponsiveRow>
              </ResponsiveRow>
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCard>

        <StyledCard marginBottom="2%" mobileMarginBottom="10px">
          <TitleCard>Page d&apos;accueil</TitleCard>
          <ResponsiveRow style={{ marginTop: "20px" }}>
            <Col6 marginRight="1%" mobileMarginBottom="20px">
              <GreenText style={{ marginBottom: "5px" }}>Photo de l&apos;AMNet</GreenText>
              <ResponsiveRow style={{ marginBottom: "20px" }}>
                <Row width="400px" mobileWidth="auto" mobileMarginBottom="20px">
                  <StyledLink
                    color="black"
                    target="_blank"
                    href="/static/images/homepage/team.jpg"
                  >
                    Voir la photo actuelle
                  </StyledLink>
                </Row>

                <ResponsiveRow style={{ alignItems: "center", width: "auto" }}>
                  <FileUploader id="TeamPicture" setfile={SetFile} accept=".jpeg, .jpg" />

                  {TabFile.TeamPicture &&
                    <BlackText
                      style={{
                        marginLeft: minWidth1000 && "10px",
                        marginTop: !minWidth1000 && "10px",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {TabFile.TeamPicture["size"] <= 102400 ?
                        <>
                          <StyledLink
                            color="#096a09"
                            target="_blank"
                            href={URLTeamPicture}
                          >
                            {TabFile.TeamPicture["name"]}
                          </StyledLink>
                          <StyledDeleteImg onClick={() => (DeleteFile("TeamPicture"))} />
                        </>
                        :
                        <>
                          Fichier trop volumineux
                        </>
                      }
                    </BlackText>
                  }
                </ResponsiveRow>
              </ResponsiveRow>

              <BlackText
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  marginBottom: "20px"
                }}
              >
                Pour optimiser le chargement de la homepage, la photo de la Team ne doit pas dépasser les 100Ko.
                <br /> Petite thuysse : largeur maximum 1000px, en .jpg ou .jpeg et utilisez{" "}
                <StyledLink
                  color="#096a09"
                  target="_blank"
                  href="https://compressor.io/"
                  style={{ fontSize: "12px" }}
                >
                  ce site
                </StyledLink>
              </BlackText>

              {teamEditor()}
            </Col6>

            <Col6 marginLeft="1%">
              <GreenText style={{ marginBottom: "5px" }}>Apercu de la Photo avec les bucques</GreenText>
              <TeamPicture
                Team={team}
                outline="3px solid #096a09"
                background={URLTeamPicture}
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
