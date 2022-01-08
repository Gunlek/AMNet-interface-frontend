import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { 
  Row, 
  StyledDashboard
} from "../../components/Container/style";
import { HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { BlackTitle } from "../../components/Text/style";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Mon Espace &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="faq" />

        <StyledDashboard>
          <Row style={{flex: "1", margin:"1% 0"}}>
              <BlackTitle>FAQ</BlackTitle>
          </Row>

          <StyledCard 
            style={{
              flex: "9",
              marginBottom:"2%"
            }}
          >
          </StyledCard>

          <Row>
            <HelpSection color="#096A09"/>
          </Row>   
        </StyledDashboard>
      </DefaultBackground>
    </>
  );
}
