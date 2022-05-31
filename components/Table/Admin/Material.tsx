import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { StyledTr, StyledTd, MobileTbody, StyledTable, StyledHeadTr, StyledTh, Tbody } from "../style";
import { Buttons } from "./Buttons";
import MaterialMobileLine from "./MobileLine/Material";

export default function MaterialAdminTable(props: { requests: any[], status: { old: string, new: string } }) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };
    const [Display, setDisplay] = useState({ active: false, declined: false, pending: true })
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "" })
    const ContainerRef = useRef(null)

    useEffect(() => {
        if (props.status.old !== null) {
            const newOpacity = { active: "", declined: "", pending: "" }
            newOpacity[props.status.old] = "out"
            setOpacity(newOpacity)

            setTimeout(() => {
                const newDisplay = { active: false, declined: false, pending: false }
                newDisplay[props.status.new] = true
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "" }
                newOpacity[props.status.new] = "in"
                setOpacity(newOpacity)
                ContainerRef.current.scrollTo({ top: 0 })
            }, 500);
        }
    }, [props.status]);

    props.requests.map((value) => {
        listHTML[value['material_state']].push(
            <StyledTr key={index[value['material_state']]} style={{ padding: "10px 0 10px 30px" }}>
                <StyledTd>{index[value['material_state']]}</StyledTd>
                <StyledTd>
                    <Link
                        href={{
                            pathname: '/admin/users/[user_id]',
                            query: { user_id: value['material_user'] },
                        }}
                        prefetch={false}
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
                            width: (props.status.new == "pending") ? "495px" : "320px",
                            transition: "width 0.5s linear"
                        }}
                    >
                        <Buttons status={value['material_state']} />
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
            />
        )

        index[value['material_state']]++
    });

    mobilelistHTML.active[mobilelistHTML.active.length - 1] = <MaterialMobileLine
        {...mobilelistHTML.active[mobilelistHTML.active.length - 1].props}
        isLast={true}
    />

    mobilelistHTML.pending[mobilelistHTML.pending.length - 1] = <MaterialMobileLine
        {...mobilelistHTML.pending[mobilelistHTML.pending.length - 1].props}
        isLast={true}
    />

    mobilelistHTML.declined[mobilelistHTML.declined.length - 1] = <MaterialMobileLine
        {...mobilelistHTML.declined[mobilelistHTML.declined.length - 1].props}
        isLast={true}
    />

    return (
        <MediaContextProvider>
            <div ref={ContainerRef} style={{ height: "100%", width: "100%", overflow: "auto" }}>
                <Media at="sm">
                    {Display.pending &&
                        <MobileTbody Opacity={Opacity.pending}>
                            {mobilelistHTML.pending}
                        </MobileTbody>
                    }

                    {Display.active &&
                        <MobileTbody Opacity={Opacity.active}>
                            {mobilelistHTML.active}
                        </MobileTbody>
                    }

                    {Display.declined &&
                        <MobileTbody Opacity={Opacity.declined} >
                            {mobilelistHTML.declined}
                        </MobileTbody>
                    }
                </Media>

                <Media greaterThan="sm">
                    <StyledTable>
                        <thead style={{ position: "sticky", top: "0", zIndex: "2" }}>
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
                                            transition: "width 0.5s linear"
                                        }}
                                    >
                                        Actions
                                    </div>
                                </StyledTh>
                            </StyledHeadTr>
                        </thead>

                        {Display.pending &&
                            <Tbody Opacity={Opacity.pending}>
                                {listHTML.pending}
                            </Tbody>
                        }

                        {Display.active &&
                            <Tbody Opacity={Opacity.active}>
                                {listHTML.active}
                            </Tbody>
                        }

                        {Display.declined &&
                            <Tbody Opacity={Opacity.declined} >
                                {listHTML.declined}
                            </Tbody>
                        }
                    </StyledTable>
                </Media>
            </div>
        </MediaContextProvider>
    );
};