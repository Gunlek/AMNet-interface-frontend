import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { forwardRef, useState } from "react";
import { TableVirtuoso, Virtuoso } from "react-virtuoso";
import {  adminHardware } from "../../../Utils/types";
import { StyledTable, StyledHeadTr, StyledTh } from "../../style";
import DesktopMaterialRow from "./DesktopRow";
import MobileMaterialLine from "./MobileRow";

export function AdminTable({ requests, status, display, setTab }: {
    requests: any,
    status: { new: string },
    display: { declined: boolean },
    setTab: Function
}) {
    const [isScrolling, setIsScrolling] = useState(false)
    const tBodyProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { ease: "linear", duration: 0.5 }
    };

    return (
        <motion.div {...tBodyProps} key={status.new} style={{ height: "100%", width: "100%" }}>
            <TableVirtuoso
                style={{ height: "100%" }}
                totalCount={requests.length}
                isScrolling={setIsScrolling}
                initialItemCount={requests.length > 10 ? 10 : requests.length}
                components={{
                    // eslint-disable-next-line react/display-name
                    TableHead: forwardRef(({ style, ...props }, ref) => <thead ref={ref} {...props} style={{ ...style, zIndex: "2" }} />),
                    Table: ({ style, ...props }) => <StyledTable  {...props} style={{ ...style, tableLayout: 'fixed' }} />,
                    TableRow: (props) => {
                        const index = props['data-index']
                        return <DesktopMaterialRow
                            virtuosoProps={props}
                            value={requests[index]}
                            setTab={setTab}
                            index={index + 1}
                            isScrolling={isScrolling}
                        />
                    }
                }}
                fixedHeaderContent={() => (
                    <StyledHeadTr>
                        <StyledTh scope="col" style={{ width: "90px" }}>#</StyledTh>
                        <StyledTh scope="col" style={{ width: "250px" }}>Utilisateur</StyledTh>
                        <StyledTh scope="col" style={{ width: "100px", textAlign: "center" }}>Cotiz</StyledTh>
                        <StyledTh scope="col" style={{ width: "300px" }}>Description</StyledTh>
                        <StyledTh scope="col" style={{ width: "450px" }}>Détails</StyledTh>
                        {display.declined && <StyledTh scope="col" style={{ width: "300px" }}>Motif du Refus</StyledTh>}
                        <StyledTh scope="col" style={{ width: "190px", paddingLeft: "30px" }}>Etat</StyledTh>
                        <StyledTh scope="col" style={{ width: (status.new == "pending") ? "520px" : "350px", paddingLeft: "30px" }}>
                            Actions
                        </StyledTh>
                    </StyledHeadTr>
                )}
            />
        </motion.div>
    )
};

export function MobileAdminTable({ requests, setTab }: { requests: adminHardware[], setTab: Function }) {
    const tBodyProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { ease: "linear", duration: 0.5 },
        style: { width: "100%", height: "100%", overflow: 'scroll hidden', fontSize: "1.2rem" }
    };

    return (requests.length === 0 ?
        null
        :
        <motion.div {...tBodyProps} key={requests[0].material_state}>
            <LayoutGroup>
                <AnimatePresence initial={false}>
                    <Virtuoso
                        style={{ height: "100%" }}
                        increaseViewportBy={{ bottom: 400, top: 0 }}
                        totalCount={requests.length}
                        initialItemCount={requests.length > 10 ? 10 : requests.length}
                        components={{
                            Item: (props) => {
                                return (
                                    <MobileMaterialLine
                                        virtuosoProps={props}
                                        key={props['data-index']}
                                        index={props['data-index'] + 1}
                                        value={requests[props['data-index']]}
                                        status={requests[0]?.material_state}
                                        setTab={setTab}
                                        isLast={props['data-index'] + 1 == requests.length}
                                    />
                                )
                            },
                        }}
                    />
                </AnimatePresence>
            </LayoutGroup>
        </motion.div>

    )
};