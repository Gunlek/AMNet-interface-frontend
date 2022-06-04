import Head from "next/head";
import { CampusGlobalStyle } from "../../../components/Background/style";
import { GreenButton } from "../../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../../components/Card/Cards";
import RectangleLogo from "../../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../../components/Card/style";
import { Row } from "../../../components/Container/style";
import PasswordInput from "../../../components/Input/PasswordInput";
import { StyledInputLabel } from "../../../components/Input/style";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>Réinitialisation &bull; AMNet</title>
      </Head>
      <CampusGlobalStyle />
      <Row
        mobileWidth="90%"
        style={{
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0"
        }}
      >
        <StyledCardCampus width="45%">
          <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
            <RectangleLogo />
          </Row>

          <TitleCard>Réinitialisation &bull; Argilla</TitleCard>

          <form method="post">
            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password">Nouveau mot de passe</StyledInputLabel>
              <PasswordInput id="user_password" />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password_2">Confirmez votre mot de passe</StyledInputLabel>
              <PasswordInput id="user_password_2" />
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton>Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%"/>
      <Footer page="campus" />
    </>
  );
}
