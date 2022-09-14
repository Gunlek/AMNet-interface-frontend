import useMediaQuery from "../../MediaQueries/MediaQuery"
import { StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"
import Image from 'next/image'
import { useState } from "react"

export default function UserProofModal(props: { link: string, alt: string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1200px)')
    const { Display, Opacity, toggle } = ModalLogic()
    const [ratio, setRatio] = useState(16/9)
    
    return (
        <>
            <StyledLink color="#096a09" onClick={toggle}>Image</StyledLink>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal
                        width={minWidth1000 ? "800px" : undefined}
                        Opacity={Opacity}
                        style={{
                            maxHeight: "90vh",
                            padding: minWidth1000 ? "30px" : "20px",
                            paddingRight: minWidth1000 ? "17.5px" : "7.5px"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                overflow: "auto"
                            }}
                        >
                            <TitleCard>Photo de votre equipement</TitleCard>
                            <div style={{ position: "relative" }}>
                                <Image
                                    style={{ borderRadius: "30px" }}
                                    src={`${process.env.NEXT_PUBLIC_API_HOST}/proof/${props.link}`}
                                    alt={props.alt}
                                    width={800}
                                    height={800 / ratio}
                                    layout="responsive"
                                    onLoadingComplete={({ naturalWidth, naturalHeight }) => 
                                      setRatio(naturalWidth / naturalHeight)
                                    }
                                />
                            </div>
                        </div>
                    </StyledModal></>
            }
        </>
    )
} 