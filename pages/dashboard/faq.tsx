import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { 
  Row, 
  DashboardContainer
} from "../../components/Container/style";
import { Footer, HelpSection } from "../../components/Card/Cards"
import { StyledCard } from "../../components/Card/style";
import { Menu } from "../../components/Menu/Menus";
import { BlackTitle } from "../../components/Text/style";
import useMediaQuery from "../../components/MediaQueries/MediaQuery";


export default function Dashboard() {
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  return (
    <>
      <Head>
        <title>FAQ &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <Menu page="faq" />

        <DashboardContainer>
          <Row style={{flex: "1", margin: minWidth1000 ? "1% 0" : "4% 0", justifyContent: minWidth1000 ? "start" : "center"}}>
              <BlackTitle>FAQ</BlackTitle>
          </Row>

          <StyledCard 
            style={{
              flex: "9",
              marginBottom:"2%"
            }}
          >
          </StyledCard>

          <HelpSection color="#096A09"/>
          <Footer /> 
        </DashboardContainer>
      </DefaultBackground>
    </>
  );
}
