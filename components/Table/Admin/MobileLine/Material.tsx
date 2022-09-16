import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";
import { adminHardware } from "../../../Utils/types";
import dynamic from "next/dynamic";
const Buttons = dynamic(() => import("../Buttons"));
const StateRequest = dynamic<{ center: boolean, state: string }>(() => import("../../../Status/Status").then((mod) => mod.StateRequest));
const Fail = dynamic(() => import("../../../NavIcons/fail"));
const Succes = dynamic(() => import("../../../NavIcons/succes"));

export const MaterialMobileLine = ({ index, value, status, display, isLast, setTab }: {
    index: number,
    value: adminHardware,
    status: string,
    display: any,
    setTab: Function,
    isLast?: boolean
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [duration, setDuration] = useState(0.3);
    const elementRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setScrolled(false);
        }, 600);
    }, [display])

    useEffect(() => {
        setDuration(0);
        setScrolled(false);
        setTimeout(() => {
            setDuration(0.3);
        }, 600);
    }, [value])

    return (
        <div
            style={{
                height: scrolled ? `${elementRef.current?.clientHeight - 5}px` : "53px",
                transition: `height ${duration}s linear, margin-bottom ${duration}s linear`,
                overflowY: "hidden",
                overflowX: scrolled ? "auto" : "hidden",
                marginBottom: isLast ? scrolled ? "0" : "5px" : scrolled ? "15px" : "25px"
            }}
        >
            <StyledTable ref={elementRef}>
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
                            {value['material_reason']}
                        </StyledTd>
                    </StyledTr>
                    {value.material_state === "declined" &&
                        <StyledTr>
                            <StyledTd>Motif du Refus</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                {value.declined_reason}
                            </StyledTd>
                        </StyledTr>
                    }
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
                                    transition: "height 0s ease-out 0.6s"
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