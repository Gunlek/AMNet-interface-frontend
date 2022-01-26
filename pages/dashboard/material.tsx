import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton, SmallRedButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Column,
  DashboardContainer,
  ResponsiveRow
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import UserMenu from "../../components/Menu/UserMenu";
import { BlackTitle, BlackText } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { MaterialUserTable } from "../../components/Table/User";

const Material = [
  {
      "material_id": 1,
      "material_user": 1,
      "material_description": "Ordinateur portable",
      "material_state": "declined",
  },
  {
      "material_id": 2,
      "material_user": 4,
      "material_description": "Ordinateur portable",
      "material_state": "pending",
  },
  {
      "material_id": 1,
      "material_user": 5,
      "material_description": "Ordinateur portable",
      "material_state": "active",
  }
]

export default function Dashboard() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <UserMenu page="material" />

        <DashboardContainer>
          <ResponsiveRow style={{margin: minWidth1000 ? "1% 0" : "4% 0", alignItems:"center"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Mes demandes de matériel</BlackTitle>
            </Column>
            
            <form style={{flex:"1", alignItems: "end", justifyContent: "center", marginTop: minWidth1000 ? "0" : "4%"}}>
              <GreenButton width="280px">Nouvelle demande</GreenButton>
            </form>
          </ResponsiveRow>

          <Column style={{ marginBottom:"2%"}}>
            <BlackText>
            <span style={{ color: "#096a09", fontWeight: "bold"}}>Cette page</span> vous permettra de faire une demande de matériel comme un cable ethernet, un écran ou tout autre materiel à notre disposition
            </BlackText>           
          </Column>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <div 
                style={{ 
                  height:"100%", 
                  width:"100%", 
                  overflowX:"auto" 
                }}
              >
              <MaterialUserTable RequestTable={Material} />
            </div>
          </StyledCard>

          <HelpSection color="#096A09"/>
          <Footer />
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
