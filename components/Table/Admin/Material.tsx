import { useState, useEffect } from "react";
import { MediaContextProvider, Media } from "../../MediaQueries/MediaSSR";
import Fail from "../../NavIcons/fail";
import Succes from "../../NavIcons/succes";
import { StateRequest } from "../../Status/Status";
import { StyledLink } from "../../Text/style";
import { StyledTr, StyledTd, StyledFlexTd, MobileTbody, StyledTable, StyledHeadTr, StyledTh, Tbody } from "../style";
import { Buttons } from "./Buttons";
import MaterialMobileLine from "./MobileLine/Material";

export default function MaterialAdminTable(props: { requests: any[], status: { old: string, new: string } }) {
    let listHTML = { active: [], declined: [], pending: [] };
    let mobilelistHTML = { active: [], declined: [], pending: [] };
    let index = { active: 1, declined: 1, pending: 1 };
    const [Display, setDisplay] = useState({ active: "none", declined: "none", pending: "table-row-group" })
    const [Opacity, setOpacity] = useState({ active: "", declined: "", pending: "" })
    const [Mount, setMount] = useState(false)

    useEffect(() => {
        if (Mount) {
            const newOpacity = { active: "", declined: "", pending: "" }
            newOpacity[props.status.old] = "out"
            setOpacity(newOpacity)

            setTimeout(() => {
                const newDisplay = { active: "none", declined: "none", pending: "none" }
                newDisplay[props.status.new] = "table-row-group"
                setDisplay(newDisplay)
                const newOpacity = { active: "", declined: "", pending: "" }
                newOpacity[props.status.new] = "in"
                setOpacity(newOpacity)
            }, 750);
        }

        if (!Mount) setMount(true)
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
                <StyledFlexTd style={{ whiteSpace: "normal" }}>
                        {value['material_reason']}
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
                display={Display}
                value={value}
                status={props.status.new}
            />
        )

        index[value['material_state']]++
    });

    return (
        <MediaContextProvider>
            <Media at="sm">
                <MobileTbody
                    opacityIn={Opacity.pending == "in"}
                    opacityOut={Opacity.pending == "out"}
                    Display={Display.pending}
                >
                    {mobilelistHTML.pending}
                </MobileTbody>
                <MobileTbody
                    opacityIn={Opacity.active == "in"}
                    opacityOut={Opacity.active == "out"}
                    Display={Display.active}
                >
                    {mobilelistHTML.active}
                </MobileTbody>
                <MobileTbody
                    opacityIn={Opacity.declined == "in"}
                    opacityOut={Opacity.declined == "out"}
                    Display={Display.declined}
                >
                    {mobilelistHTML.declined}
                </MobileTbody>
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