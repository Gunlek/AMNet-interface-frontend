import React from "react";
import Head from "next/head";
import { GreenButton } from "../../components/Button/Buttons";
import {
  Row,
  Col6,
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection, TitleCard } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import UserMenu from "../../components/Menu/UserMenu";
import { StateContribution } from "../../components/Status/Status";
import { BlackTitle, BlackText, StyledLinkButton } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";


export default function Dashboard() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>

      <UserMenu page="index" />

      <DashboardContainer>
        <ResponsiveRow style={{ margin: "15px 0", justifyContent: minWidth1000 ? "start" : "center" }}>
          <Column style={{ justifyContent: "center" }}>
            <BlackTitle>Mon Espace AMNet</BlackTitle>
          </Column>

          <Column style={{ flex: "1", alignItems: minWidth1000 ? "end" : "center", justifyContent: "center" }}>
            <StateContribution status="paid" />
          </Column>
        </ResponsiveRow>

        <StyledCard style={{ flex: "3", marginBottom: minWidth1000 ? "2%" : "4%" }}>
          <Column style={{ height: "100%" }}>
            <TitleCard>Actualité AMNet</TitleCard>
            <BlackText>
              Nouvelle mise à jour
              Le design de l'interface a changé et
              quelques améliorations sont toujours en cours !
            </BlackText>
          </Column>
        </StyledCard>

        <ResponsiveRow style={{ flex: "6", marginBottom: minWidth1000 ? "2%" : "4%" }}>
          <Col6 style={{ marginRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "4%" }}>
            <StyledCard style={{ height: "100%" }}>
              <Column style={{ height: "100%" }}>
                <TitleCard>Objets connectés</TitleCard>
                <BlackText>
                  Faites vos demandes d'ajouts spécifiques
                  (Objets connectés (IoT), consoles, etc...)
                  depuis cette page
                </BlackText>

                <Row
                  style={{
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "end",
                    marginTop: "20px"
                  }}
                >
                  <StyledLinkButton href="../dashboard/iot" style={{ borderRadius: "90px" }}>
                    <GreenButton>Accéder</GreenButton>
                  </StyledLinkButton>
                </Row>
              </Column>
            </StyledCard>
          </Col6>

          <Col6 style={{ marginLeft: minWidth1000 ? "1%" : "0" }}>
            <StyledCard style={{ height: "100%" }}>
              <Column style={{ height: "100%" }}>
                <TitleCard>FAQ</TitleCard>
                <BlackText>
                  Vous vous posez une question sur notre association?
                  Sur comment se connecter à notre réseau?
                  Trouvez toutes vos réponses ici !
                </BlackText>

                <Row
                  style={
                    {
                      flex: "1",
                      justifyContent: "center",
                      alignItems: "end",
                      marginTop: "20px"
                    }}
                >
                  <StyledLinkButton href="../dashboard/faq" style={{ borderRadius: "90px" }}>
                    <GreenButton>Accéder</GreenButton>
                  </StyledLinkButton>
                </Row>
              </Column>
            </StyledCard>
          </Col6>
        </ResponsiveRow>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
