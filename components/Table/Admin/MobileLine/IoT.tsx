import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import { StateRequest } from "../../../Status/Status";
import React, { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import ProoveModal from "../../../Card/Modals/AdminProoveModal";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";

export const IoTMobileLine = ({ index, value, status, display }: {
    index: number,
    value: {
        access_id: string,
        access_description: string,
        access_mac: string,
        access_proof: string,
        access_user: number,
        access_state: string,
        user_pay_status: number,
        user_name: string
    },
    status: string,
    display: any
}) => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        setScrolled(false)
    }, [display])

    return (
        <>
            <div
                style={{
                    height: scrolled ? status == "pending" ? "535px" : "475px" : "53px",
                    transition: "0.3s linear",
                    overflowY: "hidden",
                    overflowX: "auto",
                    marginBottom: scrolled ? "0" : "30px"
                }}
            >
                <StyledTable style={{ tableLayout: "fixed" }}>
                    <thead>
                        <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                            <StyledTh style={{ width: "130px" }}>Equipement {index}</StyledTh>
                            <StyledTh style={{ textAlign: "center" }}>{value['access_description']}</StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>
                        <StyledTr>
                            <StyledTd style={{ width: "130px" }}>Utilisateur</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                <Link
                                    href={{
                                        pathname: '/admin/users/[user_id]',
                                        query: { user_id: value['acces_user'] },
                                    }}
                                    prefetch={false}
                                    passHref
                                >
                                    <StyledLink color="#096a09">{value['user_name']}</StyledLink>
                                </Link>
                            </StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Cotisation</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                {value['user_pay_status'] ? <Succes /> : <Fail />}
                            </StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Adresse Mac</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>{value['access_mac']}</StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Preuve</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                <ProoveModal request={value} link="/static/images/campus.png" />
                            </StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Etat</StyledTd>
                            <StyledTd><StateRequest center={true} state={value['acces_state']} /></StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Actions</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        height: (status == "pending") ? "160px" : "100px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Buttons status={value['acces_state']} />
                                </div>
                            </StyledTd>
                        </StyledTr>
                    </tbody>
                </StyledTable>
            </div>
        </>
    );
}

export default IoTMobileLine