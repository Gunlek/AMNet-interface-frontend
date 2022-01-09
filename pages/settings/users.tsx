import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton, OrangeButton, RedButton, SmallGreenButton, SmallOrangeButton, SmallRedButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Col6, 
  Column,
  DashboardContainer,
  Col4
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { BlackText, BlackTitle } from "../../components/Text/style";
import { StyledTable, StyledGreenTr, StyledTd, StyledTr } from "../../components/Table/style";
import { StyledInput } from "../../components/Input/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="users" />

        <DashboardContainer>
          <Row style={{ margin:"1% 0" }}>
            <div>
              <BlackTitle>Liste des adhérents</BlackTitle>
            </div>
            <Row style={{flex:"1", alignItems:"center", justifyContent: "end"}}>
              <BlackText>Rechercher</BlackText>
              <StyledInput style={{marginLeft:"20px", width:"300px"}} type="text" />
            </Row>
          </Row>

          <Row style={{ marginBottom:"2%" }}>
            <Col4 style={{ alignItems:"start" }}>
              <GreenButton>Confirmer tous les paiements</GreenButton>
            </Col4>
            <Col4 style={{ alignItems:"center" }}>
              <RedButton>Annuler tous les paiements</RedButton>
            </Col4>
            <Col4 style={{ alignItems:"end" }}>
              <OrangeButton>Passer tous les washs en gadz</OrangeButton>
            </Col4>
          </Row>

          <StyledCard style={{ flex: "1",  marginBottom:"2%" }}>
            <div style={{ height:"100%", width:"100%", overflowX:"auto" }}>
              <StyledTable>
                  <StyledGreenTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd style={{minWidth:"50px"}} flex= "1">#</StyledTd>
                    <StyledTd style={{minWidth:"200px"}} flex= "7">Nom d'utilisateur</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Prénom</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Nom</StyledTd>
                    <StyledTd style={{minWidth:"350px"}} flex= "7">Email</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Bucque</StyledTd>
                    <StyledTd style={{minWidth:"75px"}} flex= "2">Fam's</StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">Tabagn's</StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">Prom's</StyledTd>
                    <StyledTd style={{minWidth:"125px"}} flex= "2">Cotisation</StyledTd>
                    <StyledTd style={{minWidth:"50px", marginRight:"30px"}} flex= "2">Gadz</StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">Rang</StyledTd>
                    <StyledTd style={{minWidth: "850px"}}><span style={{paddingLeft: "5px"}}>Action</span></StyledTd>
                  </StyledGreenTr>
                  <StyledTr style={{padding:"10px 0 10px 30px"}}>
                    <StyledTd style={{minWidth:"50px"}} flex= "1">1</StyledTd>
                    <StyledTd style={{minWidth:"200px"}} flex= "7">Gauthier</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Gauthier</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Pailhas</StyledTd>
                    <StyledTd style={{minWidth:"350px"}} flex= "7">gauthier.pailhas@gmail.com</StyledTd>
                    <StyledTd style={{minWidth:"150px"}} flex= "7">Mac Nhat's</StyledTd>
                    <StyledTd style={{minWidth:"75px"}} flex= "2">47-102</StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">Li</StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">219</StyledTd>
                    <StyledTd style={{minWidth:"125px", alignItems:"center", justifyContent:"center"}} flex= "2"><img style={{height: "20px"}} src="/static/icons/succes.svg"/> </StyledTd>
                    <StyledTd style={{minWidth:"50px", marginRight:"30px", alignItems:"center", justifyContent:"center"}} flex= "2"><img style={{height: "20px"}} src="/static/icons/succes.svg"/></StyledTd>
                    <StyledTd style={{minWidth:"100px"}} flex= "2">Admin</StyledTd>
                    <StyledTd style={{display:"flex", justifyContent:"space-between", minWidth: "850px"}}>
                 
                      <SmallGreenButton width="250px">Confirmer le paiement</SmallGreenButton>
                      <SmallRedButton>Supprimer</SmallRedButton>
                      <SmallRedButton>Rétrograder</SmallRedButton>
                      <SmallOrangeButton width="250px" >Passer en Gadz</SmallOrangeButton>
                    </StyledTd>
                  </StyledTr>
                </StyledTable>
              </div>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
