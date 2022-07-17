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
import { ErrorP } from "../../../components/Text/style";


export async function getServerSideProps({ params }) {
  const name = await (await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/password/${params.token_id}`)).data
  const token = params.token_id;

  if (name) {
    return {
      props: { name, token }
    }
  }

  return { notFound: true };
}

export default function ResetPassword(props: { name: string, token: string }) {
  const [form, setForm] = useState({ password1: "", password2: "" });
  const [error, setError] = useState(false)

  const changePassword = async (e) => {
    e.preventDefault();
    if (form.password1 === form.password2 && form.password1 !== "") {
      await axios.put(`/user/password/${props.token}`, form)
    }
    else {
      setError(true)
    }
  }

  const onBlur = () => {
    setError(form.password1 !== form.password2)
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
          <form onSubmit={changePassword}>
            <Row style={{ marginBottom: "20px", marginTop: "10px", justifyContent: "center" }}>
              <RectangleLogo />
            </Row>

            <TitleCard>Réinitialisation &bull; {props.name}</TitleCard>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password">Nouveau mot de passe</StyledInputLabel>
              <PasswordInput id="user_password" onChange={(e) => { setForm({ password1: e.target.value, password2: form.password2 }) }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <StyledInputLabel htmlFor="user_password_2">Confirmez votre mot de passe</StyledInputLabel>
              <PasswordInput id="user_password_2" onChange={(e) => { setForm({ password1: form.password1, password2: e.target.value }) }} onBlur={onBlur} />
              {error &&
                <ErrorP>
                  Les mots de passe saisis ne sont pas identiques !
                </ErrorP>
              }
            </div>

            <Row style={{ justifyContent: "center" }}>
              <GreenButton type="submit">Mettre à jour</GreenButton>
            </Row>
          </form>
        </StyledCardCampus>
      </Row>

      <HelpSection padding="0 5%" />
      <Footer page="campus" />
    </>
  );
}

