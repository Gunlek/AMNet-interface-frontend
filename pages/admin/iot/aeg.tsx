import React, { useState } from "react";
import Head from "next/head";
import { StyledCard } from "../../../components/Card/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { Column, DashboardContainer, ResponsiveRow, StyledMain } from "../../../components/Container/style";
import { BlackTitle } from "../../../components/Text/style";
import { Footer } from "../../../components/Card/Cards";
import useMediaQuery from "../../../components/MediaQueries/MediaQuery";
import axios from "axios";
import { adminAccess } from "../../../components/Utils/types";
import { access } from "../../../components/Utils/types";
import getToken from "../../../components/Utils/auth-token";
import getConfig from "../../../components/Utils/req-config";
import usePageTransition from "../../../components/Utils/usePageTransition";
import IoTUserTable from "../../../components/Table/User/IoT";
import dynamic from "next/dynamic";
import { StyledGreenButton } from "../../../components/Button/style";
const IoTModal = dynamic(() => import("../../../components/Card/Modals/IoTModal"), {
    loading: () => <StyledGreenButton width="280px">Nouvelle demande</StyledGreenButton>
})

export async function getServerSideProps({ req }) {
    const { access_token, userId } = getToken(req)

    if (access_token) {
        const config = getConfig(access_token);
        const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config);

        if (user.data.user_rank === "admin") {
            const access = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/access/user/aeg`, config);

            return {
                props: { access: access.data }
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

export default function AdminIoT(props: { access: adminAccess[] }) {
    const minWidth1000 = useMediaQuery('(min-width:1000px)');
    const [access, setAccess] = useState(props.access);
    const { roadTo, pageTransition, roadToHome } = usePageTransition('user');

    const setNewAcces = async (newAccess: access[]) => {
        let promise = [];

        newAccess.forEach((access: access) => {
            if (access.access_state === "pending") promise.push(axios.put(`/access/enable/${access.access_id}`));
        });

        await Promise.all(promise);
        setAccess(await (await axios.get(`/access/user/aeg`)).data);
    };
    return (
        <>
            <Head>
                <title>Administration &bull; AMNet</title>
            </Head>

            <StyledMain variants={pageTransition}>
                <AdminMenu page="iot/aeg" setTranstion={roadTo} setHomeTransition={roadToHome} />

                <DashboardContainer exit={pageTransition.exit ? "false" : undefined}>
                    <ResponsiveRow margin="1% 0" mobileMargin="20px 0" style={{ alignItems: "center" }}>
                        <Column mobileMarginBottom="20px" style={{ justifyContent: "center" }}>
                            <BlackTitle>Accès de l&apos;AEG à AMNet IoT</BlackTitle>
                        </Column>

                        <div style={{ flex: "1" }}>
                            <IoTModal userId="aeg" setAccess={setNewAcces} />
                        </div>
                    </ResponsiveRow>

                    <StyledCard
                        marginBottom="2%"
                        mobileMarginBottom="10px"
                        style={{ flex: "1 0 0", minHeight: minWidth1000 ? "0" : "300px" }}
                    >
                        <IoTUserTable requests={access} setAccess={setAccess} userId="aeg" />
                    </StyledCard>

                    <Footer marginTop="0" />
                </DashboardContainer>
            </StyledMain>
        </>
    );
}
