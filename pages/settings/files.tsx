import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { 
  Row, 
  Col6, 
  Column,
  DashboardContainer,
  Col8,
  Col4
} from "../../components/Container/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";
import { BlackText, BlackTitle, GreenText, StyledLink } from "../../components/Text/style";
import { GreenButton } from "../../components/Button/Buttons";
import { TitleCard } from "../../components/Card/Cards";
import { StyledInput } from "../../components/Input/style";
import { TeamEditor } from "../../components/TeamEditor/TeamEditor";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="file" />

        <DashboardContainer>
          <Row style={{margin:"1% 0"}}>
              <BlackTitle>Edition</BlackTitle>
          </Row>

          <StyledCard style={{marginBottom:"2%"}}>
          <TitleCard>Documents administratifs</TitleCard>
            <form method="post" style={{marginTop:"20px", height:"100%"}}>
              <div style={{marginBottom:"20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Réglement Intérieur</GreenText>
                  <Row>
                    <div style={{width:"400px"}}>
                      <StyledLink style={{fontSize: "1.2em"}} color= "black" hovercolor="#67bc45" target="_blank" href="/static/docs/Reglement_Interieur_AMNet.pdf">Voir le Réglement Intérieur actuel</StyledLink>
                      </div>
                    <input type="file"/>
                  </Row>
                  
              </div>

              <div style={{marginBottom:"20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Status</GreenText>
                  <Row>
                    <div style={{width:"400px"}}>
                    <StyledLink style={{fontSize: "1.2em"}} color= "black" hovercolor="#67bc45" target="_blank" href="/static/docs/Statuts_AMNet.pdf">Voir les statuts actuels</StyledLink>
                    </div>
                  <input type="file"/>
                  </Row>
              </div>

              <Row style={{justifyContent: "center"}}>
                <GreenButton>Mettre à jour</GreenButton>
              </Row>
            </form>
          </StyledCard>
          
          <StyledCard style={{marginBottom:"2%"}}>
          <TitleCard>Page d'accueil</TitleCard>
            <form method="post" style={{marginTop:"20px", height:"100%"}}>
              <div style={{marginBottom:"20px"}}>
                  <GreenText style={{marginBottom:"5px"}}>Photo de l'AMNet</GreenText>
                  <Row>
                    <div style={{width:"400px"}}>
                      <StyledLink style={{fontSize: "1.2em"}} color= "black" hovercolor="#67bc45" target="_blank" href="/static/images/team.png">Voir la photo actuelle</StyledLink>
                    </div>
                    <input type="file"/>
                  </Row>
              </div>

              <Row>
                <Col8>
                  <TeamEditor />
                </Col8>
                <Col4>
                  <BlackText style={{paddingLeft: "20px" }}>
                    Pour faire correspondre les bucques avec les PGs sur la photo de la page d'accueil, il faut les mettre dans l'ordre suivant : de haut en bas les bucques et de gauche à droite sur la photo
                  </BlackText>
                </Col4>
              </Row>

              {/* <Row style={{marginBottom:"20px"}}>
                <Col6>
                  <GreenText style={{marginBottom:"5px"}}>Bucques</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col6 style={{justifyContent:"center", marginLeft:"20px"}}>
                  <BlackText>
                    La forme du texte doit être : "<span style={{color: "#096a09", fontWeight: "bold"}}>Trobotyk'ss(ML)°;Sdoosh;Nem'O</span>" sans les guillemets mais avec les ;
                  </BlackText>
                </Col6>
              </Row>
  
              <Row style={{marginBottom:"20px"}}>
                <Col6>
                  <GreenText style={{marginBottom:"5px"}}>Num's</GreenText>
                  <StyledInput type="text"/>
                </Col6>
                <Col6 style={{justifyContent:"center", marginLeft:"20px"}}>
                  <BlackText>
                    La forme du texte doit être : "<span style={{color: "#096a09", fontWeight: "bold"}}>47Li220;96Li220;74Li220</span>" sans les guillemets mais avec les ; et les num's dans le même ordre que les Bucques
                  </BlackText>
                </Col6>
              </Row> */}

              <Row style={{marginTop:"20px", justifyContent: "center"}}>
                <GreenButton>Mettre à jour</GreenButton>
              </Row>
            </form>
          </StyledCard>
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
