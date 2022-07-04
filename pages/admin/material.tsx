import React, { useState } from "react";
import Head from "next/head";
import { Row, DashboardContainer } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import MaterialAdminTable from "../../components/Table/Admin/Material";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import parseCookies from "../../components/Utils/cookie";
import jwt_decode from "jwt-decode";
import { user } from "../../components/Utils/types";
import axios from "axios";

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req)

  if (cookies.access_token) {
    const userId = await jwt_decode(cookies.access_token)['id'];
    const user = await (await axios.get(`http://localhost:3333/user/${userId}`)).data as user;

    if (user.user_rank === "admin") {
      if (res) {
        if (Object.keys(cookies).length === 0 && cookies.constructor === Object) {
          res.writeHead(301, { Location: "/" })
          res.end()
        }
      }

      const hardware = await (await axios.get(`http://localhost:3333/hardware`)).data;

      return {
        props: { hardware }
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

export default function AdminMaterial(props: { hardware }) {
  const [Tab, setTab] = useState({ old: null, new: "pending" });
  const minWidth1000 = useMediaQuery('(min-width:1000px)');

  const handleTabChange = (elmt) => {
    let newTab = { ...Tab };
    newTab.old = newTab.new;
    newTab.new = elmt.currentTarget.id;
    setTab(newTab);
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="material" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Demandes de matériel </BlackTitle>
        </Row>

        <RequestTab status={Tab.new} TabChange={handleTabChange} />

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          style={{ flex: "1 0 0", minHeight: minWidth1000 ? "0" : "300px" }}
        >
          <MaterialAdminTable status={Tab} requests={props.hardware} />
        </StyledCard>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
