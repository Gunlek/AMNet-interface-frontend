import React from "react";
import Head from "next/head";
import { GreenButton } from "../../components/Button/Buttons";
import {
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import UserMenu from "../../components/Menu/UserMenu";
import { BlackTitle, BlackText, BlackP } from "../../components/Text/style";
import { MaterialUserTable } from "../../components/Table/User";
import { ModalLogic, MaterialModal } from "../../components/Card/Modals";

const material = [
  {
    "material_id": 1,
    "material_user": 1,
    "material_description": "Ordinateur portable",
    "material_state": "declined",
    "material_reason": "Je veux un pc pour faire de la CAO"
  },
  {
    "material_id": 2,
    "material_user": 4,
    "material_description": "Ordinateur portable",
    "material_state": "pending",
    "material_reason": "Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO"
  },
  {
    "material_id": 1,
    "material_user": 5,
    "material_description": "Ordinateur portable",
    "material_state": "active",
    "material_reason": "Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO Je veux un pc pour faire de la CAO"
  }
]

export default function UserMaterial() {
  const { reveal, toggle } = ModalLogic();

  return (
    <>
      <Head>
        <title>Mes demandes &bull; AMNet</title>
      </Head>
      <UserMenu page="material" />

      <DashboardContainer>
        <ResponsiveRow  margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
          <Column mobileMargin="30px" style={{ justifyContent: "center" }}>
            <BlackTitle>Mes demandes de matériel</BlackTitle>
          </Column>

          <div
            style={{
              flex: "1",
              alignItems: "end",
              justifyContent: "center"
            }}
          >
            <GreenButton width="280px" onClick={toggle}>Nouvelle demande</GreenButton>
            <MaterialModal reveal={reveal} hide={toggle} />
          </div>
        </ResponsiveRow>

        <Column mobileMarginBottom="30px" marginBottom="2%">
          <BlackP>
            Pour compléter votre installation, vous pouvez avoir besoin d'un écran, d'un cable ethernet ou de matériel informatique.
            <br /><span style={{ color: "#096a09", fontWeight: "bold" }}>Cette page</span> page est là pour vous permettre de formuler vos besoins dans la limite de nos stocks. Nous reviendrons vers vous dès que votre demande aura été étudiée !
          </BlackP>
        </Column>

        <StyledCard mobileMarginBottom="30px" marginBottom="2%" style={{ flex: "1" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              overflowX: "auto"
            }}
          >
            <MaterialUserTable requests={material} />
          </div>
        </StyledCard>

        <HelpSection color="#096A09" />
        <Footer />
      </DashboardContainer>
    </>
  );
}
