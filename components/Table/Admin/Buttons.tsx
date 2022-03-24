import { SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../../Button/Buttons"

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