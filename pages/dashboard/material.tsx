import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton, SmallRedButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Column,
  StyledDashboard
} from "../../components/Container/style";
import { HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { StyledTable, StyledGreenTr, StyledTd, StyledTr } from "../../components/Table/style";
import { BlackTitle, BlackText } from "../../components/Text/style";
import { StateRequest } from "../../components/State/States";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="material" />

        <StyledDashboard>
          <Row style={{margin:"1% 0"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Mes demandes de matériel</BlackTitle>
            </Column>
            
            <Column style={{flex:"1", alignItems: "end", justifyContent: "center"}}>
              <GreenButton width="280px">+ Nouvelle demande</GreenButton>
            </Column>
          </Row>

          <Column style={{ marginBottom:"2%"}}>
            <BlackText>
            <span style={{ color: "#096a09", fontWeight: "bold"}}>Cette page</span> vous permettra de faire une demande de matériel comme un cable ethernet, un écran ou tout autre materiel à notre disposition
            </BlackText>           
          </Column>

          <StyledCard style={{ flex: "1", marginBottom:"2%" }}>
            <StyledTable>
              <StyledGreenTr>
                <StyledTd flex= "1">#</StyledTd>
                <StyledTd flex= "7">Description</StyledTd>
                <StyledTd style={{minWidth: "150px"}}><span style={{paddingLeft: "5px"}}>Etat</span></StyledTd>
                <StyledTd style={{minWidth: "150px"}}><span style={{paddingLeft: "5px"}}>Action</span></StyledTd>
              </StyledGreenTr>
              <StyledTr>
                <StyledTd flex= "1">1</StyledTd>
                <StyledTd flex= "7">Test1</StyledTd>
                <StyledTd ><StateRequest state="accepted"/> </StyledTd>
                <StyledTd ><SmallRedButton>Supprimer</SmallRedButton></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd flex= "1">2</StyledTd>
                <StyledTd flex= "7">Test2</StyledTd>
                <StyledTd ><StateRequest state="denied"/> </StyledTd>
                <StyledTd ><SmallRedButton>Supprimer</SmallRedButton></StyledTd>
              </StyledTr>
              <StyledTr>
                <StyledTd flex= "1">3</StyledTd>
                <StyledTd flex= "7">Test3</StyledTd>
                <StyledTd ><StateRequest state="inProcess"/> </StyledTd>
                <StyledTd ><SmallRedButton>Supprimer</SmallRedButton></StyledTd>
              </StyledTr>
            </StyledTable>
          </StyledCard>

          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </StyledDashboard>
      </DefaultBackground>
    </>
  );
}
