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
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0">
          <Column mobileMarginBottom="20px"  style={{ justifyContent: "center" }}>
            <BlackTitle>Mon Espace AMNet</BlackTitle>
          </Column>

          <Column align="end" mobileAlign="center" style={{ flex: "1", justifyContent: "center" }}>
            <StateContribution status="paid" />
          </Column>
        </ResponsiveRow>

        <StyledCard marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "3" }}>
          <Column style={{ height: "100%" }}>
            <TitleCard>Actualité AMNet</TitleCard>
            <BlackText>
              Nouvelle mise à jour
              Le design de l'interface a changé et
              quelques améliorations sont toujours en cours !
            </BlackText>
          </Column>
        </StyledCard>

        <ResponsiveRow marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "6" }}>
          <Col6 paddingRight="1%" mobileMarginBottom="30px">
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

          <Col6 paddingLeft="1%">
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
