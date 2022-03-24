import React, { useEffect, useState } from "react"
import { SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../Button/Buttons";
import { StateRequest } from "../Status/Status";
import { StyledLink } from "../Text/style";
import {
    StyledFlexTd,
    StyledHeadTr,
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr,
    Tbody
} from "./style";
import IoTMobileLine from "./MobileLine/IoT";
import { ProoveModal } from "../Card/Modals";
import MaterialMobileLine from "./MobileLine/Material";
import { MediaContextProvider, Media } from "../MediaQueries/MediaSSR";
import Succes from "../NavIcons/succes";
import Fail from "../NavIcons/fail";

export const Buttons = (props: { status: string, id?: string }) => {
    return (
        <>
            {!(props.status == "active") &&
                <SmallGreenButton>
                    Accorder
                </SmallGreenButton>
            }
            {!(props.status == "declined") &&
                <SmallOrangeButton>
                    Revoquer
                </SmallOrangeButton>
            }
            <SmallRedButton>Supprimer</SmallRedButton>
        </>
    )
}

export function IoTAdminTable(props: { requests: any[], status: { old: string, new: string } }) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };
    let [Display, setDisplay] = useState({ active: "none", declined: "none", pending: "table-row-group" })
    let [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "" })
    let [Mount, setMount] = useState(false)

    useEffect(() => {
        if (Mount) {
            const newOpacity = { active: "", declined: "", pending: "" }
            newOpacity[props.status.old] = "out"
            setOpacity(newOpacity)

            const timer = setTimeout(() => {
                const newDisplay = { active: "none", declined: "none", pending: "none" }
                newDisplay[props.status.new] = "table-row-group"
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "" }
                newOpacity[props.status.new] = "in"
                setOpacity(newOpacity)
            }, 750);
            return () => clearTimeout(timer);
        }
        setMount(true)
    }, [props.status]);

    props.requests.map((value) => {
        listHTML[value['acces_state']].push(
            <StyledTr key={index[value['acces_state']]}>
                <StyledTd>{index[value['acces_state']]}</StyledTd>
                <StyledTd>
                    <StyledLink color="#096a09">{value['user_name']}</StyledLink>
                </StyledTd>
                <StyledTd style={{ textAlign: "center" }}>
                    {value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </StyledTd>
                <StyledFlexTd>{value['access_description']}</StyledFlexTd>
                <StyledTd>{value['access_mac']}</StyledTd>
                <StyledTd>
                    <ProoveModal request={value} link="/static/images/campus.png" />
                </StyledTd>
                <StyledTd>
                    <StateRequest state={value['acces_state']} />
                </StyledTd>
                <StyledTd>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: (props.status.new == "pending") ? "495px" : "320px",
                            transition: "width 0.75s linear",
                            overflow: "hidden"
                        }}
                    >
                        <Buttons status={value['acces_state']} />
                    </div>
                </StyledTd>
            </StyledTr>
        );

        mobilelistHTML[value['acces_state']].push(
            <IoTMobileLine key={index[value['acces_state']]} index={index[value['acces_state']]} value={value} status={props.status.new} />
        );

        index[value['acces_state']]++
    }
    )


    return (
        <MediaContextProvider>
            <Media at="sm">
                {mobilelistHTML[props.status.new]}
            </Media>
            <Media greaterThan="sm">
                <StyledTable>
                    <thead>
                        <StyledHeadTr style={{ position: "sticky", top: "0", zIndex: "2" }}>
                            <StyledTh scope="col">#</StyledTh>
                            <StyledTh scope="col">Utilisateur</StyledTh>
                            <StyledTh scope="col">Cotisation</StyledTh>
                            <StyledTh scope="col">Description</StyledTh>
                            <StyledTh scope="col">Adresse Mac</StyledTh>
                            <StyledTh scope="col">Preuve</StyledTh>
                            <StyledTh scope="col"><span style={{ paddingLeft: "5px" }}>Etat</span></StyledTh>
                            <StyledTh scope="col">
                                <div
                                    style={{
                                        width: (props.status.new == "pending") ? "500px" : "325px",
                                        paddingLeft: "5px",
                                        transition: "width 0.75s linear"
                                    }}
                                >
                                    Actions
                                </div>
                            </StyledTh>
                        </StyledHeadTr>
                    </thead>
                    <Tbody
                        opacityIn={Opacity.pending == "in"}
                        opacityOut={Opacity.pending == "out"}
                        Display={Display.pending}
                    >
                        {listHTML.pending}
                    </Tbody>
                    <Tbody
                        opacityIn={Opacity.active == "in"}
                        opacityOut={Opacity.active == "out"}
                        Display={Display.active}
                    >
                        {listHTML.active}
                    </Tbody>
                    <Tbody
                        opacityIn={Opacity.declined == "in"}
                        opacityOut={Opacity.declined == "out"}
                        Display={Display.declined}
                    >
                        {listHTML.declined}
                    </Tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};

