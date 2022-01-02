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
  AdminMenu
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
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground style={{padding: "1% 2%"}}>
        <div style={{width:"85px"}}>
          <AdminMenu page="iot" />
        </div>

      </DefaultBackground>
    </>
  );
}
