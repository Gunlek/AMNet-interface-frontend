import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { CampusGlobalStyle } from "../../../components/Background/style";
import { GreenButton } from "../../../components/Button/Buttons";
import { TitleCard, HelpSection, Footer } from "../../../components/Card/Cards";
import RectangleLogo from "../../../components/Card/RectangleLogo";
import { StyledCardCampus } from "../../../components/Card/style";
import { Row } from "../../../components/Container/style";
import PasswordInput from "../../../components/Input/PasswordInput";
import { StyledInputLabel } from "../../../components/Input/style";
import { BlackText } from "../../../components/Text/style";


export async function getServerSideProps({ params }) {
  const name = await (await axios.get(`http://localhost:3333/user/password/${params.token_id}`)).data
  const token = params.token_id;
  return {
    props: { name, token }
  }
}

export default function ResetPassword(props: { name: string, token: string }) {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false)

  const sendRequest = async (e) => {
    e.preventDefault();
    if (password1 === password2) {
      await axios.put(`http://localhost:3333/user/password/${props.token}`, { password1: password1, password2: password2 })
    }
    else {
      setError(true)
    }
  }

  const onBlur = () => {
    if (password1 !== password2) {
      setError(true)
    }
    else {
      setError(false)
    }
  }
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
          <form>
            <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
              <RectangleLogo />
            </Row>

            <TitleCard>Réinitialisation &bull; {props.name}</TitleCard>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password">Nouveau mot de passe</StyledInputLabel>
              <PasswordInput id="user_password" onChange={(e) => { setPassword1(e.target.value) }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password_2">Confirmez votre mot de passe</StyledInputLabel>
              <PasswordInput id="user_password_2" onChange={(e) => { setPassword2(e.target.value) }} onBlur={onBlur} />
              {error &&
                <BlackText style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
                  Les mots de passe saisis ne sont pas identiques !
                </BlackText>
              }
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton type="submit" onClick={sendRequest}>Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}

