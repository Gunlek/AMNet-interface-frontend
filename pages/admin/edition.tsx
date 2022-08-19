import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Row,
  DashboardContainer,
  ResponsiveRow,
  Col6,
  StyledMain
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackText, BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { Footer, TitleCard } from "../../components/Card/Cards";
import TeamEditor from "../../components/TeamEditor/TeamEditor";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import FileUploader from "../../components/Input/FileUploader";
import TeamPicture from "../../components/Card/TeamPicture";
import { StyledDeleteImg } from "../../components/Card/Images/style";
import axios, { AxiosResponse } from "axios";
import getToken from "../../components/Utils/auth-token";
import getConfig from "../../components/Utils/req-config";
import Modal from "../../components/Card/Modals/Modal";
import usePageTransition from "../../components/Utils/usePageTransition";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)

    const [accutalTeam, user, promotion] = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/admin-list`),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config),
      axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`)
    ])

    if (user.data.user_rank === "admin") {
      return {
        props: { accutalTeam: accutalTeam.data, promotion: promotion.data as string }
      }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    redirect: {
      destination: '/homepage',
      permanent: false,
    }
  }
}

export default function Edition(props: { accutalTeam: { pseudo: string, id: string }[], promotion: string }) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const { team, teamEditor } = TeamEditor(props.accutalTeam)
  const [TabFile, setTabFile] = useState({ IR: null, Status: null, TeamPicture: null });
  const [modal, setModal] = useState({ show: false, content: <></> });
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const { roadTo, pageTransition, roadToHome } = usePageTransition('user');

  useEffect(() => {
    (document.getElementById("IR") as HTMLInputElement).value = null;
    (document.getElementById("Status") as HTMLInputElement).value = null;
    (document.getElementById("TeamPicture") as HTMLInputElement).value = null;
  }, []);

  const SetFile = (file: File, id: string) => {
    const NemTabFile = { ...TabFile };
    NemTabFile[id] = file;
    setTabFile(NemTabFile);
  };

  const DeleteFile = (id: string, id2?: string) => {
    (document.getElementById(id) as HTMLInputElement).value = null;
    const NemTabFile = { ...TabFile };
    NemTabFile[id] = null;

    if (id2) {
      (document.getElementById(id2) as HTMLInputElement).value = null;
      NemTabFile[id2] = null;
    }

    setTabFile(NemTabFile);
  };

  const updateDocs = (e) => {
    e.preventDefault();
    let promise = [];

    if (TabFile.IR || TabFile.Status) {
      if (TabFile.IR) promise.push(axios.put('/settings/doc/RI-AMNet', { doc: TabFile.IR }, config));
      if (TabFile.Status) promise.push(axios.put('/settings/doc/Statuts-AMNet', { doc: TabFile.Status }, config));

      Promise.all(promise)
        .then((res: any) => {
          if (res[0].status == 200 && (!res[1] || res[1].status == 200)) {
            const newModal = {
              show: !modal.show,
              content: <>Les Documents administratifs ont été mis à jour</>
            };

            DeleteFile("IR", "Status");
            setModal(newModal);
          }
        })
    }
  };

  const updateTeamList = async (e) => {
    e.preventDefault();

    axios.put('/settings/admin-list', { team: team, team_picture: TabFile.TeamPicture }, config)
      .then((res: AxiosResponse) => {
        if (res.status == 200) {
          const newModal = {
            show: !modal.show,
            content: <>La Page d&apos;accueil à été mise à jour</>
          }

          setModal(newModal)
        }
      })
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <Modal style={{ width: "625px", textAlign: "center" }} show={modal.show}>{modal.content}</Modal>

      <StyledMain variants={pageTransition}>
        <AdminMenu page="edition" setTranstion={roadTo} setHomeTransition={roadToHome} />

        <DashboardContainer exit={pageTransition.exit ? "false" : undefined}>
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
                      href={`${process.env.NEXT_PUBLIC_API_HOST}/RI-AMNet.pdf`}
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
                      href={`${process.env.NEXT_PUBLIC_API_HOST}/Statuts-AMNet.pdf`}
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
                <GreenButton onClick={updateDocs}>Mettre à jour</GreenButton>
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
                      href={`${process.env.NEXT_PUBLIC_API_HOST}/team.jpeg`}
                    >
                      Voir la photo actuelle
                    </StyledLink>
                  </Row>

                  <ResponsiveRow style={{ alignItems: "center", width: "auto" }}>
                    <FileUploader id="TeamPicture" setfile={SetFile} accept=".jpeg, .jpg, .png, .webp" />

                    {TabFile.TeamPicture &&
                      <BlackText
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
                          href={URL.createObjectURL(TabFile.TeamPicture)}
                        >
                          {TabFile.TeamPicture["name"]}
                        </StyledLink>
                        <StyledDeleteImg onClick={() => (DeleteFile("TeamPicture"))} />
                      </BlackText>
                    }
                  </ResponsiveRow>
                </ResponsiveRow>

                {teamEditor()}
              </Col6>

              <Col6 marginLeft="1%">
                <GreenText style={{ marginBottom: "5px" }}>Apercu de la Photo avec les bucques</GreenText>
                <TeamPicture
                  Team={team}
                  outline="3px solid #096a09"
                  background={TabFile.TeamPicture ? URL.createObjectURL(TabFile.TeamPicture) : undefined}
                  promotion={props.promotion}
                />
              </Col6>
            </ResponsiveRow>

            <Row style={{ marginTop: "20px", justifyContent: "center" }}>
              <GreenButton onClick={updateTeamList}>Mettre à jour</GreenButton>
            </Row>
          </StyledCard>

          <Footer marginTop="0" />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}
