import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import { StateRequest } from "../../../Status/Status";
import React, { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";

export const MaterialMobileLine = ({ index, value, status, display }: {
    index: number,
    value: {
        material_id: string,
        material_description: string,
        material_reason: string,
        material_state: string,
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
                    height: scrolled ? status == "pending" ? "530px" : "470px" : "53px",
                    transition: "height 0.3s linear, margin-bottom 0.3s linear",
                    overflowY: "hidden",
                    overflowX: "auto",
                    marginBottom: scrolled ? "0" : "30px"
                }}
            >
                <StyledTable>
                    <thead>
                        <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                            <StyledTh style={{ width: "130px" }}>Equipement {index}</StyledTh>
                            <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['material_description']}</StyledTh>
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
                            <StyledTd>Détails</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                <div>{value['material_reason']}</div>
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
        </>

    );
}

export default MaterialMobileLine