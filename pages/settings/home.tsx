import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Col6, 
  Column,
  DashboardContainer
} from "../../components/Container/style";
import { 
  TitleCard,
} from "../../components/Card/Cards"
import { 
  StyledCard,
} from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { StateInvite } from "../../components/State/States";
import { BlackTitle, BlackText, GreenText } from "../../components/Text/style";
import { StyledInput, StyledSelect, StyledTextArea } from "../../components/Input/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="settings" />

        <DashboardContainer>
          <Row style={{margin:"1% 0"}}>
              <BlackTitle>Espace d'administration</BlackTitle>
          </Row>

          <Row style={{marginBottom:"2%"}}>
            <Col6 style={{marginRight:"1%"}}>
              <StyledCard style={{height: "100%"}}>
                <TitleCard>Etat des demandes</TitleCard>
                  <BlackText>
                    Nombre d'utilisateurs: 6 <br />
                    Nombre d'utilisateurs n'ayant pas payé la cotiz': 3 <br />
                    <br /><br />
                    Demandes d'accès internet: 1<br />
                    Demandes de matériel: 17
                  </BlackText>
              </StyledCard>
            </Col6>

            <Col6 style={{marginLeft:"1%"}}>
              <StyledCard>
                  <TitleCard>Paramètres</TitleCard>
                  <form method="post" style={{marginTop:"20px", height:"100%"}}>
                    <Row style={{marginBottom:"20px"}}>
                      <Col6>
                        <GreenText style={{marginBottom:"5px"}}>Compte Invité</GreenText>
                      </Col6>
                      <Col6 style={{alignItems: "end"}}>
                        <StateInvite state={true} />
                      </Col6>  
                    </Row>

                    <div style={{marginBottom:"20px"}}>
                        <GreenText style={{marginBottom:"5px"}}>Montant de la cotisation</GreenText>
                        <StyledInput type="text" inputmode="numeric"/>
                    </div>

                    <div style={{marginBottom:"20px"}}>
                        <GreenText style={{marginBottom:"5px"}}>Promotion active</GreenText>
                        <StyledInput type="text" inputmode="numeric" />
                    </div>

                    <Row style={{justifyContent: "center"}}>
                      <GreenButton>Mettre à jour</GreenButton>
                    </Row>
                  </form>
              </StyledCard>
            </Col6>
          </Row>

          <Row style={{ marginBottom:"2%"}}>
            
              <StyledCard style={{height:"100%"}}>
                <TitleCard>Message d'actualité</TitleCard>

                <form method="post" style={{marginTop:"20px", height:"100%"}}>
                  <StyledTextArea/>
                  
                  <Row style={{marginTop:"20px", justifyContent: "center"}}>
                      <GreenButton>Mettre à jour</GreenButton>
                  </Row>
                </form>
              </StyledCard>
            </Row>

            <Row style={{marginBottom:"2%"}}>
              <StyledCard>
                <TitleCard>Système de mail</TitleCard>
              
                <form method="post" style={{height:"100%"}}>
                <div style={{marginTop:"20px"}}>
                    <GreenText style={{marginBottom:"5px"}}>Gadzarts</GreenText>
                    <StyledSelect type="text" >
                      <option value="yes" selected>Oui</option>
                      <option value="no">Non</option>
                      <option value="" >Peu importe</option>
                    </StyledSelect>
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <GreenText style={{marginBottom:"5px"}}>Cotisation payée</GreenText>
                    <StyledSelect>
                      <option value="yes" selected>Oui</option>
                      <option value="no">Non</option>
                      <option value="" >Peu importe</option>
                    </StyledSelect>
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <GreenText style={{marginBottom:"5px"}}>Prom's</GreenText>
                    <Row>
                      <input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>219</BlackText>
                      <input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>220</BlackText>
                      <input type="checkbox" /> <BlackText style={{marginLeft:"10px", marginRight:"30px"}}>221</BlackText>
                      <input type="checkbox" /> <BlackText style={{marginLeft:"10px"}}>Autres</BlackText>
                    </Row>
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <GreenText style={{marginBottom:"5px"}}>Titre du Mail</GreenText>
                    <StyledInput type="text" />
                  </div>
                  
                  <div style={{marginTop:"20px"}}>
                    <GreenText style={{ marginBottom:"5px"}}>Corps du Mail</GreenText>
                    <StyledTextArea />
                  </div>
                  
                  <Row style={{ marginTop:"15px", justifyContent: "center"}}>
                    <GreenButton>Envoyer</GreenButton>
                  </Row>
                </form>
              </StyledCard>
          </Row>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
