import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import { StateRequest } from "../../../Status/Status";
import React, { useEffect, useRef, useState } from "react";
import { Buttons } from "../Buttons";
import Fail from "../../../NavIcons/fail";
import Succes from "../../../NavIcons/succes";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";

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
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const newHeight = status === "pending" ? 452 + elementRef.current?.clientHeight : 392 + elementRef.current?.clientHeight
        setHeight(newHeight)

        setTimeout(() => {
            setScrolled(false)
        }, 500);
    }, [display])

    return (
        <>
            <div
                style={{
                    height: scrolled ? height.toString() + "px" : "53px",
                    transition: "height 0.3s linear, margin-bottom 0.3s linear",
                    overflowY: "hidden",
                    overflowX: scrolled ? "auto" : "hidden",
                    marginBottom: scrolled ? "5px" : "30px"
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