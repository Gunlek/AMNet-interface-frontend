import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import { StateRequest } from "../../../Status/Status";
import React, { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import ProofModal from "../../../Card/Modals/AdminProofModal";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";
import { adminAccess } from "../../../Utils/types";
import MacAdressTd from "../../../Input/MacAddressInput";

export const IoTMobileLine = ({ index, value, status, display, isLast, setTab }: {
    index: number,
    value: adminAccess,
    status: string,
    display: any,
    setTab: Function,
    isLast?: boolean
}) => {
    const [scrolled, setScrolled] = useState(false);
    const height = status == "pending" ? "530px" : "470px";

    useEffect(() => {
        setTimeout(() => {
            setScrolled(false)
        }, 500);
    }, [display])

    return (
        <>
            <div
                style={{
                    height: scrolled ? height : "53px",
                    transition: "0.3s linear",
                    overflowY: "hidden",
                    overflowX: scrolled ? "auto" : "hidden",
                    marginBottom: isLast ? scrolled ? "0" : "5px" : "25px"
                }}
            >
                <StyledTable style={{ tableLayout: "fixed" }}>
                    <thead>
                        <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                            <StyledTh style={{ width: "130px" }}>Equipement {index}</StyledTh>
                            <StyledTh style={{ textAlign: "center" }}>{value.access_description}</StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>
                        <StyledTr>
                            <StyledTd style={{ width: "130px" }}>Utilisateur</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                <Link
                                    href={{
                                        pathname: '/admin/users/[user_id]',
                                        query: { user_id: value['access_user'] },
                                    }}
                                    passHref
                                    scroll={false}
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
                            <MacAdressTd access_mac={value.access_mac} access_id={value.access_id} />
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Preuve</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                <ProofModal request={value} setTab={Function} />
                            </StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Etat</StyledTd>
                            <StyledTd><StateRequest center={true} state={value['access_state']} /></StyledTd>
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
                                        flexDirection: "column",
                                        transition: "height 0.1s ease-out 0.5s"
                                    }}
                                >
                                    <Buttons
                                        status={value['access_state']}
                                        requestType="access"
                                        id={value.access_id}
                                        setTab={setTab}
                                    />
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