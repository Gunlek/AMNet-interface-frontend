import axios, { AxiosResponse } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SmallRedButton } from "../../Button/Buttons";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import { StateRequest } from "../../Status/Status";
import { hardware } from "../../Utils/types";
import { StyledTr, StyledTd, StyledFlexTd, StyledHeadTr, StyledTh, StyledTable } from "../style";
const StyledMaterialToolTip = dynamic(() => import("../../Card/style").then((mod) => mod.StyledMaterialToolTip))

export default function MaterialUserTable(props: { requests: hardware[], setHardware: Function, userId: Number }) {
    let listHTML = [];
    let mobilelistHTML = [];
    const [declinedExist, setDeclinedExist] = useState(false);
    const containerStyle = {
        height: "100%",
        width: "100%",
        overflow: "auto"
    };

    const deleteMaterial = async (e, materialId: Number) => {
        e.preventDefault();
        axios.delete(`/hardware/${materialId}`)
            .then(async (res: AxiosResponse) => {
                if (res.status === 200) {
                    const hardware = await axios.get(`/hardware/user/${props.userId}`);
                    props.setHardware(hardware.data);
                }
            });
    };

    props.requests.map((value, index) => {
        if (value.material_state === "declined" && !declinedExist) setDeclinedExist(true);

        listHTML.push(
            <StyledTr
                layout
                key={index}
                as={motion.tr}
                initial={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                animate={{ opacity: 1, borderBottom: "2px solid rgba(0,0,0,0.1)" }}
                exit={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                transition={{ ease: "linear" }}
            >
                <StyledTd>{index + 1}</StyledTd>
                <StyledTd>{value['material_description']}</StyledTd>
                <StyledFlexTd style={{ whiteSpace: "normal" }}>
                    <div style={{ minWidth: "100%", width: "400px", maxWidth: "max-content" }}>
                        {value['material_reason']}
                    </div>
                </StyledFlexTd>
                {declinedExist && <StyledTd>{value.declined_reason}</StyledTd>}
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd style={{ position: "relative" }}>
                    <SmallRedButton
                        onClick={value['material_state'] !== 'active' ? (e) => deleteMaterial(e, value.material_id) : undefined}
                        style={{
                            backgroundColor: value['material_state'] === 'active' ? "rgba(242,50,50, 0.5)" : undefined,
                            boxShadow: value['material_state'] === 'active' ? "0px 0px 0px rgba(0, 0, 0, 0)" : undefined
                        }}
                    >
                        Supprimer
                        {value['material_state'] === 'active' &&
                            <StyledMaterialToolTip>
                                Vous ne pouvez pas supprimer <br />
                                une demande acceptée
                            </StyledMaterialToolTip>
                        }
                    </SmallRedButton>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML.push(
            <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ease: "linear" }}
            >
                <StyledTable>
                    <thead>
                        <StyledHeadTr>
                            <StyledTh>Demande {index + 1} </StyledTh>
                            <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value['material_description']}</StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>
                        <StyledTr>
                            <StyledTd>Détails</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>{value['material_reason']}</StyledTd>
                        </StyledTr>
                        {value.material_state === "declined" &&
                            <StyledTr>
                                <StyledTd>Motif du Refus</StyledTd>
                                <StyledTd>{value.declined_reason}</StyledTd>
                            </StyledTr>
                        }
                        <StyledTr>
                            <StyledTd>Etat</StyledTd>
                            <StyledTd><StateRequest center={true} state={value['material_state']} /></StyledTd>
                        </StyledTr>
                        <StyledTr style={{ borderBottom: props.requests.length == (index + 1) ? undefined : "2px solid transparent" }}>
                            <StyledTd>Action</StyledTd>
                            <StyledTd style={{ textAlign: "center", position: "relative" }}>
                                <SmallRedButton
                                    onClick={value['material_state'] !== 'active' ? (e) => deleteMaterial(e, value.material_id) : undefined}
                                    style={{
                                        backgroundColor: value['material_state'] === 'active' ? "rgba(242,50,50, 0.5)" : undefined,
                                        boxShadow: value['material_state'] === 'active' ? "0px 0px 0px rgba(0, 0, 0, 0)" : undefined
                                    }}
                                >
                                    Supprimer
                                    {value['material_state'] === 'active' &&
                                        <StyledMaterialToolTip>
                                            Vous ne pouvez pas supprimer <br />
                                            une demande acceptée
                                        </StyledMaterialToolTip>
                                    }
                                </SmallRedButton>
                            </StyledTd>
                        </StyledTr>
                    </tbody>
                </StyledTable>
            </motion.div>
        )
    })

    return (
        <MediaContextProvider>
            <Media at="sm" style={containerStyle}>
                <AnimatePresence initial={false}>{mobilelistHTML}</AnimatePresence>
            </Media>

            <Media greaterThan="sm" style={containerStyle}>
                <StyledTable>
                    <thead>
                        <StyledHeadTr>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            <StyledTh scope="col">Détails</StyledTh>
                            {declinedExist && <StyledTh scope="col">Motif du Refus</StyledTh>}
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Action</span></StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody><AnimatePresence initial={false}>{listHTML}</AnimatePresence></tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};