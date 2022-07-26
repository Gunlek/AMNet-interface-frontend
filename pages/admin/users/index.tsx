import React, { useState } from "react";
import Head from "next/head";
import { GreenButton, OrangeButton, RedButton } from "../../../components/Button/Buttons";
import { ButtonsRow, DashboardContainer, ResponsiveRow, Row } from "../../../components/Container/style";
import { StyledCard } from "../../../components/Card/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { BlackTitle } from "../../../components/Text/style";
import { UsersTable } from "../../../components/Table/Admin/Users";
import { Footer } from "../../../components/Card/Cards";
import axios, { AxiosResponse } from "axios";
import { user } from "../../../components/Utils/types";
import getToken from "../../../components/Utils/auth-token";
import getConfig from "../../../components/Utils/req-config";

export async function getServerSideProps({ req }) {
  const { access_token, userId } = getToken(req)

  if (access_token) {
    const config = getConfig(access_token)
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config);

    if (user.data.user_rank === "admin") {
      const users = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user`, config);

      return {
        props: { users: users.data }
      }
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    redirect: {
      destination: '/homepage',
      permanent: false,
    }
  }
}

export default function Users(props: { users: user[] }) {
  const [users, setUsers] = useState(props.users);
  const [Filter, Checkboxs, SelectedRows, Table] = UsersTable(users);

  const handleUsersChange = () => {
    axios.get(`/user`)
      .then((res: AxiosResponse) => {
        if (res.status == 200) setUsers(res.data)
      });
  };

  const deleteUsers = async (e) => {
    e.preventDefault();

    if (SelectedRows.length === users.length) {
      await axios.delete(`/user/all`);
    }
    else {
      await SelectedRows.forEach(async (id: number) => {
        await axios.delete(`/user/${id}`);
      });
    }

    handleUsersChange();
  }

  const cancelPayment = async (e) => {
    e.preventDefault();

    if (SelectedRows.length === users.length) {
      await axios.put(`/user/unpay/all`);
    }
    else {
      await axios.put(`/user/unpay/several`, { Ids: SelectedRows });
    }

    handleUsersChange();
  }

  const confirmPayment = async (e) => {
    e.preventDefault();

    if (SelectedRows.length === users.length) {
      await axios.put(`/user/pay/all`);
    }
    else {
      await axios.put(`/user/pay/several`, { Ids: SelectedRows });
    }

    handleUsersChange();
  }

  const changeStatut = async (e) => {
    e.preventDefault();

    if (SelectedRows.length === users.length) {
      await axios.put(`/user/statut/all`);
    }
    else {
      await axios.put(`/user/statut/several`, { Ids: SelectedRows });
    }

    handleUsersChange();
  }

  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <AdminMenu page="users" />

      <DashboardContainer>
        <ResponsiveRow margin="1% 0" mobileMargin="20px 0 30px">
          <Row mobileJustify="center" mobileMarginBottom="10px">
            <BlackTitle>Liste des adhérents</BlackTitle>
          </Row>
          <ResponsiveRow style={{ flex: "1", alignItems: "center", justifyContent: "end" }}>
            {Filter}
          </ResponsiveRow>
        </ResponsiveRow>

        {Checkboxs}

        <ButtonsRow
          marginBottom="2%"
          mobileMarginBottom="30px"
        >
          <GreenButton width="300px" onClick={confirmPayment}>Confirmer le paiement</GreenButton>
          <RedButton width="300px" onClick={cancelPayment}>Annuler le paiement</RedButton>
          <OrangeButton width="300px" onClick={changeStatut}>Changer de statut Gadz</OrangeButton>
          <RedButton width="300px" onClick={deleteUsers}>Supprimer</RedButton>
        </ButtonsRow>

        <StyledCard
          marginBottom="2%"
          mobileMarginBottom="10px"
          minHeight="0"
          mobileMinHeight="600px"
          style={{ flex: "1 0 0" }}
        >
          {Table()}
        </StyledCard>
        <Footer marginTop="0" />
      </DashboardContainer>
    </>
  );
}
