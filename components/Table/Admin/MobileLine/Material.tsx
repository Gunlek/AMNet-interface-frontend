import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import { StateRequest } from "../../../Status/Status";
import React, { useEffect, useRef, useState } from "react";
import { Buttons } from "../Buttons";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";
import { adminHardware } from "../../../Utils/types";

export const MaterialMobileLine = ({ index, value, status, display, isLast, setTab }: {
    index: number,
    value: adminHardware,
    status: string,
    display: any,
    setTab: Function,
    isLast?: boolean
}) => {
    const [scrolled, setScrolled] = useState(false);
    const elementRef = useRef(null);
    const height = status === "pending" ? 460 + elementRef.current?.clientHeight : 410 + elementRef.current?.clientHeight

    useEffect(() => {
        setTimeout(() => {
            setScrolled(false)
        }, 500);
    }, [display])

    return (
        <div
            style={{
                height: scrolled ? height.toString() + "px" : "53px",
                transition: "height 0.3s linear, margin-bottom 0.3s linear",
                overflowY: "hidden",
                overflowX: scrolled ? "auto" : "hidden",
                marginBottom: isLast ? scrolled ? "0" : "5px" : "25px"
            }}
        >
            <StyledTable>
                <thead>
                    <StyledHeadTr onClick={() => setScrolled(!scrolled)}>
                        <StyledTh style={{ width: "130px" }}>Demande {index}</StyledTh>
                        <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['material_description']}</StyledTh>
                    </StyledHeadTr>
                </thead>
                <tbody>
                    <StyledTr>
                        <StyledTd style={{ width: "130px" }}>Utilisateur</StyledTd>
                        <StyledTd style={{ textAlign: "center" }}>
                            <Link
                                href={{
                                    pathname: '/admin/users/[user_id]',
                                    query: { user_id: value['material_user'] },
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
                        <StyledTd>Détails</StyledTd>
                        <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                            <div ref={elementRef}>{value['material_reason']}</div>
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
                                    flexDirection: "column",
                                    transition: "height 0.1s ease-out 0.5s"
                                }}
                            >
                                <Buttons
                                    status={value['material_state']}
                                    requestType="hardware"
                                    id={value.material_id}
                                    setTab={setTab}                                
                                />
                            </div>
                        </StyledTd>
                    </StyledTr>
                </tbody>
            </StyledTable>
        </div>
    );
}

export default MaterialMobileLine