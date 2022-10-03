import { StyledHeadTr, StyledTable, StyledTd, StyledTh, StyledTr } from "../../style";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { StyledLink } from "../../../Text/style";
import { adminHardware } from "../../../Utils/types";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Buttons = dynamic(() => import("../Buttons"));
const StateRequest = dynamic<{ center: boolean, state: string }>(() => import("../../../Status/Status").then((mod) => mod.StateRequest));
const Fail = dynamic(() => import("../../../NavIcons/fail"));
const Succes = dynamic(() => import("../../../NavIcons/succes"));

export const MobileMaterialLine = ({ index, value, status, isLast, setTab, virtuosoProps }: {
    index: number,
    value: adminHardware,
    status: string,
    setTab: Function,
    isLast: boolean,
    virtuosoProps: any
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const newSetTab = (newAccess) => {
        setAnimate(true);

        const timer = setTimeout(() => {
            setTab(newAccess);
        }, 350)

        return () => clearTimeout(timer)
    };
    
    return (
        <motion.div
            key={value.material_id}
            {...virtuosoProps}
            style={{ overflowAnchor: "none" }}
            initial={false}
            transition={{ ease: "linear", duration: 0.3 }}
            animate={{
                height: animate ? 0 : "auto",
                paddingBottom: animate ? 0 : isLast ? "0" : scrolled ? "10px" : "25px",
                overflow: animate ? "clip" : "auto"
            }}
        >
            <motion.div
                style={{ overflow: scrolled ? "auto" : "clip" }}
                initial={false}
                animate={{ height: scrolled ? "auto" : "53px" }}
                transition={{ ease: "linear", duration: 0.3 }}
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
                        <StyledTr style={{ borderBottom: "2px solid rgba(0,0,0,0)" }}>
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
                                    <Buttons
                                        status={value['material_state']}
                                        requestType="hardware"
                                        id={value.material_id}
                                        setTab={newSetTab}
                                    />
                                </div>
                            </StyledTd>
                        </StyledTr>
                    </tbody>
                </StyledTable>
            </motion.div>
        </motion.div>
    );
}

export default MobileMaterialLine