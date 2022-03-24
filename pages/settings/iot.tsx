import React, { useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { DashboardContainer, Row } from "../../components/Container/style";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import IoTAdminTable from "../../components/Table/Admin/Iot";

const Iot = [
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 1,
    "acces_state": "pending",
    "user_pay_status": 1,
    "user_name": "Harwins",
  },
  {
    "acces_id": 2,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 5,
    "acces_state": "active",
    "user_pay_status": 0,
    "user_name": "Argilla",
  },
  {
    "acces_id": 3,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 6,
    "acces_state": "declined",
    "user_pay_status": 1,
    "user_name": "Greg"
  },
  {
    "acces_id": 1,
    "access_description": "Chromecast",
    "access_mac": "AABBCCDDEEFF",
    "access_proof": "photoProof-1621263399914.jpg",
    "acces_user": 1,
    "acces_state": "pending",
    "user_pay_status": 1,
    "user_name": "Greg",
  }
]

export default function AdminIoT() {
  const [Tab, setTab] = useState({ old: null, new: "pending" });

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
          <BlackTitle>Demandes d'accès à AMNet IoT </BlackTitle>
        </Row>

        <RequestTab status={Tab.new} TabChange={handleTabChange} />

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          style={{ flex: "1 0 0" }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <IoTAdminTable status={Tab} requests={Iot} />
          </div>
        </StyledCard>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
