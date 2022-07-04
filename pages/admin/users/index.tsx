import React from "react";
import Head from "next/head";
import { GreenButton, OrangeButton, RedButton } from "../../../components/Button/Buttons";
import { ButtonsRow, DashboardContainer, ResponsiveRow, Row } from "../../../components/Container/style";
import { StyledCard } from "../../../components/Card/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { BlackTitle } from "../../../components/Text/style";
import { UsersTable } from "../../../components/Table/Admin/Users";
import { Footer } from "../../../components/Card/Cards";
import axios from "axios";
import parseCookies from "../../../components/Utils/cookie";
import { user } from "../../../components/Utils/types";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const config = {
      headers: { Authorization: `Bearer ${cookies.access_token}` }
    };
    const users = await axios.get(`http://localhost:3333/user`, config)

    if (res) {
      if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }

    return {
      props: { users: users.data }
    }
  }
  else {
    return {
      redirect: {
        destination: '/homepage',
        permanent: false,
      }
    }
  }
}

export default function Users(props: { users: user[] }) {
  const [Filter, Checkboxs, SelectedRows, Table] = UsersTable(props.users)

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="users" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0 30px">
          <Row mobileJustify="center" mobileMarginBottom="10px">
            <BlackTitle>Liste des adhérents</BlackTitle>
          </Row>
          <ResponsiveRow style={{ flex: "1", alignItems: "center", justifyContent: "end" }}>
            {Filter}
          </ResponsiveRow>
        </ResponsiveRow>

        {Checkboxs}

        <ButtonsRow
          marginBottom="2%"
          mobileMarginBottom="30px"
        >
          <GreenButton width="300px">Confirmer le paiement</GreenButton>
          <RedButton width="300px">Annuler le paiement</RedButton>
          <OrangeButton width="300px">Changer de statut Gadz</OrangeButton>
          <RedButton width="300px">Supprimer</RedButton>
        </ButtonsRow>

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          minHeight="0"
          mobileMinHeight="600px"
          style={{ flex: "1 0 0" }}
        >
          {Table()}
        </StyledCard>
        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
