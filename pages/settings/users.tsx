import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton, OrangeButton, RedButton, SmallGreenButton, SmallOrangeButton, SmallRedButton} from "../../components/Button/Buttons";
import { 
  Row,
  DashboardContainer,
  Col4,
  ResponsiveRow,
  CheckboxRow
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { BlackText, BlackTitle, StyledLink } from "../../components/Text/style";
import { 
  StyledTable, 
  StyledGreenTr, 
  StyledTr, 
  StyledTd100, 
  StyledTd200, 
  StyledTd350, 
  StyledTd50, 
  StyledTd850, 
  StyledTd250 
} from "../../components/Table/style";
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
          <ResponsiveRow style={{ margin:"1% 0" }}>
            <div>
              <BlackTitle>Liste des adhérents</BlackTitle>
            </div>
            <Row style={{flex:"1", alignItems:"center", justifyContent: "end"}}>
              <BlackText>Rechercher</BlackText>
              <StyledInput style={{marginLeft:"20px", width:"300px"}} type="text" />
            </Row>
          </ResponsiveRow>

          <form>
            <CheckboxRow style={{marginBottom:"2%", alignItems:"center"}}>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Utilisateur</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Prénom</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Nom</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Email</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Bucque</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Fam's</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Tagan's</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Prom's</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Cotisation</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Gadz</BlackText></Row>
              <Row><input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>Rang</BlackText></Row>
            </CheckboxRow>

            <ResponsiveRow style={{ marginBottom:"2%", justifyContent: "space-between" }}>
              <GreenButton>Confirmer tous les paiements</GreenButton>
              <RedButton>Annuler tous les paiements</RedButton>
              <OrangeButton>Passer tous les washs en gadz</OrangeButton>
            </ResponsiveRow>

          </form>
          <StyledCard style={{ flex: "1",  marginBottom:"2%" }}>
            <div 
              style={{ 
                height:"100%", 
                width:"100%", 
                overflowX:"auto" 
              }}
            >
              <StyledTable>
                  <tbody>
                      <StyledGreenTr style={{padding:"10px 0 10px 30px"}}>
                      <StyledTd50>#</StyledTd50>
                      <StyledTd250>Utilisateur</StyledTd250>
                      <StyledTd200>Prénom</StyledTd200>
                      <StyledTd200>Nom</StyledTd200>
                      <StyledTd350>Email</StyledTd350>
                      <StyledTd200>Bucque</StyledTd200>
                      <StyledTd100>Fam's</StyledTd100>
                      <StyledTd100>Tabagn's</StyledTd100>
                      <StyledTd100>Prom's</StyledTd100>
                      <StyledTd100 style={{marginRight:"20px"}}>Cotisation</StyledTd100>
                      <StyledTd50 style={{marginRight:"20px"}}>Gadz</StyledTd50>
                      <StyledTd100>Rang</StyledTd100>
                      <StyledTd850><span style={{paddingLeft:"5px"}} >Action</span></StyledTd850>
                    </StyledGreenTr>
                    
                    <StyledTr style={{padding:"10px 0 10px 30px"}}>
                      <StyledTd50>1</StyledTd50>
                      <StyledTd250><StyledLink hovercolor="#67bc45">Gauthier</StyledLink></StyledTd250>
                      <StyledTd200>Gauthier</StyledTd200>
                      <StyledTd200>Pailhas</StyledTd200>
                      <StyledTd350>gauthier.pailhas@gmail.com</StyledTd350>
                      <StyledTd200>Mac Naht's</StyledTd200>
                      <StyledTd100>47-102</StyledTd100>
                      <StyledTd100>Li</StyledTd100>
                      <StyledTd100>219</StyledTd100>
                      <StyledTd100 style={{justifyContent:"center", marginRight:"20px"}}><img style={{ height: "20px"}} src="/static/icons/succes.svg"/> </StyledTd100>
                      <StyledTd50 style={{justifyContent:"center", marginRight:"20px"}}><img style={{height: "20px"}} src="/static/icons/succes.svg"/> </StyledTd50>
                      <StyledTd100>Admin</StyledTd100>
                      <StyledTd850>
                        <form 
                          style={{ 
                            width:"100%", 
                            display:"flex", 
                            justifyContent: "space-between"
                          }}
                        >
                          <SmallGreenButton width="250px">Confirmer le paiement</SmallGreenButton>
                          <SmallOrangeButton width="250px" >Passer en Gadz</SmallOrangeButton>
                          <SmallRedButton>Supprimer</SmallRedButton>
                          <SmallRedButton>Rétrograder</SmallRedButton>
                        </form>
                      </StyledTd850>
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
