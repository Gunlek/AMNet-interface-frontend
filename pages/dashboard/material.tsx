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
import { HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { 
  StyledTable, 
  StyledGreenTr, 
  StyledTr, 
  StyledTd150, 
  StyledTd200, 
  StyledTd50 
} from "../../components/Table/style";
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

        <DashboardContainer>
          <ResponsiveRow style={{margin:"1% 0"}}>
            <Column style={{justifyContent: "center"}}>
              <BlackTitle>Mes demandes de matériel</BlackTitle>
            </Column>
            
            <form style={{flex:"1", alignItems: "end", justifyContent: "center"}}>
              <GreenButton width="280px">Nouvelle demande</GreenButton>
            </form>
          </ResponsiveRow>

          <Column style={{ marginBottom:"2%"}}>
            <BlackText>
            <span style={{ color: "#096a09", fontWeight: "bold"}}>Cette page</span> vous permettra de faire une demande de matériel comme un cable ethernet, un écran ou tout autre materiel à notre disposition
            </BlackText>           
          </Column>

          <StyledCard style={{ flex: "1", marginBottom:"2%" }}>
            <div 
                style={{ 
                  height:"100%", 
                  width:"100%", 
                  overflowX:"auto" 
                }}
              >
              <StyledTable>
                <tbody>
                  <StyledGreenTr>
                    <StyledTd50>#</StyledTd50>
                    <StyledTd200>Description</StyledTd200>
                    <StyledTd150><span style={{paddingLeft: "5px"}}>Etat</span></StyledTd150>
                    <StyledTd150><span style={{paddingLeft: "5px"}}>Action</span></StyledTd150>
                  </StyledGreenTr>
                  <StyledTr>
                    <StyledTd50>1</StyledTd50>
                    <StyledTd200>Test1</StyledTd200>
                    <StyledTd150><StateRequest state="accepted"/> </StyledTd150>
                    <StyledTd150>
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd150>
                  </StyledTr>
                  <StyledTr>
                    <StyledTd50>2</StyledTd50>
                    <StyledTd200>Test2</StyledTd200>
                    <StyledTd150><StateRequest state="denied"/> </StyledTd150>
                    <StyledTd150>
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd150>
                  </StyledTr>
                  <StyledTr>
                    <StyledTd50>3</StyledTd50>
                    <StyledTd200>Test3</StyledTd200>
                    <StyledTd150><StateRequest state="inProcess"/> </StyledTd150>
                    <StyledTd150>
                      <form>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd150>
                  </StyledTr>
                </tbody>
              </StyledTable>
            </div>
          </StyledCard>

          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
