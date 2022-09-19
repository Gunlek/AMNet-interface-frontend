import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { adminHardware } from "../../Utils/types";
import { StyledTr, StyledTd } from "../style";
import Buttons from "./Buttons";
import MaterialMobileLine from "./MobileLine/Material";
import { AdminTable, MobileAdminTable } from "./TableTransition";

function CreateTable({ requests, Display, setTab }: {
    requests: adminHardware[],
    Display: any,
    setTab: Function
}) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };

    requests.map((value) => {
        listHTML[value['material_state']].push(
            <StyledTr
                as={motion.tr}
                initial={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                animate={{ opacity: 1, borderBottom: "2px solid rgba(0,0,0,0.1)" }}
                exit={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                transition={{ ease: "linear" }}
                key={value.material_id}
            >
                <StyledTd>{index[value['material_state']]}</StyledTd>
                <StyledTd>
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
                <StyledTd style={{ textAlign: "center" }}>
                    {value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </StyledTd>
                <StyledTd>{value['material_description']}</StyledTd>
                <StyledTd style={{ whiteSpace: "normal" }}>
                    <div style={{ width: "400px" }}>
                        {value['material_reason']}
                    </div>
                </StyledTd>
                {value.material_state === "declined" && <StyledTd>{value.declined_reason}</StyledTd>}
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd style={{ paddingRight: "5px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: (value['material_state'] == "pending") ? "495px" : "320px"
                        }}
                    >
                        <Buttons
                            id={value['material_id']}
                            status={value['material_state']}
                            requestType="hardware"
                            setTab={setTab}
                        />
                    </div>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML[value['material_state']].push(
            <MaterialMobileLine
                key={value.material_id}
                index={index[value['material_state']]}
                display={Display}
                value={value}
                status={value['material_state']}
                setTab={setTab}
            />
        )

        index[value['material_state']]++
    });

    if (mobilelistHTML.active.length > 0) {
        mobilelistHTML.active[mobilelistHTML.active.length - 1] = <MaterialMobileLine
            {...mobilelistHTML.active[mobilelistHTML.active.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    if (mobilelistHTML.pending.length > 0) {
        mobilelistHTML.pending[mobilelistHTML.pending.length - 1] = <MaterialMobileLine
            {...mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    if (mobilelistHTML.declined.length > 0) {
        mobilelistHTML.declined[mobilelistHTML.declined.length - 1] = <MaterialMobileLine
            {...mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    return [listHTML, mobilelistHTML]
};

export default function MaterialAdminTable(props: {
    requests: adminHardware[],
    status: { old: string, new: string },
    display: { active: boolean, declined: boolean, pending: boolean },
    mobileRef: any,
    setTab: Function
}) {
    const [listHTML, mobilelistHTML] = CreateTable({
        requests: props.requests,
        Display: props.display,
        setTab: props.setTab
    });

    return (
        <MediaContextProvider>
            <div ref={props.mobileRef} style={{ height: "100%", width: "100%", overflow: "auto" }}>
                <Media at="sm">
                    <AnimatePresence initial={false} exitBeforeEnter>
                        {props.display.pending &&
                            <MobileAdminTable key="pending">
                                {mobilelistHTML.pending}
                            </MobileAdminTable>
                        }

                        {props.display.active &&
                            <MobileAdminTable key="active">
                                {mobilelistHTML.active}
                            </MobileAdminTable>
                        }

                        {props.display.declined &&
                            <MobileAdminTable key="declined">
                                {mobilelistHTML.declined}
                            </MobileAdminTable>
                        }
                    </AnimatePresence>
                </Media>

                <Media greaterThan="sm">
                    <AnimatePresence initial={false} exitBeforeEnter>
                        {props.display.pending &&
                            <AdminTable key="pending" status={props.status} display={props.display}>
                                <AnimatePresence initial={false}>{listHTML.pending}</AnimatePresence>
                            </AdminTable>
                        }
                        {props.display.active &&
                            <AdminTable key="active" status={props.status} display={props.display}>
                                <AnimatePresence initial={false}>{listHTML.active}</AnimatePresence>
                            </AdminTable>
                        }
                        {props.display.declined &&
                            <AdminTable key="declined" status={props.status} display={props.display}>
                                <AnimatePresence initial={false}>{listHTML.declined}</AnimatePresence>
                            </AdminTable>
                        }
                    </AnimatePresence>
                </Media>
            </div>
        </MediaContextProvider>
    );
};