import React, { useState } from "react";
import Head from "next/head";
import { Row, DashboardContainer } from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import AdminMenu from "../../components/Menu/AdminMenu";
import { BlackTitle } from "../../components/Text/style";
import RequestTab from "../../components/Card/RequestTab";
import { Footer } from "../../components/Card/Cards";
import MaterialAdminTable from "../../components/Table/Admin/Material";

const material = [
  {
    "material_id": 1,
    "material_user": 1,
    "material_description": "Ordinateur portable",
    "material_state": "declined",
    "user_pay_status": 1,
    "user_name": "Greg",
    "material_reason": "Je veux"
  },
  {
    "material_id": 2,
    "material_user": 4,
    "material_description": "Ordinateur portable",
    "material_state": "pending",
    "user_pay_status": 1,
    "user_name": "Greg",
    "material_reason": "Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO"
  },
  {
    "material_id": 1,
    "material_user": 5,
    "material_description": "Ordinateur portable",
    "material_state": "active",
    "user_pay_status": 1,
    "user_name": "Greg",
    "material_reason": "Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO"
  }
]

export default function AdminMaterial() {
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
      <AdminMenu page="material" />

      <DashboardContainer>
        <Row margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
          <BlackTitle>Demandes de matériel </BlackTitle>
        </Row>

        <RequestTab status={Tab.new} TabChange={handleTabChange} />

        <StyledCard
          marginBottom="2%" 
          mobileMarginBottom="10px" 
          style={{ flex: "1 0 0", minHeight: "0" }}
        >
          <div 
            style={{ 
              height: "100%", 
              width: "100%", 
              overflow: "auto" 
            }}
          >
            <MaterialAdminTable status={Tab} requests={material} />
          </div>
        </StyledCard>

        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
