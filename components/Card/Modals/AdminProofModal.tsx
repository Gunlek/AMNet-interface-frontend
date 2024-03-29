import Link from "next/link";
import { ResponsiveRow, Col8, Col4 } from "../../Container/style";
import useMediaQuery from "../../MediaQueries/MediaQuery";
import { StateRequest } from "../../Status/Status";
import { Buttons } from "../../Table/Admin/Buttons";
import MacAdressTd from "../../Input/MacAddressInput";
import { StyledTable, StyledHeadTr, StyledTh, StyledTr, StyledTd } from "../../Table/style";
import { StyledLink } from "../../Text/style";
import { TitleCard } from "../Cards";
import ModalLogic from "./ModalLogic";
import Image from 'next/image';
import { DefaultModal } from "./Modal";

export default function ProofModal(props: { request: any, setTab: Function }) {
    const minWidth1000 = useMediaQuery('(min-width: 1250px)');
    const { Display, toggle } = ModalLogic();

    return (
        <>
            <StyledLink color="#096a09" onClick={toggle}>Image</StyledLink>
            <DefaultModal
                toggle={toggle}
                style={{
                    padding: minWidth1000 ? "30px" : "20px",
                    paddingRight: minWidth1000 ? "17.5px" : "7.5px",
                    width: minWidth1000 ? "1250px" : undefined
                }}
                Display={Display}
            >
                <div
                    style={{
                        width: "100%",
                        overflow: "auto"
                    }}
                >
                    <TitleCard hideLine={!minWidth1000}>Demande d&apos;accès pour un objet connecté</TitleCard>
                    <ResponsiveRow>
                        <Col8 style={{ paddingRight: minWidth1000 ? "1%" : "0", marginBottom: minWidth1000 ? "0" : "20px" }}>
                            <div style={{ position: "relative", width: "100%", height: minWidth1000 ? "100%" : "300px" }}>
                                <Image
                                    alt={props.request['access_description']}
                                    style={{ borderRadius: "30px" }}
                                    src={`${process.env.NEXT_PUBLIC_API_HOST}/proof/${props.request['access_proof']}`}
                                    quality="50"
                                    layout="fill"
                                    objectFit="contain"
                                    sizes="(max-width: 1000px) 85vw, 800px"
                                />
                            </div>
                        </Col8>
                        <Col4 style={{ paddingLeft: minWidth1000 ? "1%" : "0", overflow: "auto" }}>
                            <StyledTable>
                                <tbody>
                                    <StyledHeadTr>
                                        <StyledTh>Equipement</StyledTh>
                                        <StyledTh style={{ textAlign: "center", width: "230px" }}>{props.request['access_description']}</StyledTh>
                                    </StyledHeadTr>
                                    <StyledTr>
                                        <StyledTd>Utilisateur</StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            <Link
                                                href={{
                                                    pathname: '/admin/users/[user_id]',
                                                    query: { user_id: props.request['access_user'] },
                                                }}
                                                passHref
                                            >
                                                <StyledLink color="#096a09">{props.request['user_name']}</StyledLink>
                                            </Link>
                                        </StyledTd>
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Adresse Mac</StyledTd>
                                        <MacAdressTd access_mac={props.request['access_mac']} access_id={props.request.access_id} />
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Etat</StyledTd>
                                        <StyledTd><StateRequest center={true} state={props.request['access_state']} /></StyledTd>
                                    </StyledTr>
                                    <StyledTr>
                                        <StyledTd>Actions</StyledTd>
                                        <StyledTd style={{ textAlign: "center" }}>
                                            <div
                                                style={{
                                                    height: (props.request['access_state'] == "pending") ? "160px" : "100px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    flexDirection: "column"
                                                }}
                                            >
                                                <Buttons
                                                    id={props.request['access_id']}
                                                    status={props.request['access_state']}
                                                    requestType="access"
                                                    setTab={props.setTab}
                                                    inProof={true}
                                                    toggleProofModal={toggle}
                                                />
                                            </div>
                                        </StyledTd>
                                    </StyledTr>
                                </tbody>
                            </StyledTable>
                        </Col4>
                    </ResponsiveRow>
                </div>
            </DefaultModal>
        </>
    )
}
