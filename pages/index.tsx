import React from "react";
import Head from "next/head";
import { ButtonLink } from "../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../components/Card/Cards";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column, Col6, Row } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import { AdminNotifications, StateContribution } from "../components/Status/Status";
import { BlackTitle, BlackText } from "../components/Text/style";


export default function Dashboard() {
  const Contribution = true;

  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>

      <UserMenu page="index" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0">
          <Row mobileMarginBottom="20px" justify="space-between" mobileJustify="space-around" style={{ flex:"1", alignItems: "center" }}>
            <BlackTitle>Mon Espace AMNet</BlackTitle>
            {!Contribution && <AdminNotifications notifNumber={3} unpaid={true}/>}
          </Row>

          <Row align="center" style={{ justifyContent: "center", width: "auto" }}>
            {Contribution && <AdminNotifications notifNumber={3}/>}
            <StateContribution status={Contribution ? "paid" : "unpaid"} />
          </Row>
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
                  <ButtonLink href="/iot">Accéder</ButtonLink>
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
                  style={{
                    flex: "1",
                    justifyContent: "center",
                    alignItems: "end",
                    marginTop: "20px"
                  }}
                >
                  <ButtonLink href="/homepage/faq">Accéder</ButtonLink>
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
