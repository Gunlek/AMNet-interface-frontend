import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "./style";
import { StateRequest } from "../Status/Status";
import React, { useState } from "react";
import { Buttons } from "./Admin";
import { ProoveModal } from "../Card/Modals";

export const MobileLine = ({ index, value, status, isLast }: {
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
    isLast: boolean
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <>
            <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                <StyledTh style={{ width: "130px" }}>Equipement {index}</StyledTh>
                <StyledTh style={{ textAlign: "center" }}>{value['access_description']}</StyledTh>
            </StyledHeadTr>
            <tr>
                <td colSpan={2} style={{ padding: "0" }}>
                    <div
                        style={{
                            height: scrolled ? "485px" : "0px",
                            transition: "0.3s linear",
                            overflowY: "hidden",
                            overflowX: "auto"
                        }}
                    >
                        <StyledTable style={{ tableLayout: "fixed" }}>
                            <tbody>
                                <StyledTr>
                                    <StyledTd style={{ width: "130px" }}>Utilisateur</StyledTd>
                                    <StyledTd style={{ textAlign: "center" }}>{value['user_name']}</StyledTd>
                                </StyledTr>
                                <StyledTr>
                                    <StyledTd>Cotisation</StyledTd>
                                    <StyledTd style={{ textAlign: "center" }}>
                                        <img 
                                            style={{ height: "20px" }} 
                                            src={value['user_pay_status'] ? "/static/icons/succes.svg" : "/static/icons/fail.svg"} 
                                        />
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
                </td>
            </tr>
            <tr style={{ display: isLast ? "none" : undefined }}>
                <td style={{ padding: "0" }}>
                    <div 
                        style={{ 
                            height: scrolled ? "0" : "30px", 
                            transition: "0.3s linear", 
                            overflow: "hidden" 
                        }}
                    />
                </td>
            </tr>
        </>
    );
}