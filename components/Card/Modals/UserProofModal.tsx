import useMediaQuery from "../../MediaQueries/MediaQuery"
import { StyledLink } from "../../Text/style"
import { TitleCard } from "../Cards"
import { ModalLogic } from "./ModalLogic"
import Image from 'next/image'
import { useState } from "react"
import { DefaultModal } from "./Modal"

export default function UserProofModal(props: { link: string, alt: string }) {
    const minWidth1000 = useMediaQuery('(min-width: 1200px)');
    const { Display, toggle } = ModalLogic();
    const [ratio, setRatio] = useState(16 / 9);

    return (
        <>
            <StyledLink color="#096a09" onClick={toggle}>Image</StyledLink>
            <DefaultModal
                toggle={toggle}
                Display={Display}
                style={{
                    width: minWidth1000 ? "800px" : undefined,
                    padding: minWidth1000 ? "30px" : "20px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        overflow: "auto"
                    }}
                >
                    <TitleCard>Photo de votre equipement</TitleCard>
                    <div>
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
            </DefaultModal>
        </>
    )
} 