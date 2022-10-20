import React, { useState } from "react";
import Head from "next/head";
import { CampusGlobalStyle } from "../../components/Background/style";
import { Footer, HelpSection } from "../../components/Card/Cards";
import { Col6, Column, Row } from "../../components/Container/style";
import RectangleLogo from "../../components/Card/RectangleLogo";
import { ButtonLink } from "../../components/Button/Buttons";
import { StyledCardCampus } from "../../components/Card/style";
import Image from 'next/image';
import getToken from "../../components/Utils/auth-token";
import CampusBackground from "../../components/Background/CampusBackground";
import { motion } from "framer-motion";

export async function getServerSideProps({ req }) {
  const { userId } = getToken(req);

  return {
    props: {
      isLogged: userId ? true : false
    }
  }
}

export default function FAQ(props: { isLogged: boolean }) {
  const [toHome, setToHome] = useState(false);
  return (
    <>
      <Head>
        <title>FAQ &bull; AMNet</title>
        <meta name="description" content="FAQ AMNet : trouvez toutes les réponses à vos questions concernant l'AMNet" />
      </Head>
      <CampusGlobalStyle flexDirection="column" />
      <CampusBackground />

      <motion.main
        exit={{ backgroundColor: (props.isLogged && !toHome) ? "#E8EFEA" : null }}
        transition={{ ease: "linear" }}
      >
        <motion.div
          exit={{ opacity: 0, x: toHome ? 100 : -100 }}
          transition={{ ease: "linear" }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Column style={{ padding: "0 5%" }}>
            <Row margin="20px 0" mobileMargin="30px 0" direction="column">
              <Col6 mobileMarginBottom="30px" justify="center" mobileAlign="center">
                <RectangleLogo color="white" onClick={() => setToHome(true)} />
              </Col6>
              <Col6 align="end" mobileAlign="center" justify="center">
                <ButtonLink
                  href={props.isLogged ? "/" : "/homepage/login"}
                  width={props.isLogged ? "275px" : "300px"}
                  mediaBreakPoint={props.isLogged ? "300px" : "350px"}
                >
                  {props.isLogged ? "Mon Espace" : "Connexion / Inscription"}
                </ButtonLink>
              </Col6>
            </Row>
          </Column>

          <Column style={{ padding: "0 5%", flex: "1", justifyContent: "center", alignItems: "center" }}>
            <StyledCardCampus style={{ display: "block", width: "fit-content" }}>
              <Image src="/static/images/inconstruction.png" width={440} height={343} alt="Construction Site Plot" />
            </StyledCardCampus>
          </Column>

          <HelpSection />
          <Footer page="campus" />
        </motion.div>
      </motion.main>
    </>
  );
}
