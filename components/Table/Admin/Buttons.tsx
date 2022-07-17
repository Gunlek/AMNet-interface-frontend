import axios from "axios"
import { SmallGreenButton, SmallOrangeButton, SmallRedButton } from "../../Button/Buttons"

export const Buttons = (props: {
    status: string,
    id: Number,
    requestType: string,
    setTab: Function
}) => {
    const handleTabChange = async () => {
        const newTab = await (await axios.get(`/${props.requestType}`)).data
        console.log(newTab)
        props.setTab(newTab);
    }

    const Delete = async (e) => {
        e.preventDefault();
        await axios.delete(`/${props.requestType}/${props.id}`);
        handleTabChange()
    }

    const Enable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/enable/${props.id}`);
        handleTabChange()
    }

    const Disable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/disable/${props.id}`);
        handleTabChange()
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