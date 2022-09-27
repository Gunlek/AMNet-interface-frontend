import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React from "react";
import { TableVirtuoso } from "react-virtuoso";
import { access } from "../../../Utils/types";
import { StyledTable, StyledHeadTr, StyledTh } from "../../style";
import DesktopIoTRow from "./DesktopRow";

export function AdminTable(test: {
    requests: any,
    status: { new: string },
    display: { declined: boolean },

}) {
    const tBodyProps = {
        as: motion.table,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { ease: "linear", duration: 0.5 }
    };
    console.log(test.requests.length)

    return (
        <>
            <AnimatePresence initial={false}>
                <TableVirtuoso
                    style={{ height: 800 }}
                    totalCount={test.requests.length}
                    components={{
                        Table: ({ style, ...props }) => <StyledTable {...tBodyProps} {...props} style={{ ...style, tableLayout: 'fixed' }} />,
                        TableBody: React.forwardRef(({ style, ...props }, ref) => <tbody {...props} ref={ref} />),
                        TableRow: (props) => {
                            const index = props['data-index']
                            return <DesktopIoTRow {...props} value={test.requests[index]} setTab={undefined} index={index+1} />
                        }
                    }}
                    fixedHeaderContent={() => (
                        <StyledHeadTr>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Utilisateur</StyledTh>
                            <StyledTh scope="col">Cotisation</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            {test.display.declined && <StyledTh scope="col">Motif du Refus</StyledTh>}
                            <StyledTh style={{ width: "230px", textAlign: "center" }} scope="col">Adresse Mac</StyledTh>
                            <StyledTh scope="col">Preuve</StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col">
                                <div
                                    style={{
                                        width: (test.status.new == "pending") ? "500px" : "325px",
                                        paddingLeft: "5px",
                                        transition: "width 0s linear 0.6s"
                                    }}
                                >
                                    Actions
                                </div>
                            </StyledTh>
                        </StyledHeadTr>
                    )}
                />
            </AnimatePresence>
        </>

    )
};

export function MobileAdminTable(props: {
    requests: React.ReactNode,
}) {
    const tBodyProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { ease: "linear", duration: 0.5 }
    };

    return (
        <motion.div {...tBodyProps}>
            <LayoutGroup>
                <AnimatePresence initial={false}>
                    {props.requests}
                </AnimatePresence>
            </LayoutGroup>
        </motion.div>
    )
};