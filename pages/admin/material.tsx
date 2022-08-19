import React, { useRef, useState } from "react";
import Head from "next/head";
import { Row, DashboardContainer, StyledMain } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import MaterialAdminTable from "../../components/Table/Admin/Material";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import axios from "axios";
import useTransition from "../../components/Table/Admin/TableTransition";
import getConfig from "../../components/Utils/req-config";
import getToken from "../../components/Utils/auth-token";
import usePageTransition from "../../components/Utils/usePageTransition";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config)

    if (user.data.user_rank === "admin") {
      const hardware = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/hardware`, config)

      return {
        props: { hardware: hardware.data }
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

export default function AdminMaterial(props: { hardware }) {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const mobileContainerRef = useRef(null)
  const { Display, Opacity, Tab, handleTabChange } = useTransition(mobileContainerRef)
  const [hardware, setHardware] = useState(props.hardware)
  const { roadTo, pageTransition, roadToHome } = usePageTransition('user');

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>

      <StyledMain variants={pageTransition}>
        <AdminMenu page="material" setTranstion={roadTo} setHomeTransition={roadToHome} />

        <DashboardContainer exit={pageTransition.exit ? "false" : undefined}>
          <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
            <BlackTitle>Demandes de matériel </BlackTitle>
          </Row>

          <RequestTab status={Tab.new} TabChange={handleTabChange} />

          <StyledCard
            marginBottom="2%"
            mobileMarginBottom="10px"
            style={{ flex: "1 0 0", minHeight: minWidth1000 ? "0" : "300px" }}
          >
            <MaterialAdminTable
              status={Tab}
              requests={hardware}
              display={Display}
              opacity={Opacity}
              mobileRef={mobileContainerRef}
              setTab={setHardware}
            />
          </StyledCard>

          <Footer marginTop="0" />
        </DashboardContainer>
      </StyledMain>
    </>
  );
}
