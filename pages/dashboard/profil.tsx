import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import {GreenButton} from "../../components/Button/Buttons";
import { 
  Row, 
  Col6, 
  Column
} from "../../components/Container/style";
import { 
  HelpSection, 
  TitleCard, 
  ContributionStatus,
  Menu
} from "../../components/Card/Cards"
import { 
  BlackText, 
  BlackTitle, 
  StyledCard 
} from "../../components/Card/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mon Profil &bull; AMNet</title>
      </Head>
      <DefaultBackground style={{padding: "1% 2%"}}>
        <div style={{width:"85px"}}>
          <Menu page="profil" />
        </div>

        <div 
          style={{ 
            alignItems: "center", 
            paddingLeft:"2%", width: "100%", 
            justifyContent:"space-around", 
            display: "flex", 
            flexDirection: "column"
          }}
        >
          <Row style={{flex: "1", margin:"1% 0", alignItems: "center"}}>
              <BlackTitle>Editer mon profil</BlackTitle>
          </Row>

          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </div>
      </DefaultBackground>
    </>
  );
}
