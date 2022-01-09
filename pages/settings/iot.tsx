import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { DashboardContainer, Row } from "../../components/Container/style";
import { BlackTitle, StyledLink } from "../../components/Text/style";
import { 
  StyledGreenTr, 
  StyledTable, 
  StyledTd150, 
  StyledTd200, 
  StyledTd50, 
  StyledTd500, 
  StyledTr 
} from "../../components/Table/style";
import { SmallGreenButton, SmallRedButton } from "../../components/Button/Buttons";
import { StateRequest } from "../../components/State/States";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="iot" />

        <DashboardContainer>
          <Row style={{margin:"1% 0"}}>
            <BlackTitle>Demandes d'accès à AMNet IoT </BlackTitle>
          </Row>

          <StyledCard style={{ flex: "1", marginBottom:"2%" }}>
            <div style={{ height:"100%", width:"100%", overflowX:"auto" }}>
              <StyledTable>
                <tbody>
                  <StyledGreenTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd50>#</StyledTd50>
                    <StyledTd150>Utilisateur</StyledTd150>
                    <StyledTd200>Description</StyledTd200>
                    <StyledTd200>Adresse Mac</StyledTd200>
                    <StyledTd150>Preuve Image</StyledTd150>
                    <StyledTd150 style={{marginRight:"20px"}}><span style={{paddingLeft: "5px"}}>Etat</span></StyledTd150>
                    <StyledTd500><span style={{paddingLeft: "5px"}}>Action</span></StyledTd500>
                  </StyledGreenTr>
                  <StyledTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd50>1</StyledTd50>
                    <StyledTd150>
                      <StyledLink hovercolor="#67bc45">Gauthier</StyledLink>
                    </StyledTd150>
                    <StyledTd200>Test1</StyledTd200>
                    <StyledTd200>aa:bb:cc:dd:ee:fff</StyledTd200>
                    <StyledTd150><StyledLink hovercolor="#67bc45">Preuve Image</StyledLink></StyledTd150>
                    <StyledTd150 style={{marginRight:"20px"}}><StateRequest state={"inProcess"}/></StyledTd150>
                    <StyledTd500>
                      <form 
                        style={{ 
                          width:"100%", 
                          display:"flex", 
                          justifyContent: "space-between"
                        }}
                      >
                        <SmallGreenButton>Accorder</SmallGreenButton>
                        <SmallRedButton>Revoquer</SmallRedButton>
                        <SmallRedButton>Supprimer</SmallRedButton>
                      </form>
                    </StyledTd500>
                  </StyledTr>
                </tbody>
              </StyledTable>
            </div>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
