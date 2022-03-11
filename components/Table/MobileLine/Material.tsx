import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../style";
import { StateRequest } from "../../Status/Status";
import React, { useState } from "react";
import { Buttons } from "../Admin";
import { ProoveModal } from "../../Card/Modals";

export const MaterialMobileLine = ({ index, value, status }: {
    index: number,
    value: {
        material_id: string,
        material_description: string,
        material_reason: string,
        material_state: string,
        user_pay_status: number,
        user_name: string
    },
    status: string
}) => {

    const [scrolled, setScrolled] = useState(false);

    return (
        <>
            <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                <StyledTh style={{ width: "130px" }}>Equipement {index}</StyledTh>
                <StyledTh style={{ textAlign: "center" }}>{value['material_description']}</StyledTh>
            </StyledHeadTr>
            <tr>
                <td colSpan={2} style={{ padding: "0" }}>
                    <div
                        style={{
                            height: scrolled ? status=="pending" ? "479.4px" : "419px" : "0px",
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
                                    <StyledTd>Détails</StyledTd>
                                    <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                        <div 
                                            style={{ 
                                                height:"70px", 
                                                overflow: "auto", 
                                                display: "flex", 
                                                justifyContent: "center", 
                                                alignItems: "center" 
                                            }}
                                        >
                                            {value['material_reason']}
                                        </div>
                                    </StyledTd>
                                </StyledTr>
                                <StyledTr>
                                    <StyledTd>Etat</StyledTd>
                                    <StyledTd><StateRequest center={true} state={value['material_state']} /></StyledTd>
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
                                            <Buttons status={value['material_state']} />
                                        </div>
                                    </StyledTd>
                                </StyledTr>
                            </tbody>
                        </StyledTable>
                    </div>
                </td>
            </tr>
            <tr>
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

export default MaterialMobileLine