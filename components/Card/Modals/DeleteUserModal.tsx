import axios, { AxiosResponse } from "axios"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { RedButton } from "../../Button/Buttons"
import { BlackText } from "../../Text/style"
import ModalLogic from "./ModalLogic"
import { StyledBackgroundModal, StyledModal } from "./style"

export default function DeleteUserModal(props: { userId: number }) {
    const { Display, Opacity, toggle } = ModalLogic();
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/homepage');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteUser = (elmt) => {
        elmt.preventDefault();

        axios.delete(`/user/${props.userId}`)
            .then((res: AxiosResponse) => {
                if (res.status === 200) router.push('/homepage', null, { scroll: false })
            });
    };

    return (
        <>
            <RedButton mobileWidth="100%" mobileMarginBottom="25px" onClick={toggle}>Supprimer mon compte</RedButton>
            {Display &&
                <>
                    <StyledBackgroundModal onClick={toggle} Opacity={Opacity} />
                    <StyledModal style={{ width: "450px" }} Opacity={Opacity}>
                        <BlackText style={{ marginBottom: "30px", textAlign: "justify" }}>
                            Êtes-vous sûr de vouloir supprimer votre compte ? <br />
                            Cette action est totalement irréversible <br />
                        </BlackText>
                        <RedButton mobileWidth="100%" onClick={deleteUser}>Supprimer mon compte</RedButton>
                    </StyledModal>
                </>
            }
        </>
    )
}