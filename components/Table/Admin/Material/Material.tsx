import { MediaContextProvider, Media } from "../../../MediaQueries/MediaSSR";
import { adminAccess, adminHardware } from "../../../Utils/types";
import { AnimatePresence } from "framer-motion";
import { AdminTable, MobileAdminTable } from "./Table";

function CreateSplitList(requests: adminHardware[]) {
    const list = { active: [], declined: [], pending: [] };

    requests.map((value) => {
        list[value['material_state']].push(
            value
        );
    });

    return list
}

export default function IoTAdminTable(props: {
    requests: adminHardware[],
    status: { old: string, new: string },
    display: { active: boolean, declined: boolean, pending: boolean },
    setTab: Function
}) {
    const style = { width: "100%", height: "100%" };

    const list = CreateSplitList(props.requests);

    return (
        <MediaContextProvider>
            <Media at="sm" style={style}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                >
                    {props.display.pending &&
                        <MobileAdminTable
                            key="pending"
                            requests={list.pending}
                            setTab={props.setTab}
                        />
                    }
                    {props.display.active &&
                        <MobileAdminTable
                            key="active"
                            requests={list.active}
                            setTab={props.setTab}
                        />
                    }
                    {props.display.declined &&
                        <MobileAdminTable
                            key="declined"
                            requests={list.declined}
                            setTab={props.setTab}
                        />
                    }
                </AnimatePresence>
            </Media>

            <Media greaterThan="sm" style={style}>
                <AnimatePresence initial={false} exitBeforeEnter>
                    {props.display.pending &&
                        <AdminTable
                            key="pending"
                            status={props.status}
                            display={props.display}
                            requests={list.pending}
                            setTab={props.setTab}
                        />
                    }
                    {props.display.active &&
                        <AdminTable
                            key="active"
                            status={props.status}
                            display={props.display}
                            requests={list.active}
                            setTab={props.setTab}
                        />
                    }
                    {props.display.declined &&
                        <AdminTable
                            key="declined"
                            status={props.status}
                            display={props.display}
                            requests={list.declined}
                            setTab={props.setTab}
                        />
                    }
                </AnimatePresence>
            </Media>
        </MediaContextProvider>
    );
};