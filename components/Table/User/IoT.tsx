import axios, { AxiosResponse } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SmallRedButton } from "../../Button/Buttons";
import MacAdressTd from "../../Input/MacAddressInput";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { access } from "../../Utils/types";
import { UserMotionDiv } from "../MotionDiv";
import {
    StyledTr,
    StyledTd,
    StyledFlexTd,
    StyledTable,
    StyledTh,
    StyledHeadTr
} from "../style";
const UserProofModal = dynamic(() => import("../../Card/Modals/UserProofModal"), {
    loading: () => <StyledLink color="#096a09">Image</StyledLink>
})

export default function IoTUserTable(props: { requests: access[], setAccess: Function, userId: Number | string }) {
    let listHTML = [];
    let mobilelistHTML = [];
    const [declinedExist, setDeclinedExist] = useState(false);

    const containerStyle = {
        height: "100%",
        width: "100%",
        overflow: "auto"
    }

    const deleteAccess = async (e, accessId: Number) => {
        e.preventDefault();
        await axios.delete(`/access/${accessId}`)
            .then(async (res: AxiosResponse) => {
                if (res.status === 200) {
                    const access = await axios.get(`/access/user/${props.userId}`);
                    props.setAccess(access.data);
                }
            })
    }

    props.requests.map((value, index) => {
        if (value.access_state === "declined" && !declinedExist) setDeclinedExist(true);

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
                <StyledTd><UserMotionDiv>{index + 1}</UserMotionDiv></StyledTd>
                <StyledFlexTd><UserMotionDiv>{value.access_description}</UserMotionDiv></StyledFlexTd>
                {declinedExist && <StyledTd>{value.declined_reason}</StyledTd>}
                {props.userId === "aeg" ?
                    <MacAdressTd access_mac={value.access_mac} access_id={value.access_id} />
                    :
                    <StyledTd style={{ textAlign: "center" }}><UserMotionDiv>{value.access_mac}</UserMotionDiv></StyledTd>
                }
                <StyledTd style={{ textAlign: "center" }}>
                    <UserMotionDiv><UserProofModal link={value.access_proof} alt={value.access_description} /></UserMotionDiv>
                </StyledTd>
                <StyledTd>
                    <UserMotionDiv><StateRequest state={value.access_state} /></UserMotionDiv>
                </StyledTd>
                <StyledTd>
                    <UserMotionDiv>
                        <SmallRedButton onClick={(e) => deleteAccess(e, value.access_id)}>
                            Supprimer
                        </SmallRedButton>
                    </UserMotionDiv>
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
                            <StyledTh>Equipement {index + 1}</StyledTh>
                            <StyledTh style={{ textAlign: "center", paddingRight: "10px" }}>{value.access_description}</StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <tbody>
                        {value.access_state === "declined" &&
                            <StyledTr>
                                <StyledTd>Motif du Refus</StyledTd>
                                <StyledTd>{value.declined_reason}</StyledTd>
                            </StyledTr>
                        }
                        <StyledTr>
                            <StyledTd>Adresse Mac</StyledTd>
                            {props.userId === "aeg" ?
                                <MacAdressTd access_mac={value.access_mac} access_id={value.access_id} />
                                :
                                <StyledTd>{value.access_mac}</StyledTd>
                            }
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Preuve</StyledTd>
                            <StyledTd style={{ textAlign: "center", whiteSpace: "normal" }}>
                                <UserProofModal link={value.access_proof} alt={value.access_description} />
                            </StyledTd>
                        </StyledTr>
                        <StyledTr>
                            <StyledTd>Etat</StyledTd>
                            <StyledTd><StateRequest center={true} state={value.access_state} /></StyledTd>
                        </StyledTr>
                        <StyledTr style={{ borderBottom: props.requests.length == (index + 1) ? undefined : "2px solid transparent" }}>
                            <StyledTd>Action</StyledTd>
                            <StyledTd style={{ textAlign: "center" }}>
                                <SmallRedButton onClick={(e) => deleteAccess(e, value.access_id)}>
                                    Supprimer
                                </SmallRedButton>
                            </StyledTd>
                        </StyledTr></tbody>
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
                            {declinedExist && <StyledTh scope="col">Motif du Refus</StyledTh>}
                            <StyledTh style={{ width: "230px", textAlign: "center" }} scope="col">Adresse Mac</StyledTh>
                            <StyledTh scope="col">Preuve</StyledTh>
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