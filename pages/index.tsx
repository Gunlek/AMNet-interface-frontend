import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ButtonLink } from "../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../components/Card/Cards";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column, Col6, Row } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import { AdminNotifications, StateContribution } from "../components/Status/Status";
import { BlackTitle, BlackText } from "../components/Text/style";
import axios from 'axios';

export async function getServerSideProps() {
  const news_message = await (await axios.get('http://localhost:3333/settings/news_message')).data
  const access_quantity = await (await axios.get(`http://localhost:3333/access/quantity`)).data
  const material_quantity = await (await axios.get(`http://localhost:3333/hardware/quantity`)).data

  return {
    props: { news_message, access_quantity, material_quantity }
  }
}

export default function Dashboard(props: { news_message: string, access_quantity: number, material_quantity: number }) {
  const Contribution = false;

  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>

      <UserMenu page="index" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0">
          <Row mobileMarginBottom="20px" justify="space-between" mobileJustify="space-around" style={{ flex: "1", alignItems: "center" }}>
            <BlackTitle>Mon Espace AMNet</BlackTitle>
            {!Contribution && 
              <AdminNotifications 
                notifNumber={props.access_quantity+props.material_quantity} 
                unpaid={true} 
                access_quantity={props.access_quantity} 
                material_quantity={props.material_quantity} 
              />
            }
          </Row>

          <Row align="center" style={{ justifyContent: "center", width: "auto" }}>
            {Contribution && 
              <AdminNotifications 
              notifNumber={props.access_quantity+props.material_quantity} 
              access_quantity={props.access_quantity} 
              material_quantity={props.material_quantity} 
              />
            }
            <StateContribution status={Contribution ? "paid" : "unpaid"} />
          </Row>
        </ResponsiveRow>

        <StyledCard marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "3" }}>
          <TitleCard>Actualité AMNet</TitleCard>
          <BlackText style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: props.news_message || "" }} />
        </StyledCard>

        <ResponsiveRow marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "6" }}>
          <Col6 paddingRight="1%" mobileMarginBottom="30px">
            <StyledCard style={{ height: "100%" }}>
              <TitleCard>Objets connectés</TitleCard>
              <BlackText style={{ textAlign: "justify" }}>
                Faites vos demandes d'ajouts spécifiques
                (Objets connectés (IoT), consoles, etc...)
                depuis cette page
              </BlackText>

              <Row
                style={{
                  flex: "1",
                  justifyContent: "center",
                  alignItems: "end",
                  marginTop: "20px",
                }}
              >
                <ButtonLink style={{ position: "relative", zIndex: "3" }} href="/iot">Accéder</ButtonLink>
              </Row>
            </StyledCard>
          </Col6>

          <Col6 paddingLeft="1%">
            <StyledCard style={{ height: "100%" }}>
              <TitleCard>FAQ</TitleCard>
              <BlackText style={{ textAlign: "justify" }}>
                Vous vous posez une question sur notre association?
                Sur comment se connecter à notre réseau?
                Trouvez toutes vos réponses ici !
              </BlackText>

              <Row
                style={{
                  flex: "1",
                  justifyContent: "center",
                  alignItems: "end",
                  marginTop: "20px",
                }}
              >
                <ButtonLink style={{ position: "relative", zIndex: "3" }} href="/homepage/faq">Accéder</ButtonLink>
              </Row>
            </StyledCard>
          </Col6>
        </ResponsiveRow>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
