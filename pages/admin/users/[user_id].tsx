import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GreenButton, RedButton } from "../../../components/Button/Buttons";
import { Footer } from "../../../components/Card/Cards";
import { DashboardContainer, ResponsiveRow, Col6, Col3, Col, Row, StyledMain } from "../../../components/Container/style";
import { StyledInputLabel, StyledInput } from "../../../components/Input/style";
import { BlackTitle, BlackText, GreenText } from "../../../components/Text/style";
import AdminMenu from "../../../components/Menu/AdminMenu";
import { AdminStateContribution, AdminStateRank } from "../../../components/Status/Status";
import axios, { AxiosResponse } from "axios";
import useForm from "../../../components/Input/useForm";
import PhoneInput from "../../../components/Input/PhoneInput";
import { user } from "../../../components/Utils/types";
import getToken from "../../../components/Utils/auth-token";
import getConfig from "../../../components/Utils/req-config";
import { useRouter } from "next/router";
import usePageTransition from "../../../components/Utils/usePageTransition";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
const PasswordInput = dynamic(() => import("../../../components/Input/PasswordInput"), {
    loading: () => <StyledInput />
});

const Modal = dynamic(() => import("../../../components/Card/Modals/Modal"));

export async function getServerSideProps({ req, params }) {
    const { access_token, userId } = getToken(req)

    if (access_token) {
        const config = getConfig(access_token)
        const user = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${userId}`, config);

        if (user.data.user_rank === "admin") {
            const [userProfile, active_proms, usins_state] = await Promise.all([
                axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/${params.user_id}`, config),
                axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/active_proms`),
                axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/settings/usins_state`),
            ])

            if (userProfile.data)
                return {
                    props: { user: userProfile.data, active_proms: active_proms.data, usins_state: usins_state.data }
                }

            return { notFound: true };
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

