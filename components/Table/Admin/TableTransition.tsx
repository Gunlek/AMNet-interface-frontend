import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { StyledTable, StyledHeadTr, StyledTh } from "../style";

export default function useTransition(ContainerRef: any, Requests: any[]) {
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true });
    const [Tab, setTab] = useState({ old: null, new: "pending" });

    const handleTabChange = (elmt) => {
        const id = elmt.currentTarget.id;
        const newTab = { ...Tab };
        newTab.old = Tab.new;
        newTab.new = id;
        setTab(newTab);
        const newDisplay = { active: false, declined: false, pending: false };
        newDisplay[id] = true;
        setDisplay(newDisplay);
    }

    return { Display, Tab, handleTabChange }
}

export function AdminTable(props: {
    children: React.ReactNode,
    status: { new: string },
    display: { declined: boolean }
}) {
    const tBodyProps = {
        as: motion.table,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { ease: "linear", duration: 0.5 }
    };

    return (
        <StyledTable {...tBodyProps}>
            <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
                <StyledHeadTr>
                    <StyledTh scope="col">#</StyledTh>
                    <StyledTh scope="col">Utilisateur</StyledTh>
                    <StyledTh scope="col">Cotisation</StyledTh>
                    <StyledTh scope="col">Description</StyledTh>
                    <StyledTh scope="col">Détails</StyledTh>
                    {props.display.declined && <StyledTh scope="col">Motif du Refus</StyledTh>}
                    <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                    <StyledTh scope="col">
                        <div
                            style={{
                                width: (props.status.new == "pending") ? "500px" : "325px",
                                paddingLeft: "5px",
                                transition: "width 0s linear 0.6s"
                            }}
                        >
                            Actions
                        </div>
                    </StyledTh>
                </StyledHeadTr>
            </thead>
            <tbody>
                <AnimatePresence initial={false}>{props.children}</AnimatePresence>
            </tbody>
        </StyledTable >
    )
};

export function MobileAdminTable(props: {
    children: React.ReactNode,
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
                    {props.children}
                </AnimatePresence>
            </LayoutGroup>
        </motion.div>
    )
};