export function MaterialAdminTable(props: { requests: any[], status: { old: string, new: string } }) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };
    let [Display, setDisplay] = useState({ active: "none", declined: "none", pending: "table-row-group" })
    let [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "" })
    let [Mount, setMount] = useState(false)

    useEffect(() => {
        if (Mount) {
            const newOpacity = { active: "", declined: "", pending: "" }
            newOpacity[props.status.old] = "out"
            setOpacity(newOpacity)

            const timer = setTimeout(() => {
                const newDisplay = { active: "none", declined: "none", pending: "none" }
                newDisplay[props.status.new] = "table-row-group"
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "" }
                newOpacity[props.status.new] = "in"
                setOpacity(newOpacity)
            }, 750);
            return () => clearTimeout(timer);
        }
        setMount(true)
    }, [props.status]);

    props.requests.map((value) => {
        listHTML[value['material_state']].push(
            <StyledTr key={index[value['material_state']]} style={{ padding: "10px 0 10px 30px" }}>
                <StyledTd>{index[value['material_state']]}</StyledTd>
                <StyledTd>
                    <StyledLink color="#096a09">{value['user_name']}</StyledLink>
                </StyledTd>
                <StyledTd style={{ textAlign: "center" }}>
                    {value['user_pay_status'] ? <Succes marginRight="15px" /> : <Fail marginRight="15px" />}
                </StyledTd>
                <StyledTd>{value['material_description']}</StyledTd>
                <StyledFlexTd >
                    <div style={{ width: "100px", textOverflow: "ellipsis", overflow: "hidden" }}>
                        {value['material_reason']}
                    </div>
                </StyledFlexTd>
                <StyledTd>
                    <StateRequest state={value['material_state']} />
                </StyledTd>
                <StyledTd style={{ paddingRight: "5px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: (props.status.new == "pending") ? "495px" : "320px",
                            transition: "width 0.75s linear",
                            overflow: "hidden"
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
                value={value}
                status={props.status.new}
            />
        )

        index[value['material_state']]++
    })

    return (
        <MediaContextProvider>
            <Media at="sm">
                {mobilelistHTML[props.status.new]}
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
                                        transition: "width 0.75s linear"
                                    }}
                                >
                                    Actions
                                </div>
                            </StyledTh>
                        </StyledHeadTr>
                    </thead>

                    <Tbody
                        opacityIn={Opacity.pending == "in"}
                        opacityOut={Opacity.pending == "out"}
                        Display={Display.pending}
                    >
                        {listHTML.pending}
                    </Tbody>
                    <Tbody
                        opacityIn={Opacity.active == "in"}
                        opacityOut={Opacity.active == "out"}
                        Display={Display.active}
                    >
                        {listHTML.active}
                    </Tbody>
                    <Tbody
                        opacityIn={Opacity.declined == "in"}
                        opacityOut={Opacity.declined == "out"}
                        Display={Display.declined}
                    >
                        {listHTML.declined}
                    </Tbody>
                </StyledTable>
            </Media>
        </MediaContextProvider>
    );
};

