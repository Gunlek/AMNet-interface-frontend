import React, { useState } from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { SmallGreenButton, SmallRedButton} from "../../components/Button/Buttons";
import { 
  Row, 
  DashboardContainer,
  Column,
  Col6
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { StateRequest } from "../../components/Status/Status";
import { 
  StyledTable, 
  StyledGreenTr, 
  StyledTd50, 
  StyledTd150, 
  StyledTd200, 
  StyledTd500, 
  StyledTr, 
  StyledTd350
} from "../../components/Table/style";
import { BlackText, BlackTitle, StyledLink } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";
import { RequestTab } from "../../components/Card/RequestTab";

export default function Dashboard() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [Tab, setTab] = useState("inProcess");

  const handleTabChange = (elmt) => {
    setTab(elmt.currentTarget.id);
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="material" />

        <DashboardContainer>
          <Row style={{margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center"}}>
            <BlackTitle>Demandes de matériel </BlackTitle>
          </Row>
          
          <RequestTab status={Tab} TabChange={handleTabChange}/>

          <StyledCard style={{ flex: "1", marginBottom: minWidth1000 ? "2%" : "4%" }}>
            <div style={{ height:"100%", width:"100%", overflowX:"auto" }}>
              <StyledTable>
                <tbody>
                  <StyledGreenTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd50>#</StyledTd50>
                    <StyledTd150>Utilisateur</StyledTd150>
                    <StyledTd200>Description</StyledTd200>
                    <StyledTd150 style={{marginRight:"20px"}}><span style={{paddingLeft: "5px"}}>Etat</span></StyledTd150>
                    <StyledTd500><span style={{paddingLeft: "5px"}}>Action</span></StyledTd500>
                  </StyledGreenTr>
                  <StyledTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd50>1</StyledTd50>
                    <StyledTd150><StyledLink hovercolor="#67bc45" style={{fontSize:"1em"}}>Gauthier</StyledLink></StyledTd150>
                    <StyledTd200>Test1</StyledTd200>
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
