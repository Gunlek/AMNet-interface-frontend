import React, { useState } from "react";
import Head from "next/head";
import { ButtonLink } from "../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../components/Card/Cards";
import { StyledCard } from "../components/Card/style";
import { DashboardContainer, ResponsiveRow, Column, Col6, Row } from "../components/Container/style";
import UserMenu from "../components/Menu/UserMenu";
import { AdminNotifications, StateContribution } from "../components/Status/Status";
import { BlackTitle, BlackText, NewsMessage } from "../components/Text/style";
import axios from 'axios';
import { user } from "../components/Utils/types";
import Modal from "../components/Card/Modals/Modal";
import getToken from "../components/Utils/auth-token";
import getConfig from "../components/Utils/req-config";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)
    const user = await (await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config)).data;

    const [
      news_message,
      access_quantity,
      material_quantity,
      lydia_cotiz
    ] = await Promise.all([
      axios.get('http://localhost:3333/settings/news_message'),
      axios.get(`http://localhost:3333/access/quantity`),
      axios.get(`http://localhost:3333/hardware/quantity`),
      axios.get(`http://localhost:3333/settings/lydia_cotiz`)
    ])

    if (user.user_rank === 'admin') {
      return {
        props: {
          news_message: news_message.data,
          access_quantity: access_quantity.data,
          material_quantity: material_quantity.data,
          access_token: access_token,
          lydia_cotiz: lydia_cotiz.data,
          user: user
        }
      }
    }

    return {
      props: {
        news_message: news_message.data,
        lydia_cotiz: lydia_cotiz.data,
        user: user
      }
    }

  }

  return {
    redirect: {
      destination: '/homepage',
      permanent: false,
    },
  }
}

export default function Dashboard(
  props: {
    news_message: string,
    access_quantity: number,
    material_quantity: number,
    access_token: string,
    user: user,
    lydia_cotiz: Number
  }
) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>

      <Modal show={show} style={{ width: "450px", textAlign: "center" }}>
        Vous devez avoir payé votre cotisation <br />Pour accéder à cette page
      </Modal>

      <UserMenu
        page="index"
        user={{
          is_gadz: props.user.user_is_gadz,
          rank: props.user.user_rank,
          pay_status: props.user.user_pay_status
        }}
      />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0">
          <Row mobileMarginBottom="20px" justify="space-between" mobileJustify="space-around" style={{ flex: "1", alignItems: "center" }}>
            <BlackTitle>Mon Espace AMNet</BlackTitle>
            {!props.user.user_pay_status && props.user.user_rank === "admin" ?
              <AdminNotifications
                notifNumber={props.access_quantity + props.material_quantity}
                unpaid={true}
                access_quantity={props.access_quantity}
                material_quantity={props.material_quantity}
              /> : undefined
            }
          </Row>

          <Row align="center" style={{ justifyContent: "center", width: "auto" }}>
            {props.user.user_pay_status && props.user.user_rank === "admin" ?
              <AdminNotifications
                notifNumber={props.access_quantity + props.material_quantity}
                access_quantity={props.access_quantity}
                material_quantity={props.material_quantity}
              /> : undefined
            }
            <StateContribution status={props.user.user_pay_status ? "paid" : "unpaid"} lydia_cotiz={props.lydia_cotiz} />
          </Row>
        </ResponsiveRow>

        <StyledCard marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "3" }}>
          <TitleCard>Actualité AMNet</TitleCard>
          <NewsMessage style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: props.news_message || "" }} />
        </StyledCard>

        <ResponsiveRow marginBottom="2%" mobileMarginBottom="30px" style={{ flex: "6" }}>
          <Col6 paddingRight="1%" mobileMarginBottom="30px">
            <StyledCard style={{ height: "100%" }}>
              <TitleCard>Objets connectés</TitleCard>
              <BlackText style={{ textAlign: "justify" }}>
                Faites vos demandes d&apos;ajouts spécifiques
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
                <ButtonLink
                  onClick={!props.user.user_pay_status ? () => setShow(!show) : undefined}
                  style={{
                    position: "relative",
                    zIndex: "3"
                  }}
                  href="/iot"
                >
                  Accéder
                </ButtonLink>
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
