import { MediaContextProvider, Media } from "../../../MediaQueries/MediaSSR";
import { adminAccess } from "../../../Utils/types";
import { AnimatePresence } from "framer-motion";
import { AdminTable } from "./Table";
import AutoSizer from "react-virtualized-auto-sizer";

function CreateSplitList(requests: adminAccess[]) {
    const list = { active: [], declined: [], pending: [] };

    requests.map((value) => {
        list[value['access_state']].push(
            value
        );
    });

    return list
}

export default function IoTAdminTable(props: {
    requests: adminAccess[],
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
                        exitBeforeEnter={props.status.old ? list[props.status.old].length > 0 : list.pending.length > 0}
                    >

                    </AnimatePresence>
                </Media>

                <Media greaterThan="sm">
                    <AnimatePresence initial={false} exitBeforeEnter>
                        {props.display.pending &&
                            <AdminTable key="pending" status={props.status} display={props.display} requests={list.pending} />

                        }
                        {props.display.active &&
                            <AdminTable key="active" status={props.status} display={props.display} requests={list.active} />

                        }
                        {props.display.declined &&
                            <AdminTable key="declined" status={props.status} display={props.display} requests={list.declined} />

                        }
                    </AnimatePresence>
                </Media>
            </div>
        </MediaContextProvider>


    );
};