import React, { useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { DashboardContainer, Row } from "../../components/Container/style";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import IoTAdminTable from "../../components/Table/Admin/IoT";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import axios from "axios";

export async function getServerSideProps() {
  const access = await (await axios.get(`http://localhost:3333/access`)).data

  return {
      props: { access }
  }
}

export default function AdminIoT(props: { access }) {
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
      <AdminMenu page="iot" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Demandes d'accès à AMNet IoT</BlackTitle>
        </Row>

        <RequestTab status={Tab.new} TabChange={handleTabChange} />

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          style={{ flex: "1 0 0", minHeight: minWidth1000 ? "0" : "300px" }}
        >
          <IoTAdminTable status={Tab} requests={props.access} />
        </StyledCard>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
