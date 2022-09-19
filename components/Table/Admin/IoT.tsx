import Link from "next/link";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { StyledTr, StyledTd } from "../style";
import Buttons from "./Buttons";
import MacAdressTd from "../../Input/MacAddressInput";
import IoTMobileLine from "./MobileLine/IoT";
import { adminAccess } from "../../Utils/types";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { MobileAdminTable, AdminTable } from "./TableTransition";
const ProofModal = dynamic(() => import("../../Card/Modals/AdminProofModal"), {
    loading: () => <StyledLink color="#096a09">Image</StyledLink>
});

function CreateTable({ requests, Display, setTab }: {
    requests: adminAccess[],
    Display: any,
    setTab: Function
}) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };

    requests.map((value, id) => {
        listHTML[value['access_state']].push(
            <StyledTr
                as={motion.tr}
                key={value.access_id}
                initial={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                animate={{ opacity: 1, borderBottom: "2px solid rgba(0,0,0,0.1)" }}
                exit={{ opacity: 0, borderBottom: "2px solid rgba(0,0,0,0)" }}
                transition={{ ease: "linear" }}
            >
                <StyledTd>{index[value['access_state']]}</StyledTd>
                <StyledTd>
                    <Link
                        href={{
                            pathname: '/admin/users/[user_id]',
                            query: { user_id: value['access_user'] },
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
                <StyledTd>{value['access_description']}</StyledTd>
                {value.access_state === "declined" && <StyledTd>{value.declined_reason}</StyledTd>}
                <MacAdressTd access_mac={value['access_mac']} access_id={value.access_id} />
                <StyledTd style={{ textAlign: "center" }}>
                    <ProofModal request={value} setTab={setTab} />
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value['access_state']} />
                </StyledTd>
                <StyledTd>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: (value['access_state'] == "pending") ? "495px" : "320px",
                        }}
                    >
                        <Buttons
                            status={value['access_state']}
                            id={value['access_id']}
                            requestType="access"
                            setTab={setTab}
                        />
                    </div>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML[value['access_state']].push(
            <IoTMobileLine
                key={value.access_id}
                index={index[value['access_state']]}
                value={value}
                status={value['access_state']}
                display={Display}
                setTab={setTab}
            />
        );

        index[value['access_state']]++
    });

    if (mobilelistHTML.active.length > 0) {
        mobilelistHTML.active[mobilelistHTML.active.length - 1] = <IoTMobileLine
            {...mobilelistHTML.active[mobilelistHTML.active.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    if (mobilelistHTML.pending.length > 0) {
        mobilelistHTML.pending[mobilelistHTML.pending.length - 1] = <IoTMobileLine
            {...mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    if (mobilelistHTML.declined.length > 0) {
        mobilelistHTML.declined[mobilelistHTML.declined.length - 1] = <IoTMobileLine
            {...mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props}
            key={"last"}
            isLast={true}
        />
    }

    return [listHTML, mobilelistHTML]
}

export default function IoTAdminTable(props: {
    requests: adminAccess[],
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