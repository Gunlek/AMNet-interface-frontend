import Link from "next/link";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { adminHardware } from "../../Utils/types";
import { StyledTr, StyledTd, MobileTbody, StyledTable, StyledHeadTr, StyledTh, Tbody, Thead } from "../style";
import { Buttons } from "./Buttons";
import MaterialMobileLine from "./MobileLine/Material";

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
            <StyledTr key={index[value['material_state']]} style={{ padding: "10px 0 10px 30px" }}>
                <StyledTd>{index[value['material_state']]}</StyledTd>
                <StyledTd>
                    <Link
                        href={{
                            pathname: '/admin/users/[user_id]',
                            query: { user_id: value['material_user'] },
                        }}
                        passHref
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
                key={index[value['material_state']]}
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
            key={mobilelistHTML.active[mobilelistHTML.pending.length - 1]}
            isLast={true}
        />
    }

    if (mobilelistHTML.pending.length > 0) {
        mobilelistHTML.pending[mobilelistHTML.pending.length - 1] = <MaterialMobileLine
            {...mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props}
            key={mobilelistHTML.pending[mobilelistHTML.pending.length - 1]}
            isLast={true}
        />
    }

    if (mobilelistHTML.declined.length > 0) {
        mobilelistHTML.declined[mobilelistHTML.declined.length - 1] = <MaterialMobileLine
            {...mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props}
            key={mobilelistHTML.declined[mobilelistHTML.pending.length - 1]}
            isLast={true}
        />
    }

    return [listHTML, mobilelistHTML]
}


export default function MaterialAdminTable(props: {
    requests: adminHardware[],
    status: { old: string, new: string },
    display: { active: boolean, declined: boolean, pending: boolean },
    opacity: { active: string, declined: string, pending: string, head: string },
    mobileRef: any,
    setTab: Function
}) {
    const [listHTML, mobilelistHTML] = CreateTable({ 
        requests: props.requests, 
        Display: props.display,
        setTab: props.setTab
    })

    return (
        <MediaContextProvider>
            <div ref={props.mobileRef} style={{ height: "100%", width: "100%", overflow: "auto" }}>
                <Media at="sm">
                    {props.display.pending &&
                        <MobileTbody Opacity={props.opacity.pending}>
                            {mobilelistHTML.pending}
                        </MobileTbody>
                    }

                    {props.display.active &&
                        <MobileTbody Opacity={props.opacity.active}>
                            {mobilelistHTML.active}
                        </MobileTbody>
                    }

                    {props.display.declined &&
                        <MobileTbody Opacity={props.opacity.declined} >
                            {mobilelistHTML.declined}
                        </MobileTbody>
                    }
                </Media>

                <Media greaterThan="sm">
                    <StyledTable>
                        <Thead Opacity={props.opacity.head} style={{ position: "sticky", top: "0", zIndex: "2" }}>
                            <StyledHeadTr>
                                <StyledTh scope="col">#</StyledTh>
                                <StyledTh scope="col">Utilisateur</StyledTh>
                                <StyledTh scope="col">Cotisation</StyledTh>
                                <StyledTh scope="col">Description</StyledTh>
                                <StyledTh scope="col">Détails</StyledTh>
                                <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                                <StyledTh scope="col">
                                    <div
                                        style={{
                                            width: (props.status.new == "pending") ? "500px" : "325px",
                                            paddingLeft: "5px",
                                            transition: "width 0s linear 0.75s"
                                        }}
                                    >
                                        Actions
                                    </div>
                                </StyledTh>
                            </StyledHeadTr>
                        </Thead>

                        {props.display.pending &&
                            <Tbody Opacity={props.opacity.pending}>
                                {listHTML.pending}
                            </Tbody>
                        }

                        {props.display.active &&
                            <Tbody Opacity={props.opacity.active}>
                                {listHTML.active}
                            </Tbody>
                        }

                        {props.display.declined &&
                            <Tbody Opacity={props.opacity.declined} >
                                {listHTML.declined}
                            </Tbody>
                        }
                    </StyledTable>
                </Media>
            </div>
        </MediaContextProvider>
    );
};