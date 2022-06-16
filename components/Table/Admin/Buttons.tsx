import axios from "axios"
import { SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../../Button/Buttons"

export const Buttons = (props: { status: string, id?: string, requestType: string }) => {
    const Delete = async (e) =>{
        e.preventDefault();
        await axios.delete(`http://localhost:3333/${props.requestType}/${props.id}`)
    }

    const Enable = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3333/${props.requestType}/enable/${props.id}`)
    }

    const Disable = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3333/${props.requestType}/enable/${props.id}`)
    }

    return (
        <>
            {!(props.status == "active") &&
                <SmallGreenButton onClick={Enable}>
                    Accorder
                </SmallGreenButton>
            }
            {!(props.status == "declined") &&
                <SmallOrangeButton onClick={Disable}>
                    Revoquer
                </SmallOrangeButton>
            }
            <SmallRedButton onClick={Delete}>Supprimer</SmallRedButton>
        </>
    )
}