import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../style";
import { StateRequest } from "../../Status/Status";
import React, { useEffect, useState } from "react";
import { Buttons } from "../Admin";
import { ProoveModal } from "../../Card/Modals";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";

export const IoTMobileLine = ({ index, value, status }: {
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
    status: string
}) => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        setScrolled(false)
    }, [value])

    return (
        <>
            <div
                style={{
                    height: scrolled ? status == "pending" ? "539px" : "479px" : "53px",
                    transition: "0.3s linear",
                    overflowY: "hidden",
                    overflowX: "auto",
                    marginBottom: scrolled ? "0px" : "30px"
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
                            <StyledTd style={{ textAlign: "center" }}>{value['user_name']}</StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Cotisation</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                {value['user_pay_status'] ? <Succes/> : <Fail/>}
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