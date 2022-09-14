import axios from "axios"
import { SmallGreenButton, SmallRedButton } from "../../Button/Buttons"
import dynamic from "next/dynamic";
import { SmallStyledOrangeButton } from "../../Button/style";
const DeclinedRequestModal = dynamic(() => import("../../Card/Modals/DeclinedRequestModal"), {
  loading: () => <SmallStyledOrangeButton>Revoquer</SmallStyledOrangeButton>
});

export const Buttons = (props: {
    status: string,
    id: Number,
    requestType: string,
    setTab: Function,
    inProof?: boolean,
    toggleProofModal?: Function
}) => {

    const handleTabChange = async () => {
        const newTab = await (await axios.get(`/${props.requestType}`)).data
        props.setTab(newTab);
        if (props.toggleProofModal) props.toggleProofModal();
    };

    const Delete = async (e) => {
        e.preventDefault();
        await axios.delete(`/${props.requestType}/${props.id}`);
        handleTabChange();
    };

    const Enable = async (e) => {
        e.preventDefault();
        await axios.put(`/${props.requestType}/enable/${props.id}`);
        handleTabChange();
    };

    return (
        <>
            {!(props.status == "active") &&
                <SmallGreenButton onClick={Enable}>
                    Accorder
                </SmallGreenButton>
            }
            {!(props.status == "declined") &&
                <DeclinedRequestModal
                    handleTabChange={handleTabChange}
                    requestType={props.requestType}
                    id={props.id}
                    inProof={props.inProof}
                />
            }
            <SmallRedButton onClick={Delete}>Supprimer</SmallRedButton>
        </>
    )
}