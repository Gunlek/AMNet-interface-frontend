import React from "react";
import Head from "next/head";
import { DefaultBackground } from "../../components/Background/style";
import { StyledCard } from "../../components/Card/style";
import { AdminMenu } from "../../components/Menu/Menus";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Administration &bull; AMNet</title>
      </Head>
      <DefaultBackground>
        <AdminMenu page="iot" />

      </DefaultBackground>
    </>
  );
}
