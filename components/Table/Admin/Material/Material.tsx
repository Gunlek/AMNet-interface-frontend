import { AnimatePresence } from "framer-motion";
import React from "react";
import { MediaContextProvider, Media } from "../../../MediaQueries/MediaSSR";
import { adminHardware } from "../../../Utils/types";

function CreateSplitList(requests: adminHardware[]) {
    let list = { active: [], declined: [], pending: [] };

    requests.map((value) => {
        list[value['material_state']].push(value);
    });

    return list
};

export default function MaterialAdminTable(props: {
    requests: adminHardware[],
    status: { old: string, new: string },
    display: { active: boolean, declined: boolean, pending: boolean },
    setTab: Function
}) {
    const list = CreateSplitList(props.requests);

    return (
        <MediaContextProvider>
            <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
                <Media at="sm">
                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={props.status.old ? mobilelistHTML[props.status.old].length > 0 : mobilelistHTML.pending.length > 0}
                    >
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