export default function User(props: {
    user: user,
    active_proms: number,
    usins_state: boolean
}) {
    const {
        form,
        errorMessage,
        error,
        handleFormChange,
        handleFormErrors,
        handlePasswordChange,
        handleNameChange,
        handlePhoneChange,
        blurPassword2,
        blurPhone
    } = useForm(props.active_proms, props.usins_state, props.user);
    const [show, setShow] = useState(false);
    const router = useRouter();
    const { roadTo, pageTransition, roadToHome } = usePageTransition('user');

    useEffect(() => {
        router.prefetch('/admin/users');
        document.body.style.width = null;
        document.body.style.position = null;
        document.body.style.height = null;
        document.body.style.overflowY = null;
        document.body.style.top = null;
        document.body.style.paddingRight = null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const editProfil = (elmt) => {
        elmt.preventDefault();
        blurPhone();
        blurPassword2();

        if (!error.user_password && !error.user_name_format && !error.phone) {
            axios.put(`/user/${props.user.user_id}`, form)
                .then((res: AxiosResponse) => {
                    if (res.status === 409) handleFormErrors(res.data['user_name'], res.data['user_email']);
                    if (res.status === 200) setShow(!show)
                });
        }
    };

    const deleteUser = (elmt) => {
        elmt.preventDefault();

        axios.delete(`/user/${props.user.user_id}`)
            .then((res: AxiosResponse) => {
                if (res.status === 200) router.push('/admin/users', null, { scroll: false })
            });
    };

    return (
        <>
            <Head>
                <title>Profil {props.user.user_name} &bull; AMNet</title>
            </Head>

            <Modal show={show} style={{ width: "350px" }}>
                Le Profil a été mis à jour
            </Modal>

            <StyledMain variants={pageTransition} >
                <AdminMenu setTranstion={roadTo} setHomeTransition={roadToHome} />

                <DashboardContainer exit={pageTransition.exit ? "false" : undefined}>
                    <ResponsiveRow margin="1% 0" mobileMargin="20px 0" mobileJustify="center">
                        <Col mobileMarginBottom="20px" style={{ justifyContent: "center", flex: "1" }}>
                            <BlackTitle>Editer le Profil &bull; {props.user.user_name}</BlackTitle>
                        </Col>

                        <Row width="auto">
                            <Col6 style={{ paddingRight: "10px" }}>
                                <StyledInputLabel htmlFor="user_pay_status">Cotisation</StyledInputLabel>
                                <AdminStateContribution id="user_pay_status" onChange={handleFormChange} state={form.user_pay_status} />
                            </Col6>
                            <Col6 style={{ paddingLeft: "10px" }}>
                                <StyledInputLabel htmlFor="user_rank">Rang</StyledInputLabel>
                                <AdminStateRank id="user_rank" onChange={handleFormChange} state={form.user_rank} />
                            </Col6>
                        </Row>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ alignItems: "center", marginBottom: "20px" }}>
                        <Col6 mobileMarginBottom="20px" paddingRight="10px" style={{ width: "100%", position: "relative" }}>
                            <StyledInputLabel htmlFor="user_name">Nom d&apos;utilisateur</StyledInputLabel>
                            <StyledInput id="user_name" type="text" defaultValue={form.user_name} onChange={handleNameChange} />
                            {errorMessage.name}
                            {errorMessage.format_name}
                        </Col6>
                        <Col6
                            paddingLeft="10px" mobileAlign="center"
                            style={{
                                justifyContent: "center",
                                height: "100%"
                            }}
                        >
                            <BlackText mobileAlignTxt="justify">
                                Le nom d&apos;utilisateur ne doit contenir
                                que des lettres, des chiffres ou des espaces.
                            </BlackText>
                        </Col6>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ marginBottom: "20px" }}>
                        <Col3 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_firstname">Prénom</StyledInputLabel>
                            <StyledInput id="user_firstname" type="text" defaultValue={form.user_firstname} onChange={handleFormChange} />
                        </Col3>
                        <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_lastname">Nom</StyledInputLabel>
                            <StyledInput id="user_lastname" type="text" defaultValue={form.user_lastname} onChange={handleFormChange} />
                        </Col3>
                        <Col6 paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_email">Adresse e-mail</StyledInputLabel>
                            <StyledInput id="user_email" type="email" defaultValue={form.user_email} onChange={handleFormChange} />
                        </Col6>
                    </ResponsiveRow>

                    <ResponsiveRow style={{ marginBottom: "20px" }}>
                        <Col6 paddingRight="10px" mobileMarginBottom="20px" style={{ position: "relative" }}>
                            <StyledInputLabel htmlFor="user_phone">Téléphone</StyledInputLabel>
                            <PhoneInput value={form.user_phone} onChange={handlePhoneChange} onBlur={blurPhone} />
                            {errorMessage.phone}
                        </Col6>
                        <Col3 paddingLeft="10px" paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_proms">Promotion</StyledInputLabel>
                            <StyledInput
                                id="user_proms"
                                type="text"
                                onChange={handleFormChange}
                                defaultValue={form.user_proms}
                                required
                            />
                        </Col3>

                        <Col3 paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_is_gadz">Gadz</StyledInputLabel>
                            <StyledInput
                                id="user_is_gadz"
                                as="select"
                                onChange={(elmt) => handleFormChange({
                                    currentTarget: { id: elmt.currentTarget.id },
                                    target: { value: elmt.target.value === "Yes" }
                                })}
                                defaultValue={form.user_is_gadz ? "Yes" : "No"}
                            >
                                <option value="Yes">Oui</option>
                                <option value="No">Non</option>
                            </StyledInput>
                        </Col3>
                    </ResponsiveRow>

                    <AnimatePresence initial={false}>
                        {form.user_is_gadz &&
                            <ResponsiveRow
                                as={motion.div}
                                variants={{
                                    initial: { height: 0, marginBottom: 0, overflowY: "clip" },
                                    animate: { height: "auto", marginBottom: "20px", overflowY: "visible", transition: { overflowY: { delay: 0.3 } } },
                                    exit: { height: 0, marginBottom: 0, overflowY: "clip" }
                                }}
                                initial="initial" animate="animate" exit="exit"
                                transition={{ ease: "linear", duration: 0.3 }}
                                layout
                            >
                                <Col6 paddingRight="10px" mobileMarginBottom="20px">
                                    <StyledInputLabel htmlFor="user_bucque">Bucque</StyledInputLabel>
                                    <StyledInput
                                        id="user_bucque"
                                        type="text"
                                        defaultValue={form.user_bucque}
                                        onChange={handleFormChange}
                                    />
                                </Col6>
                                <Col3 paddingRight="10px" paddingLeft="10px" mobileMarginBottom="20px">
                                    <StyledInputLabel htmlFor="user_fams">Fam&apos;s</StyledInputLabel>
                                    <StyledInput
                                        id="user_fams"
                                        type="text"
                                        defaultValue={form.user_fams}
                                        onChange={handleFormChange}
                                    />
                                </Col3>
                                <Col3 paddingLeft="10px">
                                    <StyledInputLabel htmlFor="user_campus">Tabagn&apos;s</StyledInputLabel>
                                    <StyledInput
                                        id="user_campus"
                                        name="tbk"
                                        as="select"
                                        defaultValue={form.user_campus}
                                        onChange={handleFormChange}
                                    >
                                        <option value="Li">Birse</option>
                                        <option value="An">Boquette</option>
                                        <option value="Bo">Bordel&apos;s</option>
                                        <option value="Ch">Chalon&apos;s</option>
                                        <option value="Cl">Clun&apos;s</option>
                                        <option value="KIN">KIN</option>
                                        <option value="Pa">P3</option>
                                        <option value="Me">Siber&apos;s</option>
                                    </StyledInput>
                                </Col3>
                            </ResponsiveRow>
                        }
                    </AnimatePresence>

                    <ResponsiveRow>
                        <Col6 paddingRight="10px" mobileMarginBottom="20px">
                            <StyledInputLabel htmlFor="user_password">Mot de passe</StyledInputLabel>
                            <PasswordInput id="user_password" onChange={handlePasswordChange} />
                        </Col6>
                        <Col6 mobileMarginBottom={form.user_is_gadz ? undefined : "10px"} paddingLeft="10px">
                            <StyledInputLabel htmlFor="user_password2">Confirmez le Mot de passe</StyledInputLabel>
                            <PasswordInput id="user_password2" onChange={handlePasswordChange} onBlur={blurPassword2} />
                        </Col6>
                    </ResponsiveRow>
                    {errorMessage.password}

                    <ResponsiveRow
                        style={{ flex: "1", transition: "margin-bottom 0.3s linear", marginTop: "20px" }}
                    >
                        <Col6 paddingRight="10px"
                            mobileMarginBottom={form.user_is_gadz ? "30px" : "0"}
                            mobileFlex={form.user_is_gadz ? undefined : "none !important"}
                        >
                            <AnimatePresence initial={false}>
                                {form.user_is_gadz &&
                                    <motion.div
                                        variants={{
                                            initial: { height: 0, marginBottom: 0, overflowY: "clip" },
                                            animate: { height: "auto", marginBottom: "20px", overflowY: "visible", transition: { overflowY: { delay: 0.3 } } },
                                            exit: { height: 0, marginBottom: 0, overflowY: "clip" }
                                        }}
                                        initial="initial" animate="animate" exit="exit"
                                        transition={{ ease: "linear", duration: 0.3 }}
                                        layout
                                    >
                                        <GreenText style={{ marginBottom: "5px" }}>Identifiants gadzariques</GreenText>
                                        <StyledInput
                                            style={{ border: "2px solid transparent", backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                                            readOnly
                                            value={form.user_bucque + " " + form.user_fams + form.user_campus + form.user_proms}
                                            type="text"
                                        />
                                    </motion.div>

                                }
                            </AnimatePresence>
                        </Col6>
                        <ResponsiveRow
                            paddingLeft="10px"
                            align="end"
                            mobileAlign="center"
                            paddingBottom="10px"
                            style={{
                                width: "auto",
                                flex: "6",
                                justifyContent: "space-around"
                            }}
                        >
                            <RedButton mobileWidth="100%" width="300px" mobileMarginBottom="25px" onClick={deleteUser}>Supprimer le profil</RedButton>
                            <GreenButton mobileWidth="100%" width="300px" onClick={editProfil}>Sauvegarder le profil</GreenButton>
                        </ResponsiveRow>
                    </ResponsiveRow>

                    <Footer marginTop="0" />
                </DashboardContainer>
            </StyledMain>
        </>
    );
}
